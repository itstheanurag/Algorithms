function stackNextLargestElementToRight(nums: number[]) {
  const stack: number[] = [];
  const ans: number[] = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    while (stack.length > 0 && stack[stack.length - 1] <= nums[i]) {
      stack.pop();
    }

    if (stack.length === 0) ans.push(-1);
    else ans.push(stack[stack.length - 1]);

    stack.push(nums[i]);
  }

  return ans.reverse();
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
  const result = stackNextLargestElementToRight(test);
  console.log(`Test Case ${index + 1}:`);
  console.log("Input :", test);
  console.log("Output:", result);
  console.log("------------------------");
});
