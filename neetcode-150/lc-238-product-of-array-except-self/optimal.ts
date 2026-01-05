function optimalsolution(nums: number[]): number[] {
  const n = nums.length;
  const ans: number[] = new Array(n).fill(1);
  let pre = 1,
    post = 1;

  for (let i = 0; i < n; i++) {
    ans[i] = pre;
    pre = nums[i] * pre;
  }

  for (let i = n - 1; i >= 0; i--) {
    ans[i] = ans[i] * post;
    post = nums[i] * post;
  }

  return ans;
}
