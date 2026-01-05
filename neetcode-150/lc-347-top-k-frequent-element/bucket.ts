/**
 * 
    Time:  O(n)
    Space: O(n)
 */

function topKFrequent(arr: number[], k: number): number[] {
  const freq: Record<number, number> = {};

  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;
  }

  const buckets: number[][] = new Array(arr.length + 1).fill(0).map(() => []);

  for (const num in freq) {
    buckets[freq[num]].push(Number(num));
  }

  const ans: number[] = [];

  for (let i = buckets.length - 1; i >= 0 && ans.length < k; i--) {
    for (const num of buckets[i]) {
      ans.push(num);
      if (ans.length === k) break;
    }
  }

  return ans;
}
