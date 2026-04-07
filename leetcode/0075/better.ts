function betterSortColors(nums: number[]): void {
  let countZeros = 0,
    countOnes = 0,
    countTwos = 0;
    
  for (const num of nums) {
    if (num === 0) countZeros++;
    if (num === 1) countOnes++;
    if (num === 2) countTwos++;
  }

  for (let i = 0; i < nums.length; i++) {
    if (countZeros > 0) {
      nums[i] = 0;
      countZeros--;
    } else if (countOnes > 0) {
      nums[i] = 1;
      countOnes--;
    } else if (countTwos > 0) {
      nums[i] = 2;
      countTwos--;
    }
  }
}
