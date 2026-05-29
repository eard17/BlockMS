export type PieceShape = number[][];

// Simple pieces for child level 1 (small, easy shapes)
export const SIMPLE_PIECES: PieceShape[] = [
  [[1]],
  [[1, 1]],
  [[1], [1]],
  [[1, 1], [1, 1]],
  [[1, 0], [1, 1]],
  [[0, 1], [1, 1]],
];

// Classic pieces — full set including all rotations
export const CLASSIC_PIECES: PieceShape[] = [
  [[1, 1, 1]],
  [[1, 1, 1, 1]],
  [[1, 1, 1, 1, 1]],
  [[1], [1], [1]],
  [[1], [1], [1], [1]],
  [[1], [1], [1], [1], [1]],
  [[1, 1], [1, 1]],
  [[1, 1, 1], [1, 1, 1], [1, 1, 1]],
  [[1, 0], [1, 0], [1, 1]],
  [[0, 1], [0, 1], [1, 1]],
  [[1, 1, 1], [1, 0, 0]],
  [[1, 0, 0], [1, 1, 1]],
  [[1, 1, 1], [0, 1, 0]],
  [[0, 1, 0], [1, 1, 1]],
  [[1, 0], [1, 1], [1, 0]],
  [[0, 1], [1, 1], [0, 1]],
  [[0, 1, 1], [1, 1, 0]],
  [[1, 1, 0], [0, 1, 1]],
  [[1, 1, 0], [1, 0, 0], [1, 1, 0]],
  [[0, 1, 1], [0, 0, 1], [0, 1, 1]],
];

export function getPieceSet(name: string): PieceShape[] {
  return name === 'simple' ? SIMPLE_PIECES : CLASSIC_PIECES;
}
