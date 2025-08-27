function lengthOfLastWord(str) {
    str = str.trim();
    let count = 0;
    let lastWord = '';

    for (let i=str.length - 1; i>=0; i--) {
        if (/[a-zA-Z]/.test(str[i])) {
            count++;
            lastWord = str[i] + lastWord;
        } else if (count > 0) {
            break;
        }
    }
    console.log(`Last word: ${lastWord}, Count: ${count}`);
}

lengthOfLastWord("Fox is Munching...");
