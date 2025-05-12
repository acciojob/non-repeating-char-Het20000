function firstNonRepeatedChar(s) {
  const charCounts = {};
  for (const char of s) {
    charCounts[char] = (charCounts[char] || 0) + 1;
  }
  for (const char of s) {
    if (charCounts[char] === 1) {
      return char;
    }
  }
  return null;
}