function optimalsolution(mat: string[][]): boolean {
  const rows: Set<string>[] = [];
  const cols: Set<string>[] = [];
  const boxes: Set<string>[] = [];

  for (let i = 0; i < 9; i++) {
    rows.push(new Set());
    cols.push(new Set());
    boxes.push(new Set());
  }

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const value = mat[row][col];
      if (value === ".") continue;

      // row check
      if (rows[row].has(value)) return false;
      rows[row].add(value);

      // column check
      if (cols[col].has(value)) return false;
      cols[col].add(value);

      // box check
      const boxIndex = Math.floor(row / 3) * 3 + Math.floor(col / 3);

      if (boxes[boxIndex].has(value)) return false;
      boxes[boxIndex].add(value);
    }
  }

  return true;
}
