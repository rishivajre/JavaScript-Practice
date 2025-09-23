function findDuplicateLetters(str) {
  const freqMap = {};
  const normalizedStr = str.toLowerCase().replace(/[^a-z]/g, ""); //Only Letters

  //count Frequency of each letter
  for (const char of normalizedStr) {
    freqMap[char] = (freqMap[char] || 0) + 1;
  }

  //print duplicates
  console.log("Duplicate letters and their frequencies");
  for (const [char, count] of Object.entries(freqMap)) {
    if (count > 1) {
        console.log(`${char} => ${count}`);
    }
  }
}

findDuplicateLetters("Hello, Geordon");
