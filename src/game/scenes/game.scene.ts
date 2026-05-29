import Phaser from 'phaser';
import { Board } from '../models/board';
import { getPieceSet, PieceShape } from '../models/piece-definitions';
import { Prng } from '../systems/prng';
import { PieceGenerator } from '../systems/piece-generator';
import { ScoreCalculator } from '../systems/score-calculator';
import { GameStateService } from '../../app/services/game-state';
import { SKINS_CATALOG } from '../../app/services/skins-catalog';

interface GameConfig {
  boardDimension?: number;
  pieceSet?: string;
  seed?: string;
  activeSkin?: string;
  smilingFacesEnabled?: boolean;
  musicVolume?: number;
  sfxVolume?: number;
  difficulty?: 'easy' | 'medium' | 'hard';
}

const CELL_GAP = 2;
const TRAY_SCALE = 0.55;
const DRAG_SCALE = 1.15;
const CORNER_R = 6;

export class GameScene extends Phaser.Scene {
  private board!: Board;
  private rng!: Prng;
  private pieceGen = new PieceGenerator();
  private scoreCalc = new ScoreCalculator();
  private gameState!: GameStateService;
  private config!: GameConfig;

  private pieces!: PieceShape[];
  private tray: (PieceShape | null)[] = [null, null, null];

  private cellSize = 36;
  private boardX = 0;
  private boardY = 0;

  private boardGfx!: Phaser.GameObjects.Graphics;
  private trayGfx!: Phaser.GameObjects.Graphics;
  private traySlots: Phaser.GameObjects.Container[] = [];

  private dragging: { slotIdx: number; shape: PieceShape; container: Phaser.GameObjects.Container } | null = null;
  private ghostGfx!: Phaser.GameObjects.Graphics;
  private colors: string[] = [];

  private isReadOnly = false;
  private elapsed = 0;

  constructor() { super({ key: 'GameScene' }); }

  init(data: { gameState: GameStateService; config: GameConfig }) {
    this.gameState = data.gameState;
    this.config = data.config;
  }

  create() {
    const skin = SKINS_CATALOG.find(s => s.id === (this.config.activeSkin ?? 'default')) ?? SKINS_CATALOG[0];
    this.colors = skin!.colors.map(c => c.hsl);

    const dim = this.config.boardDimension ?? 8;
    this.board = new Board(dim);
    this.rng = new Prng(this.config.seed ?? 'default');
    this.pieces = getPieceSet(this.config.pieceSet ?? 'classic');

    this.layout();

    this.boardGfx = this.add.graphics();
    this.ghostGfx = this.add.graphics();
    this.trayGfx = this.add.graphics();

    this.drawBoard();
    this.fillTray();
    this.drawTray();

    this.setupDrag();
    this.setupEvents();
  }

  override update(_time: number, delta: number) {
    if (this.isReadOnly) return;
    this.elapsed += delta / 1000;
    this.gameState.updateElapsedTime(Math.floor(this.elapsed));
  }

  private layout() {
    const { width, height } = this.scale;
    const dim = this.board.dimension;
    const maxBoard = Math.min(width * 0.92, height * 0.60);
    this.cellSize = Math.floor((maxBoard - (dim - 1) * CELL_GAP) / dim);
    const boardW = dim * this.cellSize + (dim - 1) * CELL_GAP;
    const boardH = boardW;
    this.boardX = Math.floor((width - boardW) / 2);
    this.boardY = Math.floor(height * 0.04);
  }

  private drawBoard() {
    const g = this.boardGfx;
    g.clear();
    const dim = this.board.dimension;
    const grid = this.board.getGrid();

    for (let r = 0; r < dim; r++) {
      for (let c = 0; c < dim; c++) {
        const x = this.boardX + c * (this.cellSize + CELL_GAP);
        const y = this.boardY + r * (this.cellSize + CELL_GAP);
        const cell = grid[r]?.[c];
        if (cell?.filled) {
          const col = Phaser.Display.Color.HexStringToColor(this.hslToHex(cell.color)).color;
          g.fillStyle(col, 1);
          g.fillRoundedRect(x, y, this.cellSize, this.cellSize, CORNER_R);
        } else {
          g.fillStyle(0x1e2535, 1);
          g.fillRoundedRect(x, y, this.cellSize, this.cellSize, CORNER_R);
          g.lineStyle(1, 0x2a3348, 0.6);
          g.strokeRoundedRect(x, y, this.cellSize, this.cellSize, CORNER_R);
        }
      }
    }
  }

