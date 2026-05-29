import { PieceShape } from './piece-definitions';

export interface Cell { filled: boolean; color: string; id: string | null; }

export class Board {
  readonly dimension: number;
  private grid: Cell[][];

  constructor(dimension = 8) {
    this.dimension = dimension;
    this.grid = this.createEmpty();
  }

  getCell(row: number, col: number): Cell | null { return this.grid[row]?.[col] ?? null; }
  getGrid(): Cell[][] { return this.grid; }

  canPlace(shape: PieceShape, row: number, col: number): boolean {
    for (let r = 0; r < shape.length; r++) {
      const shapeRow = shape[r];
      if (!shapeRow) continue;
      for (let c = 0; c < shapeRow.length; c++) {
        if (!shapeRow[c]) continue;
        const gr = row + r, gc = col + c;
        if (gr < 0 || gr >= this.dimension || gc < 0 || gc >= this.dimension) return false;
        const cell = this.grid[gr]?.[gc];
        if (!cell || cell.filled) return false;
      }
    }
    return true;
  }

  place(shape: PieceShape, row: number, col: number, color: string, id: string): number {
    for (let r = 0; r < shape.length; r++) {
      const shapeRow = shape[r];
      if (!shapeRow) continue;
      for (let c = 0; c < shapeRow.length; c++) {
        if (!shapeRow[c]) continue;
        const cell = this.grid[row + r]?.[col + c];
        if (cell) { cell.filled = true; cell.color = color; cell.id = id; }
      }
    }
    return this.clearCompleteLines();
  }

  hasAnyValidPlacement(shape: PieceShape): boolean {
    // Find bounding box of shape
    let minR = shape.length, maxR = -1, minC = shape[0]?.length ?? 0, maxC = -1;
    for (let r = 0; r < shape.length; r++) {
      const row = shape[r];
      if (!row) continue;
      for (let c = 0; c < row.length; c++) {
        if (!row[c]) continue;
        if (r < minR) minR = r;
        if (r > maxR) maxR = r;
        if (c < minC) minC = c;
        if (c > maxC) maxC = c;
      }
    }
    if (maxR === -1) return false;
    const rowEnd = this.dimension - 1 - maxR;
    const colEnd = this.dimension - 1 - maxC;
    for (let r = -minR; r <= rowEnd; r++)
      for (let c = -minC; c <= colEnd; c++)
        if (this.canPlace(shape, r, c)) return true;
    return false;
  }

  private clearCompleteLines(): number {
    let cleared = 0;
    for (let r = 0; r < this.dimension; r++) {
      if (this.grid[r]?.every(c => c.filled)) { this.clearRow(r); cleared++; }
    }
    for (let c = 0; c < this.dimension; c++) {
      if (this.grid.every(row => row[c]?.filled)) { this.clearCol(c); cleared++; }
    }
    return cleared;
  }

  private clearRow(r: number) {
    this.grid[r]?.forEach(c => { c.filled = false; c.color = ''; c.id = null; });
  }
  private clearCol(c: number) {
    this.grid.forEach(row => { const cell = row[c]; if (cell) { cell.filled = false; cell.color = ''; cell.id = null; } });
  }

  private createEmpty(): Cell[][] {
    return Array.from({ length: this.dimension }, () =>
      Array.from({ length: this.dimension }, () => ({ filled: false, color: '', id: null })));
  }
}
