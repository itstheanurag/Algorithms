function optimalGroupAnagramSolution(strs: string[]): string[][] {
  if (!strs.length) return [];

  // hash arrays for inputs
  const hash: Record<string, string[]> = {};

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const freq = new Array(26).fill(false);

    for (let j = 0; j < str.length; j++) {
      const index = str.charCodeAt(j) - 97; // 'a' = 97
      freq[index]++;
    }

    const key = freq.join("#");

    if (!hash[key]) hash[key] = [];
    hash[key].push(str);
  }

  return Object.values(hash);
}

/**
 *
 * IDEA, english has the 26 letters.
 *
 *
 */