  private fillTray() {
    const dim = this.board.dimension;
    const diff = this.config.difficulty ?? 'medium';
    const indices = this.pieceGen.selectTrio(this.board, this.rng, this.pieces, diff);
    if (indices === null) {
      this.game.events.emit('bms:game-over');
      return;
    }
    for (let i = 0; i < 3; i++) {
      const idx = indices[i];
      this.tray[i] = idx !== -1 && idx < this.pieces.length ? this.pieces[idx]! : null;
    }
    // Check if game is over after filling
    const anyFits = this.tray.some(p => p && this.board.hasAnyValidPlacement(p));
    if (!anyFits) {
      this.time.delayedCall(200, () => this.game.events.emit('bms:game-over'));
    }
  }

  private drawTray() {
    this.traySlots.forEach(c => c.destroy());
    this.traySlots = [];
    this.trayGfx.clear();

    const { width, height } = this.scale;
    const trayY = this.boardY + this.board.dimension * (this.cellSize + CELL_GAP) + 20;
    const slotW = width / 3;

    for (let i = 0; i < 3; i++) {
      const shape = this.tray[i];
      if (!shape) continue;
      const cx = slotW * i + slotW / 2;
      const cy = trayY + (height - trayY) / 2;
      const container = this.createPieceContainer(shape, cx, cy, TRAY_SCALE, i);
      this.traySlots[i] = container;
    }
  }

  private createPieceContainer(shape: PieceShape, x: number, y: number, scale: number, colorIdx: number): Phaser.GameObjects.Container {
    const g = this.add.graphics();
    const cs = this.cellSize * scale;
    const rows = shape.length;
    const cols = shape[0]?.length ?? 0;
    const offX = -((cols * cs + (cols - 1) * CELL_GAP * scale) / 2);
    const offY = -((rows * cs + (rows - 1) * CELL_GAP * scale) / 2);
    const colStr = this.colors[colorIdx % this.colors.length] ?? this.colors[0]!;
    const col = Phaser.Display.Color.HexStringToColor(this.hslToHex(colStr)).color;

    for (let r = 0; r < rows; r++) {
      const shapeRow = shape[r];
      if (!shapeRow) continue;
      for (let c = 0; c < shapeRow.length; c++) {
        if (!shapeRow[c]) continue;
        const px = offX + c * (cs + CELL_GAP * scale);
        const py = offY + r * (cs + CELL_GAP * scale);
        g.fillStyle(col, 1);
        g.fillRoundedRect(px, py, cs, cs, CORNER_R * scale);
      }
    }
    const container = this.add.container(x, y, [g]);
    container.setInteractive(new Phaser.Geom.Rectangle(offX, offY, cols * (cs + CELL_GAP * scale), rows * (cs + CELL_GAP * scale)), Phaser.Geom.Rectangle.Contains);
    return container;
  }

  private setupDrag() {
    this.input.on('pointerdown', (ptr: Phaser.Input.Pointer) => {
      for (let i = 0; i < 3; i++) {
        const slot = this.traySlots[i];
        const shape = this.tray[i];
        if (!slot || !shape) continue;
        if (slot.getBounds().contains(ptr.x, ptr.y)) {
          this.startDrag(i, shape, ptr.x, ptr.y);
          break;
        }
      }
    });

    this.input.on('pointermove', (ptr: Phaser.Input.Pointer) => {
      if (!this.dragging) return;
      this.dragging.container.setPosition(ptr.x, ptr.y);
      this.drawGhost(ptr.x, ptr.y);
    });

    this.input.on('pointerup', (ptr: Phaser.Input.Pointer) => {
      if (!this.dragging) return;
      this.tryDrop(ptr.x, ptr.y);
    });

    this.input.on('pointercancel', () => {
      if (!this.dragging) return;
      this.dragging.container.destroy();
      this.dragging = null;
      this.ghostGfx.clear();
      this.drawTray();
    });
  }

  private startDrag(slotIdx: number, shape: PieceShape, x: number, y: number) {
    const colorIdx = slotIdx;
    const container = this.createPieceContainer(shape, x, y, DRAG_SCALE, colorIdx);
    container.setDepth(10);
    // Hide tray slot
    if (this.traySlots[slotIdx]) this.traySlots[slotIdx]!.setVisible(false);
    this.dragging = { slotIdx, shape, container };
  }

