function optimalsolution(nums: number[], target: number): number[] {
  let start = 0,
    end = nums.length - 1;

  while (start < end) {
    const sum = nums[start] + nums[end];
    if (sum === target) {
      return [start + 1, end + 1];
    }

    if (sum > target) end--;
    if (sum < target) start++;
  }

  return [-1, -1];
}
