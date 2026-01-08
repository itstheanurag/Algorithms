function bottomupmaxdotproduct(nums1: number[], nums2: number[]): number {
  const n = nums1.length;
  const m = nums2.length;

  const dp: number[][] = Array.from({ length: n + 1 }, () =>
    Array(m + 1).fill(-Infinity),
  );

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const product = nums1[i] * nums2[j];

      dp[i][j] = Math.max(
        product + Math.max(0, dp[i + 1][j + 1]),
        dp[i + 1][j],
        dp[i][j + 1],
      );
    }
  }

  return dp[0][0];
}
