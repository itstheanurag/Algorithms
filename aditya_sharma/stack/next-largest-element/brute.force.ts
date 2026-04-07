function bruteForceNextLargestElementToRight(nums: number[]) {
  if (!nums.length) return [];
  const ans: number[] = [];

  for (let i = 0; i < nums.length - 1; i++) {
    let found = false;

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        ans[i] = nums[j];
        found = true;
        break;
      }
    }

    if (!found) ans[i] = -1;
  }

  ans[nums.length - 1] = -1;

  return ans;
}

var testCases: number[][] = [
  [1, 3, 2, 4],
  [1, 2, 3, 4, 5],
  [5, 4, 3, 2, 1],
  [7, 7, 7, 7],
  [4, 5, 2, 10, 8],
  [10],
  [2, 1],
  [-1, -3, -2, -4],
  [2, -1, 3, -4, 5],
  [6, 8, 0, 1, 3],
];

testCases.forEach((test, index) => {
  const result = bruteForceNextLargestElementToRight(test);
  console.log(`Test Case ${index + 1}:`);
  console.log("Input :", test);
  console.log("Output:", result);
  console.log("------------------------");
});
