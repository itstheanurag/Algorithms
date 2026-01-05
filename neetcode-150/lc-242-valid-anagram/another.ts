function anotherAnagramSolution(s: string, t: string): boolean {
  if (s.length != t.length) return false;
  const hashmap: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    hashmap[s[i]] = (hashmap[s[i]] || 0) + 1;
    hashmap[t[i]] = (hashmap[t[i]] || 0) - 1;
  }

  for (let char in hashmap) {
    if (hashmap[char] != 0) return false;
  }
  return true;
}
