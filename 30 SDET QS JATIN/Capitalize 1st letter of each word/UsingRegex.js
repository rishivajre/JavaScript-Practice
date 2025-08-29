function capitalize1stLetterOfEachWord(str) {
    return str.replace(/\b\w/g, word => word.toUpperCase());
}

console.log(capitalize1stLetterOfEachWord("i love my country!!"));