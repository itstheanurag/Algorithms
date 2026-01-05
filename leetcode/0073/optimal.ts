function optimalsolutionsetmatrix(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let firstRow = false;
  let firstCol = false;

  for (let j = 0; j < cols; j++) {
    if (matrix[0][j] === 0) {
      firstRow = true;
      break;
    }
  }

  for (let i = 0; i < rows; i++) {
    if (matrix[i][0] === 0) {
      firstCol = true;
      break;
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      if (matrix[i][0] === 0 || matrix[0][j] === 0) {
        matrix[i][j] = 0;
      }
    }
  }

  if (firstRow) {
    for (let j = 0; j < cols; j++) {
      matrix[0][j] = 0;
    }
  }

  if (firstCol) {
    for (let i = 0; i < rows; i++) {
      matrix[i][0] = 0;
    }
  }
}

/*
INTUITION

The challenge is to set an entire row and column to zero whenever
a cell contains 0, while modifying the matrix in-place and using
constant extra space.

Instead of storing all rows and columns that need to be zeroed,
we use the first row and the first column of the matrix itself
as marker storage.

Step 1: Preserve original state of first row and first column
Since the first row and first column will be reused as markers,
we first check if they originally contain any zero.
This information is stored using two boolean flags:
- firstRow
- firstCol

Step 2: Mark rows and columns
We iterate through the matrix starting from index (1, 1).
If a cell contains 0, we mark its row and column by setting:
- matrix[i][0] = 0
- matrix[0][j] = 0

Step 3: Apply zeroes using markers
We iterate again through the inner matrix.
If either the row marker or column marker is 0,
we set the current cell to 0.

Step 4: Handle first row and first column
Finally, if the first row or first column originally had a zero,
we zero them entirely using the stored boolean flags.

This approach avoids extra space by reusing the matrix itself
and ensures all updates are done correctly without overwriting
marker information too early.
*/
