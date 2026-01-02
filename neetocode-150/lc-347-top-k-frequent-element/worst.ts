function bruteforceslution(arr: number[], k: number): number[] {
  const used: boolean[] = new Array(arr.length).fill(false);

  const hashmap: Record<number, number> = {};
  for (let i = 0; i < arr.length; i++) {
    if (used[i]) continue;
    const num = arr[i];
    let numCount = 1;
    used[i] = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (!used[j] && arr[i] == arr[j]) {
        numCount++;
        used[j] = true;
      }
    }

    hashmap[num] = numCount;
  }

  const numbers = Object.entries(hashmap);
  numbers.sort((a, b) => b[1] - a[1]);

  return numbers.slice(0, k).map(([num]) => Number(num));
}

/**
 *
 * THIS CODE IS A JOKE MAN.
 */
