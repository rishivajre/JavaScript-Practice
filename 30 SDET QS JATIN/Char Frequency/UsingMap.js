function charFreq(str) {
  if (typeof str !== "string" || str.length === 0) return new Map();

  const map = new Map();

  for (let char of str.toLowerCase()) {
    if (/[a-z0-9]/.test(char)) {
      map.set(char, (map.get(char) || 0) + 1);
    }
  }

  return map;
}

console.log(charFreq("Hello 123!"));
