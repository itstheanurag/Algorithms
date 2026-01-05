function isAnagram(s1: string, s2: string): boolean {
  if (!s1.length && !s2.length) return true;
  if (s1.length != s2.length) return false;

  // sort both strings, and check if they are the same.
  // javascript sorts elements lexiographically
  return s1.split("").sort().join("") === s2.split("").sort().join("");
}
