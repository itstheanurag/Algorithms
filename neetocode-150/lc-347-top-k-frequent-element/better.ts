function bettersolution(arr: number[], k: number): number[] {
  const hashmap: Record<number, number> = {};

  for (const num of arr) {
    hashmap[num] = (hashmap[num] || 0) + 1;
  }

  const numbers = Object.entries(hashmap);
  numbers.sort((a, b) => b[1] - a[1]);

  return numbers.slice(0, k).map(([num]) => Number(num));
}
