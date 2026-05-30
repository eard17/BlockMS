export type PieceShape = number[][];

// 1. Level 1 - Exploradores (5x5) - Small, simple shapes
export const LEVEL1_PIECES: PieceShape[] = [
  [[1]],                         // 1x1 Single Block
  [[1, 1]],                      // 2x1 Horizontal Line
  [[1], [1]],                    // 1x2 Vertical Line
  [[1, 1, 1]],                   // 3x1 Horizontal Line
  [[1], [1], [1]],               // 1x3 Vertical Line
  [[1, 0], [1, 1]],              // L-small (down-right)
  [[0, 1], [1, 1]],              // L-small (down-left)
  [[1, 1], [1, 1]],              // 2x2 Square
];

// 2. Level 2 - Constructores (6x6) - Medium shapes
export const LEVEL2_PIECES: PieceShape[] = [
  ...LEVEL1_PIECES,
  [[1, 1, 1, 1]],                // 4x1 Horizontal Line
  [[1], [1], [1], [1]],          // 1x4 Vertical Line
  [[1, 0], [1, 0], [1, 1]],      // L-4 blocks (vertical-right)
  [[0, 1], [0, 1], [1, 1]],      // L-4 blocks (vertical-left)
  [[1, 1, 1], [1, 0, 0]],        // L-4 blocks (horizontal-top)
  [[1, 0, 0], [1, 1, 1]],        // L-4 blocks (horizontal-bottom)
  [[1, 1, 1], [0, 1, 0]],        // T-4 blocks (top-heavy)
  [[0, 1, 0], [1, 1, 1]],        // T-4 blocks (bottom-heavy)
  [[1, 0], [1, 1], [1, 0]],      // T-4 blocks (right-facing)
  [[0, 1], [1, 1], [0, 1]],      // T-4 blocks (left-facing)
  [[0, 1, 1], [1, 1, 0]],        // Z-small
  [[1, 1, 0], [0, 1, 1]],        // S-small
];

// 3. Level 3 & Classic Mode (8x8) - Full set including large shapes
export const LEVEL3_PIECES: PieceShape[] = [
  ...LEVEL2_PIECES,
  [[1, 1, 1, 1, 1]],             // 5x1 Horizontal Line
  [[1], [1], [1], [1], [1]],     // 1x5 Vertical Line
  [[1, 1, 1], [1, 1, 1], [1, 1, 1]], // 3x3 Square
  [[1, 1, 0], [1, 0, 0], [1, 1, 0]], // C-shape 5 blocks (right-open)
  [[0, 1, 1], [0, 0, 1], [0, 1, 1]], // C-shape 5 blocks (left-open)
];

// Maintain backwards compatibility with original exported pool names
export const SIMPLE_PIECES = LEVEL1_PIECES;
export const CLASSIC_PIECES = LEVEL3_PIECES;

export function getPieceSet(name: string): PieceShape[] {
  if (name === 'level1' || name === 'simple') {
    return LEVEL1_PIECES;
  }
  if (name === 'level2') {
    return LEVEL2_PIECES;
  }
  return LEVEL3_PIECES; // level3 or classic
}
