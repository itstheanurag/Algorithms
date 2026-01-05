function generate(numRows: number): number[][] {
  const ans: number[][] = [];

  for (let i = 0; i < numRows; i++) {
    const row = new Array(i + 1).fill(1);

    for (let j = 1; j < i; j++) {
      row[j] = ans[i - 1][j - 1] + ans[i - 1][j];
    }

    ans.push(row);
  }

  return ans;
}

/*
INTUITION

Pascal’s Triangle is constructed row by row, where each value
depends only on the row directly above it.

1. Shape of the triangle
- The i-th row always contains (i + 1) elements.
- The first and last elements of every row are always 1.

2. How inner values are formed
For any position j inside a row (excluding the borders),
the value is the sum of the two values above it from
the previous row:
- ans[i - 1][j - 1]
- ans[i - 1][j]

3. Construction strategy
For each row:
- Initialize all values as 1
- Compute only the inner elements using the previous row
- Append the completed row to the result

By building from the top down, all required values are
already computed when needed.

This approach avoids unnecessary checks, keeps the logic
simple, and directly follows the mathematical definition
of Pascal’s Triangle.
*/
