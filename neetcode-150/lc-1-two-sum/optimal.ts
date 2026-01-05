function twoSumOptimal(nums: number[], target: number): number[] {
  const hashmap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (hashmap.has(complement)) return [hashmap.get(complement), i];

    hashmap.set(nums[i], i);
  }

  return [-1, -1];
}

console.log(twoSumOptimal([2, 7, 11, 15], 9));
console.log(twoSumOptimal([3, 2, 4], 6));
console.log(twoSumOptimal([3, 3], 6));
