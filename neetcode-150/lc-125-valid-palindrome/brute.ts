function isPalindrome(str: string): boolean {
  const lowerStr = str.toLowerCase();
  let properString = "";

  for (let i = 0; i < lowerStr.length; i++) {
    const code = lowerStr.charCodeAt(i);
    if (
      (code >= 97 && code <= 122) || // a-z
      (code >= 48 && code <= 57) // 0-9
    ) {
      properString += lowerStr[i];
    }
  }

  let i = 0,
    j = properString.length - 1;

  while (i < j) {
    if (properString[i] !== properString[j]) return false;
    i++;
    j--;
  }

  return true;
}
