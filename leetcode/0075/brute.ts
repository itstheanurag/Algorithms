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

function mergeSort(nums: number[], low = 0, high = nums.length - 1): void {
  if (low >= high) return;

  const mid = Math.floor((low + high) / 2);

  mergeSort(nums, low, mid);
  mergeSort(nums, mid + 1, high);

  merge(nums, low, mid, high);
}

function merge(nums: number[], low: number, mid: number, high: number) {
  const temp: number[] = [];

  let i = low;
  let j = mid + 1;

  while (i <= mid && j <= high) {
    if (nums[i] <= nums[j]) {
      temp.push(nums[i]);
      i++;
    } else {
      temp.push(nums[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(nums[i]);
    i++;
  }

  while (j <= high) {
    temp.push(nums[j]);
    j++;
  }

  for (let k = low; k <= high; k++) {
    nums[k] = temp[k - low];
  }
}
