/**
 *
 *
 * TIME COMPLEXITY FOR THIS SOLUTION WILL BE O(nlogn)
 */

function betterSolution(nums: number[]) {
  if (nums.length === 1) return false;
  nums.sort((a, b) => a - b);

  for (let i = 0, j = 1; i < nums.length; i++) {
    if (nums[i] === nums[j]) return true;
    j++;
  }

  return false;
}

console.log(betterSolution([1, 2, 3, 1]));
console.log(betterSolution([1, 2, 3, 4]));
console.log(betterSolution([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(betterSolution([5]));
console.log(betterSolution([7, 7]));
