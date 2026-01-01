function optimalIsAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;

  const hashmap: Record<string, number> = {};

  for (let char of s) {
    hashmap[char] = (hashmap[char] || 0) + 1;
  }

  for (let char of t) {
    if (!hashmap[char]) return false;
    hashmap[char] = hashmap[char] - 1;
  }

  return true;
}
