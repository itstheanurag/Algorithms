// works but gives tle

function bruteforce(nums: number[]): number[] {
  const temp = [];
  for (let i = 0; i < nums.length; i++) {
    let prod = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i != j) {
        prod = prod * nums[j];
      }
    }

    temp.push(prod);
  }

  return temp;
}
