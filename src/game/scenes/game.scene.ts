import Phaser from 'phaser';
import { Board } from '../models/board';
import { getPieceSet, PieceShape } from '../models/piece-definitions';
import { Prng } from '../systems/prng';
import { PieceGenerator } from '../systems/piece-generator';
import { ScoreCalculator } from '../systems/score-calculator';
import { GameStateService } from '../../app/services/game-state';
import { SKINS_CATALOG } from '../../app/services/skins-catalog';
import { ctxGameState, ctxConfig, PhaserGameConfig } from '../game-context';
import { SavedGameState } from '../../app/services/save-progress';

const CELL_GAP   = 2;
const TRAY_SCALE = 0.55;
const DRAG_SCALE = 1.15;
const CORNER_R   = 6;

interface TrayHit { x: number; y: number; halfW: number; halfH: number; }

export class GameScene extends Phaser.Scene {
  private board!: Board;
  private rng!: Prng;
  private pieceGen = new PieceGenerator();
  private scoreCalc = new ScoreCalculator();
  private gameState!: GameStateService;
  private config!: PhaserGameConfig;

  private pieces!: PieceShape[];
  private tray: (PieceShape | null)[] = [null, null, null];
  private trayHits: (TrayHit | null)[] = [null, null, null];

  private cellSize = 36;
  private boardX = 0;
  private boardY = 0;

  private boardGfx!: Phaser.GameObjects.Graphics;
  private trayGfx!: Phaser.GameObjects.Graphics;
  private ghostGfx!: Phaser.GameObjects.Graphics;
  private trayContainers: (Phaser.GameObjects.Container | null)[] = [null, null, null];

  private dragging: { slotIdx: number; shape: PieceShape; gfx: Phaser.GameObjects.Container } | null = null;
  private colors: string[] = [];
  private isReadOnly = false;
  private elapsed = 0;

  constructor() { super({ key: 'GameScene' }); }

  create() {
    // Read data from module context (no timing issue)
    this.gameState = ctxGameState!;
    this.config    = { ...ctxConfig };

    const skin = SKINS_CATALOG.find(s => s.id === (this.config.activeSkin ?? 'default')) ?? SKINS_CATALOG[0]!;
    this.colors = skin.colors.map(c => c.hsl);

    this.board  = new Board(this.config.boardDimension ?? 8);
    this.rng    = new Prng(this.config.seed ?? 'default');
    this.pieces = getPieceSet(this.config.pieceSet ?? 'classic');

    this.layout();

    this.boardGfx = this.add.graphics();
    this.ghostGfx = this.add.graphics().setDepth(5);
    this.trayGfx  = this.add.graphics();

    this.drawBoard();
    if (this.config.savedState) {
      this.restoreFromSaved(this.config.savedState);
    } else {
      this.fillTray();
    }
    this.drawTray();
    this.setupInput();
    this.setupEvents();

    // Disable browser touch-action on the canvas so it doesn't scroll
    const canvas = this.game.canvas;
    canvas.style.touchAction  = 'none';
    canvas.style.userSelect   = 'none';
  }

  override update(_t: number, delta: number) {
    if (!this.isReadOnly && this.gameState)
      this.elapsed += delta / 1000;
    this.gameState?.updateElapsedTime(Math.floor(this.elapsed));
  }

  // ── Layout ────────────────────────────────────────────────────────────────

  private layout() {
    const { width, height } = this.scale;
    const dim = this.board.dimension;
    const maxBoard = Math.min(width * 0.94, height * 0.62);
    this.cellSize = Math.floor((maxBoard - (dim - 1) * CELL_GAP) / dim);
    const boardW  = dim * (this.cellSize + CELL_GAP) - CELL_GAP;
    this.boardX   = Math.floor((width  - boardW) / 2);
    this.boardY   = Math.floor(height  * 0.03);
  }

  // ── Board drawing ─────────────────────────────────────────────────────────

