function charCount (str) {
    const map = {};
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    for (let char of cleaned) {
        map[char] = (map[char] || 0) + 1;
    }
    return map;
}

console.log(charCount("hHello"));