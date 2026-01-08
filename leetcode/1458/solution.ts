const dp: number[][] = [];

function maxDotProduct(nums1: number[], nums2: number[]): number {
  const n = nums1.length,
    m = nums2.length;

  for (let i = 0; i < n; i++) {
    dp[i] = Array(m).fill(undefined);
  }

  return solve(0, 0, nums1, nums2);
}

function solve(i: number, j: number, nums1: number[], nums2: number[]): number {
  if (i === nums1.length || j === nums2.length) return -Infinity;

  if (dp[i][j] !== undefined) return dp[i][j];

  const product = nums1[i] * nums2[j];

  const includeBoth = product + Math.max(0, solve(i + 1, j + 1, nums1, nums2));

  const skipFirst = solve(i, j + 1, nums1, nums2);
  const skipSecond = solve(i + 1, j, nums1, nums2);

  return (dp[i][j] = Math.max(includeBoth, skipFirst, skipSecond));
}

/*
INTUITION



*/
