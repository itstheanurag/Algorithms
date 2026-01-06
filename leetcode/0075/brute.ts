function bruteforcesortcolors(nums: number[]): void {
  // any of the sorting algorithms will work
}

function bubbleSort(nums: number[]): void {
  const n = nums.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
}

function selectionSort(nums: number[]): void {
  const n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
  }
}

function insertionSort(nums: number[]): void {
  const n = nums.length;
  for (let i = 1; i < n; i++) {
    const key = nums[i];
    let j = i - 1;
    while (j >= 0 && nums[j] > key) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = key;
  }
}

function mergeSort(nums: number[]): void {
  const n = nums.length;
  if (n <= 1) return;

  const mid = Math.floor(n / 2);
  const left = nums.slice(0, mid);
  const right = nums.slice(mid);

  mergeSort(left);
  mergeSort(right);

  let i = 0,
    j = 0,
    k = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      nums[k++] = left[i++];
    } else {
      nums[k++] = right[j++];
    }
  }
  while (i < left.length) {
    nums[k++] = left[i++];
  }
  while (j < right.length) {
    nums[k++] = right[j++];
  }
}
