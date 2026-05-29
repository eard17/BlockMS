import { Board } from '../models/board';
import { PieceShape } from '../models/piece-definitions';
import { Prng } from './prng';

type Difficulty = 'easy' | 'medium' | 'hard';
const FAIRNESS: Record<Difficulty, [number, number, number]> = {
  easy:   [1,   1,   0.9],
  medium: [0.9, 0.8, 0.7],
  hard:   [0.8, 0.65, 0.5],
};

export class PieceGenerator {
  private recentIndices: number[] = [];

  reset() { this.recentIndices = []; }

  /** Returns indices into pieceSet for the next tray of 3, or null if no valid pieces exist. */
  selectTrio(board: Board, rng: Prng, pieces: PieceShape[], difficulty: Difficulty): [number, number, number] | null {
    const valid: number[] = [], invalid: number[] = [];
    for (let i = 0; i < pieces.length; i++) {
      const p = pieces[i];
      if (p && board.hasAnyValidPlacement(p)) valid.push(i); else invalid.push(i);
    }
    if (valid.length === 0) return null;

    const diff = this.adjustDifficulty(board, difficulty);
    const weights = FAIRNESS[diff];
    const chosen = new Set<number>();
    const result: [number, number, number] = [-1, -1, -1];

    for (let slot = 0; slot < 3; slot++) {
      result[slot] = this.pick(rng, valid, invalid, chosen, weights[slot]);
      chosen.add(result[slot]);
    }
    // Guarantee at least one valid piece
    if (!result.some(i => valid.includes(i))) result[0] = this.weightedPick(rng, valid);

    this.recentIndices.push(...result);
    if (this.recentIndices.length > 6) this.recentIndices.splice(0, this.recentIndices.length - 6);
    return result;
  }

  private pick(rng: Prng, valid: number[], invalid: number[], exclude: Set<number>, fairness: number): number {
    const v = valid.filter(i => !exclude.has(i));
    const iv = invalid.filter(i => !exclude.has(i));
    if (v.length === 0 && iv.length === 0) return this.weightedPick(rng, valid.length ? valid : invalid);
    if (v.length === 0) return this.weightedPick(rng, iv);
    if (iv.length === 0 || rng.next() < fairness) return this.weightedPick(rng, v);
    return this.weightedPick(rng, iv);
  }

  private weightedPick(rng: Prng, arr: number[]): number {
    if (arr.length === 1) return arr[0];
    const weights = arr.map(i => this.recentIndices.includes(i) ? 0.25 : 1);
    const total = weights.reduce((a, b) => a + b, 0);
    let r = rng.next() * total;
    for (let i = 0; i < arr.length; i++) { r -= weights[i]; if (r <= 0) return arr[i]; }
    return arr[arr.length - 1];
  }

  private adjustDifficulty(board: Board, base: Difficulty): Difficulty {
    const grid = board.getGrid();
    let filled = 0, total = board.dimension * board.dimension;
    for (const row of grid) for (const cell of row) if (cell.filled) filled++;
    const pct = filled / total;
    if (pct >= 0.8) return 'easy';
    if (pct >= 0.65 && base === 'hard') return 'medium';
    return base;
  }
}
