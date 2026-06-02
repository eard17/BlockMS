import { Board } from '../models/board';
import { PieceShape } from '../models/piece-definitions';
import { Prng } from './prng';

type Difficulty = 'easy' | 'medium' | 'hard';

export class PieceGenerator {
  reset() {
    // No-op, no state is maintained for pure RNG selection
  }

  private getBlockCount(piece: PieceShape): number {
    return piece.reduce((sum, row) => sum + row.reduce((rSum, val) => rSum + (val ? 1 : 0), 0), 0);
  }

  private selectIndex(rng: Prng, weights: number[]): number {
    const totalWeight = weights.reduce((sum, w) => sum + w, 0);
    if (totalWeight <= 0) {
      return Math.floor(rng.next() * weights.length);
    }
    const r = rng.next() * totalWeight;
    let cumulative = 0;
    for (let i = 0; i < weights.length; i++) {
      cumulative += weights[i];
      if (r < cumulative) {
        return i;
      }
    }
    return weights.length - 1;
  }

  /** Returns indices into pieceSet for the next tray of 3, or null if no valid pieces can fit on the board. */
  selectTrio(board: Board, rng: Prng, pieces: PieceShape[], difficulty: Difficulty): [number, number, number] | null {
    // Game Over check: Verify if at least one piece in the available pool can fit on the board
    let anyPieceFits = false;
    for (let i = 0; i < pieces.length; i++) {
      const p = pieces[i];
      if (p && board.hasAnyValidPlacement(p)) {
        anyPieceFits = true;
        break;
      }
    }

    if (!anyPieceFits) {
      return null;
    }

    const weights = pieces.map(piece => {
      const b = this.getBlockCount(piece);
      if (difficulty === 'easy') {
        // Exclude pieces with 5 or more blocks
        if (b >= 5) return 0;
        // Bias heavily towards smaller pieces
        return 1 / (b * b);
      } else if (difficulty === 'hard') {
        // Bias towards larger pieces
        return Math.pow(b, 1.5);
      } else {
        // Medium: uniform weights
        return 1;
      }
    });

    const idx0 = this.selectIndex(rng, weights);
    const idx1 = this.selectIndex(rng, weights);
    const idx2 = this.selectIndex(rng, weights);

    return [idx0, idx1, idx2];
  }
}

