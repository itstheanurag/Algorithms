function better_solution_set_matrix(matrix: number[][]): void {
  const rowSet = new Set<number>(),
    colSet = new Set<number>();
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (!matrix[i][j]) {
        rowSet.add(i);
        colSet.add(j);
      }
    }
  }
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (rowSet.has(i) || colSet.has(j)) matrix[i][j] = 0;
    }
  }
  
}

/*
INTUITION

The idea is to first identify which rows and columns must be
set to zero, without modifying the matrix immediately.

Step 1: Record rows and columns that contain zero
We scan the entire matrix once.
Whenever we encounter a zero at position (i, j),
we store:
- row index i in a Set (rowSet)
- column index j in another Set (colSet)

Using Sets ensures:
- Fast lookups (O(1))
- No duplicate entries

Step 2: Update the matrix
We scan the matrix again.
For each cell (i, j):
- If its row is marked in rowSet
  OR
- If its column is marked in colSet
then this cell must be set to zero.

Separating detection from modification is important.
If we zeroed cells while scanning the first time,
we could incorrectly spread zeros to unrelated rows
and columns.

This two-pass approach ensures correctness and clarity.
*/
