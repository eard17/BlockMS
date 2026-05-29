const MULTI_LINE: Record<number, number> = { 1: 1, 2: 1.5, 3: 2, 4: 2.5 };

export class ScoreCalculator {
  calculateTurnScore(blocksPlaced: number, linesCleared: number, combo: number): number {
    const blockPts = blocksPlaced;
    const linePts = 10 * linesCleared * (MULTI_LINE[linesCleared] ?? 0);
    const multiplier = Math.max(1, combo);
    return Math.floor((blockPts + linePts) * multiplier);
  }

  countBlocks(shape: number[][]): number {
    return shape.reduce((total, row) => total + row.reduce((s, v) => s + v, 0), 0);
  }
}
