function Capitalize1stLetterOfWords(str) {
    return str.split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
}

console.log(Capitalize1stLetterOfWords("i love my country!!!"))