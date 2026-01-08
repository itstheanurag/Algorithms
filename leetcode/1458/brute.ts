function maxDotProductBrute(nums1: number[], nums2: number[]): number {
  const subs1 = getAllSubsequences(nums1);
  const subs2 = getAllSubsequences(nums2);

  let max = -Infinity;

  for (const a of subs1) {
    for (const b of subs2) {
      if (a.length !== b.length) continue;

      let dot = 0;
      for (let i = 0; i < a.length; i++) {
        dot += a[i] * b[i];
      }

      max = Math.max(max, dot);
    }
  }

  return max;
}

function getAllSubsequences(nums: number[]): number[][] {
  const res: number[][] = [];
  const n = nums.length;

  for (let mask = 1; mask < 1 << n; mask++) {
    const subseq: number[] = [];
    for (let i = 0; i < n; i++) {
      if (mask & (1 << i)) {
        subseq.push(nums[i]);
      }
    }
    res.push(subseq);
  }

  return res;
}

/*
INTUITION

We are asked to choose two NON-EMPTY subsequences (one from nums1 and one from nums2)
such that:
1. Both subsequences have the SAME length
2. Their dot product is maximized

Brute force means we do not try to be clever — we try *everything*.

Step 1:
Generate all possible non-empty subsequences of nums1.
Each element can either be taken or skipped, so we use bitmasks
from 1 to (2^n - 1) to enumerate every choice.

Step 2:
Do the same for nums2.

Step 3:
Compare every subsequence of nums1 with every subsequence of nums2.
If their lengths differ, they cannot form a valid dot product, so we skip.

Step 4:
If lengths match, compute the dot product by multiplying corresponding
elements and summing the result.

Step 5:
Keep track of the maximum dot product seen so far.

Why this works:
Every valid solution is just a pair of non-empty subsequences of equal length.
Since we enumerate ALL such pairs, we are guaranteed to see the optimal one.

Why this is slow:
nums1 has 2^n − 1 subsequences
nums2 has 2^m − 1 subsequences
We compare every pair → exponential time

This solution is meant only for understanding and correctness,
not for passing the actual constraints.
*/