  private drawBoard() {
    const g = this.boardGfx;
    g.clear();
    const grid = this.board.getGrid();
    const dim  = this.board.dimension;
    const step = this.cellSize + CELL_GAP;

    for (let r = 0; r < dim; r++) {
      for (let c = 0; c < dim; c++) {
        const x    = this.boardX + c * step;
        const y    = this.boardY + r * step;
        const cell = grid[r]?.[c];
        if (cell?.filled) {
          g.fillStyle(this.hexColor(cell.color), 1);
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

  // ── Tray drawing ──────────────────────────────────────────────────────────

  private drawTray() {
    // Destroy old containers
    this.trayContainers.forEach(c => c?.destroy());
    this.trayContainers = [null, null, null];
    this.trayGfx.clear();
    this.trayHits = [null, null, null];

    const { width, height } = this.scale;
    const step    = this.cellSize + CELL_GAP;
    const trayTop = this.boardY + this.board.dimension * step + 16;
    const slotW   = width / 3;

    for (let i = 0; i < 3; i++) {
      const shape = this.tray[i];
      if (!shape) continue;

      const cx  = slotW * i + slotW / 2;
      const cy  = trayTop + (height - trayTop) / 2;
      const cs  = this.cellSize * TRAY_SCALE;
      const gap = CELL_GAP * TRAY_SCALE;
      const rows = shape.length;
      const cols = shape[0]?.length ?? 0;
      const halfW = (cols * (cs + gap) - gap) / 2 + cs * 0.2;
      const halfH = (rows * (cs + gap) - gap) / 2 + cs * 0.2;

      this.trayHits[i] = { x: cx, y: cy, halfW, halfH };
      this.trayContainers[i] = this.buildPieceGfx(shape, cx, cy, TRAY_SCALE, i, 0);
    }
  }

  /** Builds a Graphics object (no container) drawing the piece centered at (x,y). */
  private buildPieceGfx(
    shape: PieceShape, x: number, y: number,
    scale: number, colorIdx: number, depth: number,
  ): Phaser.GameObjects.Container {
    const g   = this.add.graphics();
    const cs  = this.cellSize * scale;
    const gap = CELL_GAP * scale;
    const rows = shape.length;
    const cols = shape[0]?.length ?? 0;
    const offX = -((cols * (cs + gap) - gap) / 2);
    const offY = -((rows * (cs + gap) - gap) / 2);
    const col  = this.hexColor(this.colors[colorIdx % this.colors.length] ?? this.colors[0]!);

    for (let r = 0; r < rows; r++) {
      const row = shape[r];
      if (!row) continue;
      for (let c = 0; c < row.length; c++) {
        if (!row[c]) continue;
        g.fillStyle(col, 1);
        g.fillRoundedRect(
          offX + c * (cs + gap),
          offY + r * (cs + gap),
          cs, cs, CORNER_R * scale,
        );
      }
    }
    const ctr = this.add.container(x, y, [g]).setDepth(depth);
    return ctr;
  }

  // ── Tray fill ─────────────────────────────────────────────────────────────

  private fillTray() {
    const diff    = this.config.difficulty ?? 'medium';
    const indices = this.pieceGen.selectTrio(this.board, this.rng, this.pieces, diff);
    if (indices === null) {
      this.game.events.emit('bms:game-over');
      return;
    }
    for (let i = 0; i < 3; i++) {
      const idx  = indices[i];
      this.tray[i] = (idx !== -1 && idx < this.pieces.length) ? this.pieces[idx]! : null;
    }
    if (!this.tray.some(p => p && this.board.hasAnyValidPlacement(p)))
      this.time.delayedCall(200, () => this.game.events.emit('bms:game-over'));
  }

  // ── Input ─────────────────────────────────────────────────────────────────

  private setupInput() {
    this.input.on(Phaser.Input.Events.POINTER_DOWN, this.onDown, this);
    this.input.on(Phaser.Input.Events.POINTER_MOVE, this.onMove, this);
    this.input.on(Phaser.Input.Events.POINTER_UP,   this.onUp,   this);
    this.input.on(Phaser.Input.Events.POINTER_UP_OUTSIDE, this.onUp, this);
  }

  private onDown(ptr: Phaser.Input.Pointer) {
    if (this.isReadOnly || this.dragging) return;
    for (let i = 0; i < 3; i++) {
      const hit   = this.trayHits[i];
      const shape = this.tray[i];
      if (!hit || !shape) continue;
      if (Math.abs(ptr.x - hit.x) <= hit.halfW && Math.abs(ptr.y - hit.y) <= hit.halfH) {
        this.startDrag(i, shape, ptr.x, ptr.y);
        return;
      }
    }
  }

  private onMove(ptr: Phaser.Input.Pointer) {
    if (!this.dragging) return;
    this.dragging.gfx.setPosition(ptr.x, ptr.y);
    this.drawGhost(ptr.x, ptr.y);
  }

  private onUp(ptr: Phaser.Input.Pointer) {
    if (!this.dragging) return;
    this.tryDrop(ptr.x, ptr.y);
  }

  private startDrag(slotIdx: number, shape: PieceShape, x: number, y: number) {
    this.trayContainers[slotIdx]?.setVisible(false);
    const gfx = this.buildPieceGfx(shape, x, y, DRAG_SCALE, slotIdx, 10);
    this.dragging = { slotIdx, shape, gfx };
  }

  private tryDrop(x: number, y: number) {
    if (!this.dragging) return;
    const { slotIdx, shape, gfx } = this.dragging;
    gfx.destroy();
    this.dragging = null;
    this.ghostGfx.clear();

    const cell = this.screenToCell(x, y, shape);
    if (cell && this.board.canPlace(shape, cell.row, cell.col)) {
      const colorStr  = this.colors[slotIdx % this.colors.length] ?? this.colors[0]!;
      const id        = `p-${Date.now()}-${slotIdx}`;
      const cleared   = this.board.place(shape, cell.row, cell.col, colorStr, id);
      const blocks    = this.scoreCalc.countBlocks(shape);
      const combo     = cleared > 0 ? this.gameState.comboCount() + 1 : 0;
      const pts       = this.scoreCalc.calculateTurnScore(blocks, cleared, combo);

      this.gameState.addScore(pts);
      cleared > 0 ? this.gameState.incrementCombo() : this.gameState.resetCombo();

      this.tray[slotIdx] = null;
      this.drawBoard();

      if (this.tray.every(p => p === null)) {
        this.game.events.emit('bms:tray-empty');
        this.fillTray();
      }
      // Re-draw tray (shows remaining pieces or new tray)
      this.drawTray();

      const hasMove = this.tray.some(p => p && this.board.hasAnyValidPlacement(p));
      if (!hasMove && this.tray.some(p => p !== null))
        this.time.delayedCall(300, () => this.game.events.emit('bms:game-over'));
    } else {
      // Snap back
      this.trayContainers[slotIdx]?.setVisible(true);
    }
  }

  private drawGhost(wx: number, wy: number) {
    this.ghostGfx.clear();
    if (!this.dragging) return;
    const cell = this.screenToCell(wx, wy, this.dragging.shape);
    if (!cell) return;
    const { row, col } = cell;
    const shape    = this.dragging.shape;
    const canPlace = this.board.canPlace(shape, row, col);
    const step     = this.cellSize + CELL_GAP;

    for (let r = 0; r < shape.length; r++) {
      const shapeRow = shape[r];
      if (!shapeRow) continue;
      for (let c = 0; c < shapeRow.length; c++) {
        if (!shapeRow[c]) continue;
        const gr = row + r, gc = col + c;
        if (gr < 0 || gr >= this.board.dimension || gc < 0 || gc >= this.board.dimension) continue;
        const x = this.boardX + gc * step;
        const y = this.boardY + gr * step;
        if (canPlace) {
          this.ghostGfx.fillStyle(0xffffff, 0.22);
          this.ghostGfx.lineStyle(2, 0xffffff, 0.55);
        } else {
          this.ghostGfx.fillStyle(0xff4444, 0.18);
          this.ghostGfx.lineStyle(2, 0xff4444, 0.45);
        }
        this.ghostGfx.fillRoundedRect(x, y, this.cellSize, this.cellSize, CORNER_R);
        this.ghostGfx.strokeRoundedRect(x, y, this.cellSize, this.cellSize, CORNER_R);
      }
    }
  }

  /** Convert screen coords to board cell, centering the piece under the finger. */
  private screenToCell(wx: number, wy: number, shape: PieceShape): { row: number; col: number } | null {
    const step  = this.cellSize + CELL_GAP;
    const cols  = shape[0]?.length ?? 0;
    const rows  = shape.length;
    // Offset so piece center aligns with finger
    const topX  = wx - (cols * step - CELL_GAP) / 2;
    const topY  = wy - (rows * step - CELL_GAP) / 2;
    const col   = Math.round((topX - this.boardX) / step);
    const row   = Math.round((topY - this.boardY) / step);
    return { row, col };
  }

  // ── Events ────────────────────────────────────────────────────────────────

  private setupEvents() {
    this.game.events.on('bms:resume',  () => { this.isReadOnly = false; });
    this.game.events.on('bms:readonly',() => { this.isReadOnly = true;  });
    this.game.events.on('bms:sleep-pending', () => { this.isReadOnly = true; });
    this.game.events.on('bms:settings-volume', (d: { music: number; sfx: number }) => {
      this.sound.setVolume(d.sfx);
    });
    this.scale.on('resize', () => {
      this.layout();
      this.drawBoard();
      this.drawTray();
    });
  }

  // ── Save / Restore ────────────────────────────────────────────────────────

  /** Serialize current board + tray for persistence. */
  serializeState(): SavedGameState {
    const grid = this.board.getGrid().map(row =>
      row.map(cell => ({ filled: cell.filled, color: cell.color, id: cell.id })),
    );
    const tray = this.tray.map(p => p ? p.map(row => [...row]) : null);
    return {
      mode: this.gameState.mode(),
      grid,
      tray,
      score:   this.gameState.score(),
      combo:   this.gameState.comboCount(),
      elapsed: this.elapsed,
      timestamp: Date.now(),
    };
  }

  private restoreFromSaved(state: SavedGameState) {
    // Restore board cells
    const grid = this.board.getGrid();
    for (let r = 0; r < grid.length; r++) {
      const savedRow = state.grid[r];
      if (!savedRow) continue;
      for (let c = 0; c < grid[r]!.length; c++) {
        const saved = savedRow[c];
        const cell  = grid[r]![c];
        if (!saved || !cell) continue;
        cell.filled = saved.filled;
        cell.color  = saved.color;
        cell.id     = saved.id;
      }
    }
    // Restore tray pieces
    this.tray = state.tray as (typeof this.tray[0])[];
    // Restore elapsed time
    this.elapsed = state.elapsed;
    // Redraw board with restored state
    this.drawBoard();
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  private hexColor(hsl: string): number {
    const m = hsl.match(/hsl\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%/i);
    if (!m) return 0x5ed5ed;
    const h = parseFloat(m[1]) / 360;
    const s = parseFloat(m[2]) / 100;
    const l = parseFloat(m[3]) / 100;
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    const r = Math.round(this.hue2rgb(p, q, h + 1/3) * 255);
    const g = Math.round(this.hue2rgb(p, q, h)       * 255);
    const b = Math.round(this.hue2rgb(p, q, h - 1/3) * 255);
    return (r << 16) | (g << 8) | b;
  }

  private hue2rgb(p: number, q: number, t: number): number {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1/6) return p + (q-p)*6*t;
    if (t < 1/2) return q;
    if (t < 2/3) return p + (q-p)*(2/3-t)*6;
    return p;
  }
}
