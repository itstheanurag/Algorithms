function optimalsolution(nums: number[]): number {
  if (!nums.length) return 0;

  const numSet: Set<number> = new Set();
  for (let num of nums) numSet.add(num);

  let max = 1;
  for (const num of numSet) {
    if (!numSet.has(num - 1)) {
      let curr = num;
      let len = 1;

      while (numSet.has(curr + 1)) {
        curr++;
        len++;
      }

      max = Math.max(max, len);
    }
  }

  return max;
}
