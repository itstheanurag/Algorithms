/**
Sorting: O(n log n)

Scan: O(n)

Total: O(n log n)

Slower than the optimal O(n) Set-based solution, but much simpler.

 */

function bettersolution(nums: number[]): number {
  if (!nums.length) return 0;
  nums.sort((a, b) => a - b);

  let max = 1;
  let curr = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      continue; // skip duplicates
    }

    if (nums[i] === nums[i - 1] + 1) {
      curr++;
    } else {
      curr = 1;
    }

    max = Math.max(max, curr);
  }

  return max;
}
