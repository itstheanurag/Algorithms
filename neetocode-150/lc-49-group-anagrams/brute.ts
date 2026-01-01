function groupAnagrams(strs: string[]): string[][] {
  const ans: string[][] = [];
  const used = new Array(strs.length).fill(false);

  for (let i = 0; i < strs.length; i++) {
    if (used[i]) continue;

    const group = [strs[i]];
    used[i] = true;

    for (let j = i + 1; j < strs.length; j++) {
      if (!used[j] && isAangram(strs[i], strs[j])) {
        group.push(strs[j]);
        used[j] = true;
      }
    }

    ans.push(group);
  }

  return ans;
}

function isAangram(s: string, t: string): boolean {
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
