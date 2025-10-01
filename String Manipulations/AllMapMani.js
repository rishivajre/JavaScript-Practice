// Count Duplicate chars
const freqMap = str => {
    const m = new Map();
    for (const ch of str.toLowerCase()) {
        m.set(ch, (m.get(ch) || 0) + 1);
    }
    return m;
}

console.log(freqMap("bananA"));