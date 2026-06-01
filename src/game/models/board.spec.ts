import { Board, Cell } from './board';

describe('Board - Line Clearing (Row + Column Simultaneous)', () => {
  let board: Board;
  const dimension = 5;

  beforeEach(() => {
    board = new Board(dimension);
  });

  // Helpers
  function fillCell(row: number, col: number) {
    const cell = board.getCell(row, col);
    if (cell) {
      cell.filled = true;
      cell.color = 'red';
      cell.id = 'test';
    }
  }

  function fillRow(row: number) {
    for (let c = 0; c < dimension; c++) {
      fillCell(row, c);
    }
  }

  function fillCol(col: number) {
    for (let r = 0; r < dimension; r++) {
      fillCell(r, col);
    }
  }

  function countFilledCells(): number {
    let count = 0;
    for (let r = 0; r < dimension; r++) {
      for (let c = 0; c < dimension; c++) {
        if (board.getCell(r, c)?.filled) count++;
      }
    }
    return count;
  }

  // Test Case 1: Single row only
  it('should clear a single complete row', () => {
    fillRow(2);
    const cleared = (board as any).clearCompleteLines();

    expect(cleared).toBe(1);
    for (let c = 0; c < dimension; c++) {
      expect(board.getCell(2, c)?.filled).toBe(false);
    }
  });

  // Test Case 2: Single column only
  it('should clear a single complete column', () => {
    fillCol(3);
    const cleared = (board as any).clearCompleteLines();

    expect(cleared).toBe(1);
    for (let r = 0; r < dimension; r++) {
      expect(board.getCell(r, 3)?.filled).toBe(false);
    }
  });

  // Test Case 3: Single row + Single column (critical X/Y cross)
  it('should clear both a complete row AND column simultaneously', () => {
    fillRow(2);  // Row 2 is complete
    fillCol(3);  // Column 3 is complete

    const cleared = (board as any).clearCompleteLines();

    expect(cleared).toBe(2, 'Should clear both row and column');

    // Verify row 2 is cleared
    for (let c = 0; c < dimension; c++) {
      expect(board.getCell(2, c)?.filled).toBe(false);
    }

    // Verify column 3 is cleared
    for (let r = 0; r < dimension; r++) {
      expect(board.getCell(r, 3)?.filled).toBe(false);
    }

    // Verify intersection cell (2,3) is indeed empty
    expect(board.getCell(2, 3)?.filled).toBe(false);
  });

  // Test Case 4: Multiple rows only
  it('should clear multiple complete rows', () => {
    fillRow(1);
    fillRow(3);

    const cleared = (board as any).clearCompleteLines();

    expect(cleared).toBe(2);
    for (let r of [1, 3]) {
      for (let c = 0; c < dimension; c++) {
        expect(board.getCell(r, c)?.filled).toBe(false);
      }
    }
  });

  // Test Case 5: Multiple columns only
  it('should clear multiple complete columns', () => {
    fillCol(1);
    fillCol(4);

    const cleared = (board as any).clearCompleteLines();

    expect(cleared).toBe(2);
    for (let c of [1, 4]) {
      for (let r = 0; r < dimension; r++) {
        expect(board.getCell(r, c)?.filled).toBe(false);
      }
    }
  });

  // Test Case 6: Multiple rows + Multiple columns (complex simultaneous)
  it('should clear multiple rows AND multiple columns simultaneously', () => {
    fillRow(1);
    fillRow(3);
    fillCol(0);
    fillCol(4);

    const cleared = (board as any).clearCompleteLines();

    expect(cleared).toBe(4, 'Should clear 2 rows + 2 columns');

    // Verify rows are cleared
    for (let r of [1, 3]) {
      for (let c = 0; c < dimension; c++) {
        expect(board.getCell(r, c)?.filled).toBe(false);
      }
    }

    // Verify columns are cleared
    for (let c of [0, 4]) {
      for (let r = 0; r < dimension; r++) {
        expect(board.getCell(r, c)?.filled).toBe(false);
      }
    }
  });

  // Test Case 7: Multiple intersections (grid cross pattern)
  it('should correctly clear a cross pattern (multiple intersections)', () => {
    // Fill middle row and middle column in 5x5 grid
    fillRow(2);  // Middle row
    fillCol(2);  // Middle column

    const cleared = (board as any).clearCompleteLines();

    expect(cleared).toBe(2);

    // Verify all cells are empty
    expect(countFilledCells()).toBe(0);
  });

  // Test Case 8: Partial lines should NOT be cleared
  it('should NOT clear incomplete rows or columns', () => {
    // Fill almost entire row (missing one cell)
    for (let c = 0; c < dimension - 1; c++) {
      fillCell(2, c);
    }

    const cleared = (board as any).clearCompleteLines();

    expect(cleared).toBe(0, 'Incomplete row should not be cleared');

    // Verify cells are still filled
    for (let c = 0; c < dimension - 1; c++) {
      expect(board.getCell(2, c)?.filled).toBe(true);
    }
  });

  // Test Case 9: Edge case - full grid except corners (8 rows + 8 cols complete)
  it('should handle clearing all rows in a full grid', () => {
    const fullBoard = new Board(3);

    // Fill entire 3x3 board
    for (let r = 0; r < 3; r++) {
      for (let c = 0; c < 3; c++) {
        const cell = fullBoard.getCell(r, c);
        if (cell) {
          cell.filled = true;
          cell.color = 'red';
          cell.id = 'test';
        }
      }
    }

    const cleared = (fullBoard as any).clearCompleteLines();

    // In a 3x3 fully filled board: all 3 rows AND all 3 columns are complete
    expect(cleared).toBe(6, 'All rows and columns should be cleared');
  });

  // Test Case 10: Verify no double-clearing of intersection cells
  it('should not double-clear cells at row/column intersections', () => {
    fillRow(2);
    fillCol(2);

    // Before clearing, intersection should be filled
    expect(board.getCell(2, 2)?.filled).toBe(true);

    (board as any).clearCompleteLines();

    // After clearing, intersection should be empty (not double-cleared)
    expect(board.getCell(2, 2)?.filled).toBe(false);
    expect(board.getCell(2, 2)?.color).toBe('');
    expect(board.getCell(2, 2)?.id).toBeNull();
  });

  // Test Case 11: Real game scenario - piece placement + simultaneous clear
  it('should clear lines after a piece placement that completes row and column', () => {
    // Setup board state: complete a row and column with piece placement

    // Fill everything in row 3 except position (3,2)
    for (let c = 0; c < dimension; c++) {
      if (c !== 2) fillCell(3, c);
    }

    // Fill everything in column 2 except position (3,2)
    for (let r = 0; r < dimension; r++) {
      if (r !== 3) fillCell(r, 2);
    }

    // Now the final piece fills (3,2), completing both row 3 and column 2
    fillCell(3, 2);

    const cleared = (board as any).clearCompleteLines();

    expect(cleared).toBe(2, 'Should detect and clear both completed lines');
    expect(countFilledCells()).toBe(0, 'All completed lines should be empty');
  });
});
