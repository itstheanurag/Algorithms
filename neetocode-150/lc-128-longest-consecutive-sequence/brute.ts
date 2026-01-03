// works but gives Time Limit Exceeded

// Time: O(n²)

// Space: O(1)

function bruteforcesolution(nums: number[]): number {
  if (nums.length === 0) return 0;

  let max = 1;

  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let count = 1;

    while (nums.includes(current + 1)) {
      current++;
      count++;
    }

    max = Math.max(max, count);
  }

  return max;
}
