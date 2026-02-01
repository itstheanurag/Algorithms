function minimumDeleteSum(s1: string, s2: string): number {
  const dp = Array.from({ length: s1.length }, () => Array(s2.length).fill(-1));

  const solve = (i: number, j: number): number => {
    if (i === s1.length) {
      let sum = 0;
      for (let k = j; k < s2.length; k++) sum += s2.charCodeAt(k);
      return sum;
    }

    if (j === s2.length) {
      let sum = 0;
      for (let k = i; k < s1.length; k++) sum += s1.charCodeAt(k);
      return sum;
    }

    if (dp[i][j] !== -1) return dp[i][j];

    if (s1[i] === s2[j]) {
      return (dp[i][j] = solve(i + 1, j + 1));
    }

    const delete1 = s1.charCodeAt(i) + solve(i + 1, j);
    const delete2 = s2.charCodeAt(j) + solve(i, j + 1);

    return (dp[i][j] = Math.min(delete1, delete2));
  };

  return solve(0, 0);
}
