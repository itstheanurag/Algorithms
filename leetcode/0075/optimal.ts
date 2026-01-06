function optimal(arr: number[]): void {
  let low = 0,
    mid = 0,
    high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] == 0) {
      swap(low, mid);
      mid++;
      low++;
    } else if (arr[mid] == 1) {
      mid++;
    } else if (arr[mid] == 2) {
      swap(mid, high);
      high--;
    }
  }

  function swap(a: number, b: number) {
    [arr[b], arr[a]] = [arr[a], arr[b]];
  }
}

/**
 * INTUITION
 *
 * This algorithm is an implementation of the Dutch National Flag approach.
 * The array contains only three possible values: 0, 1, and 2.
 *
 * We maintain three pointers to divide the array into four regions:
 *
 * 0 to low - 1        → all 0s (correctly placed)
 * low to mid - 1      → all 1s (correctly placed)
 * mid to high         → unknown / unprocessed elements
 * high + 1 to end     → all 2s (correctly placed)
 *
 * The goal is to shrink the "unknown" region until every element is placed
 * in its correct region.
 *
 * - If arr[mid] == 0:
 *   Swap it with arr[low] and move both pointers forward.
 *   This expands the 0s region.
 *
 * - If arr[mid] == 1:
 *   It is already in the correct position, so only move mid forward.
 *
 * - If arr[mid] == 2:
 *   Swap it with arr[high] and move high backward.
 *   Do NOT move mid here because the swapped element is unprocessed.
 *
 * The loop terminates when mid > high, meaning there are no unprocessed
 * elements left.
 *
 * Time Complexity: O(n)
 * Each element is visited at most once.
 *
 * Space Complexity: O(1)
 * Sorting is done in-place using constant extra space.
 */
