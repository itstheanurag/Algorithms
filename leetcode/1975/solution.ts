function maxMatrixSum(matrix: number[][]): number {
  let n = matrix.length,
    m = matrix[0].length;
  let negativeCount = 0,
    smallest = Infinity,
    sum = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] < 0) negativeCount++;
      let value = Math.abs(matrix[i][j]);
      smallest = Math.min(smallest, value);
      sum += value;
    }
  }

  if (negativeCount % 2 === 0) return sum;

  return sum - 2 * smallest;
}

/*
INTUITION

Since we are able to flip the sign of two adjacent elements,
we can track the total number of negative elements.

If the number of negative elements is even, we can flip signs
in a proper order so that all elements become positive.
In that case, the answer is simply the sum of absolute values.

If the number of negative elements is odd, one negative must
remain. To minimize the loss, we keep the smallest element
(by absolute value) negative.

We subtract (2 * smallest) because we previously added the
smallest value as positive, but it must end up negative.
On the number line, moving from +x to -x costs 2x.

Example:
-2 -1 0 1 2
If smallest was -2, we added +2 but must end with -2,
so we remove 4.
*/
