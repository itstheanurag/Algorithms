function bruteforcegroupanagrams(strs: string[]): string[][] {
  const ans: string[][] = [];
  const stringSortedArray: string[] = [];
  const used = new Array(strs.length).fill(false);

  for (let str of strs) {
    const sortedString = str.split("").sort().join("");
    stringSortedArray.push(sortedString);
  }

  for (let i = 0; i < stringSortedArray.length; i++) {
    if (used[i]) continue;

    const group = [strs[i]];

    for (let j = i + 1; j < stringSortedArray.length; j++) {
      if (!used[j] && stringSortedArray[i] === stringSortedArray[j]) {
        group.push(strs[j]);
        used[j] = true;
      }
    }

    ans.push(group);
  }

  return ans;
}
