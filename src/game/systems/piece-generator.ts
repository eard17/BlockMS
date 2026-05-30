import { Board } from '../models/board';
import { PieceShape } from '../models/piece-definitions';
import { Prng } from './prng';

type Difficulty = 'easy' | 'medium' | 'hard';

export class PieceGenerator {
  reset() {
    // No-op, no state is maintained for pure RNG selection
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

    // Pure RNG selection: pick 3 random indices from the pool
    const idx0 = Math.floor(rng.next() * pieces.length);
    const idx1 = Math.floor(rng.next() * pieces.length);
    const idx2 = Math.floor(rng.next() * pieces.length);

    return [idx0, idx1, idx2];
  }
}
