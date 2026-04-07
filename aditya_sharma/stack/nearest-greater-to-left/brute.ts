function bruteForceNextLargestElementToLeft(nums: number[]) {
  if (!nums.length) return [];
  const ans: number[] = [];

  for (let i = 0; i < nums.length - 1; i++) {
    let found = false;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        ans[i] = nums[j];
        found = true;
        break;
      }
    }

    if (!found) ans[i] = -1;
  }

  ans[nums.length - 1] = -1;

  return ans;
}