  private tryDrop(x: number, y: number) {
    if (!this.dragging) return;
    const { slotIdx, shape, container } = this.dragging;
    const cell = this.getCellFromWorld(x, y, shape);

    if (cell && this.board.canPlace(shape, cell.row, cell.col)) {
      const colorStr = this.colors[slotIdx % this.colors.length] ?? this.colors[0]!;
      const id = `piece-${Date.now()}-${slotIdx}`;
      const linesCleared = this.board.place(shape, cell.row, cell.col, colorStr, id);

      const blocks = this.scoreCalc.countBlocks(shape);
      const combo = linesCleared > 0 ? this.gameState.comboCount() + 1 : 0;
      const pts = this.scoreCalc.calculateTurnScore(blocks, linesCleared, combo);

      this.gameState.addScore(pts);
      if (linesCleared > 0) this.gameState.incrementCombo();
      else this.gameState.resetCombo();

      this.tray[slotIdx] = null;
      this.drawBoard();

      if (this.tray.every(p => p === null)) {
        this.game.events.emit('bms:tray-empty');
        this.fillTray();
      }

      // Check game over
      const anyFits = this.tray.some(p => p && this.board.hasAnyValidPlacement(p));
      if (!anyFits && this.tray.some(p => p !== null)) {
        this.time.delayedCall(300, () => this.game.events.emit('bms:game-over'));
      }
    } else {
      // Snap back — show tray slot again
      if (this.traySlots[slotIdx]) this.traySlots[slotIdx]!.setVisible(true);
    }

    container.destroy();
    this.dragging = null;
    this.ghostGfx.clear();
    this.drawTray();
  }

  private drawGhost(worldX: number, worldY: number) {
    this.ghostGfx.clear();
    if (!this.dragging) return;
    const cell = this.getCellFromWorld(worldX, worldY, this.dragging.shape);
    if (!cell) return;
    const { row, col } = cell;
    const shape = this.dragging.shape;
    const canPlace = this.board.canPlace(shape, row, col);

    for (let r = 0; r < shape.length; r++) {
      const shapeRow = shape[r];
      if (!shapeRow) continue;
      for (let c = 0; c < shapeRow.length; c++) {
        if (!shapeRow[c]) continue;
        const gr = row + r, gc = col + c;
        if (gr < 0 || gr >= this.board.dimension || gc < 0 || gc >= this.board.dimension) continue;
        const x = this.boardX + gc * (this.cellSize + CELL_GAP);
        const y = this.boardY + gr * (this.cellSize + CELL_GAP);
        if (canPlace) {
          this.ghostGfx.fillStyle(0xffffff, 0.25);
          this.ghostGfx.lineStyle(2, 0xffffff, 0.6);
        } else {
          this.ghostGfx.fillStyle(0xff4444, 0.2);
          this.ghostGfx.lineStyle(2, 0xff4444, 0.5);
        }
        this.ghostGfx.fillRoundedRect(x, y, this.cellSize, this.cellSize, CORNER_R);
        this.ghostGfx.strokeRoundedRect(x, y, this.cellSize, this.cellSize, CORNER_R);
      }
    }
  }

  private getCellFromWorld(worldX: number, worldY: number, shape: PieceShape): { row: number; col: number } | null {
    const rows = shape.length, cols = shape[0]?.length ?? 0;
    const pieceW = cols * (this.cellSize + CELL_GAP) - CELL_GAP;
    const pieceH = rows * (this.cellSize + CELL_GAP) - CELL_GAP;
    const topX = worldX - pieceW / 2;
    const topY = worldY - pieceH / 2;
    const col = Math.round((topX - this.boardX) / (this.cellSize + CELL_GAP));
    const row = Math.round((topY - this.boardY) / (this.cellSize + CELL_GAP));
    return { row, col };
  }

  private setupEvents() {
    this.game.events.on('bms:resume', () => { this.isReadOnly = false; });
    this.game.events.on('bms:readonly', () => { this.isReadOnly = true; });
    this.game.events.on('bms:settings-volume', (data: { music: number; sfx: number }) => {
      this.sound.setVolume(data.sfx);
    });
    this.game.events.on('bms:sleep-pending', () => { this.isReadOnly = true; });
    this.scale.on('resize', () => { this.layout(); this.drawBoard(); this.drawTray(); });
  }

  // Minimal HSL→hex converter (works for hsl(H, S%, L%) strings)
  private hslToHex(hsl: string): string {
    const m = hsl.match(/hsl\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%/i);
    if (!m) return '#5ed5ed';
    const h = parseFloat(m[1]) / 360;
    const s = parseFloat(m[2]) / 100;
    const l = parseFloat(m[3]) / 100;
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = Math.round(this.hue2rgb(p, q, h + 1 / 3) * 255);
    const g = Math.round(this.hue2rgb(p, q, h) * 255);
    const b = Math.round(this.hue2rgb(p, q, h - 1 / 3) * 255);
    return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
  }

  private hue2rgb(p: number, q: number, t: number): number {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }
}
