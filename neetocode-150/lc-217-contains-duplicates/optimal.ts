/**
 *
 *
 * TIME COMPLEXITY FOR THIS SOLUTION WILL O(n)
 * Space complexity will be O(n)
 *
 */

function optimalSolution(nums: number[]) {
  if (nums.length === 1) return false;

  const set = new Set<number>();

  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }

  return false;
}

console.log(optimalSolution([1, 2, 3, 1]));
console.log(optimalSolution([1, 2, 3, 4]));
console.log(optimalSolution([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(optimalSolution([5]));
console.log(optimalSolution([7, 7]));
