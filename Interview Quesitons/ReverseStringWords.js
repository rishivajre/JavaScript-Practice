let input = "Hello World";

let words = input.toLowerCase().split(" ");
let reverseWords = words.map(w => w.split('').reverse().join(''));
let result = reverseWords.join('');

console.log(words);
console.log(reverseWords);
console.log(result);