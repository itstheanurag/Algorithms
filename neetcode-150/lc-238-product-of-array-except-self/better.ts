function better(nums: number[]): number[] {
  const n = nums.length;
  const preProd: number[] = new Array(n).fill(1);
  const postProd: number[] = new Array(n).fill(1);
  const ans: number[] = new Array(n);

  // prefix products
  for (let i = 1; i < n; i++) {
    preProd[i] = preProd[i - 1] * nums[i - 1];
  }

  // suffix products
  for (let j = n - 2; j >= 0; j--) {
    postProd[j] = postProd[j + 1] * nums[j + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    ans[i] = preProd[i] * postProd[i];
  }
  return ans;
}
