/**
 *
 * Brute force solution, iterate over all the elements and check if it exits in the array
 * works but gives tle on leetcode. 
 */

function bruteForceDuplicateArray(nums: number[]) {
  if (nums.length === 1) return false;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] === nums[j] && i != j) return true;
    }
  }

  return false;
}


console.log(bruteForceDuplicateArray([1, 2, 3, 1]));
console.log(bruteForceDuplicateArray([1, 2, 3, 4]));
console.log(bruteForceDuplicateArray([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
console.log(bruteForceDuplicateArray([5]));
console.log(bruteForceDuplicateArray([7, 7]));
