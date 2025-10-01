// Reversed String
const reverse = str => str.split('').reverse().join('');
console.log(reverse("Hekya"));

// Palindrome : "Madam"
const checkPalindrome = str => str.toLowerCase() === str.toLowerCase().split('').reverse().join('');
console.log(checkPalindrome("Madam"));

// Count Chars freq
const countChar = (str, char) => str.toLowerCase().split(char).length -1;
console.log(countChar("Bananaab", "na"));

// Count Vowels
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
console.log(countVowels("Employement"));

// Capitalise 1st Letter of given word string
const capitalise = str => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalise("hello"));

// Capitalise 1st Letter of Each word of the String || Title Case Problem
const capitaliseEach = input => input.split(' ').map(w => w.length > 0 ? w[0].toUpperCase() + w.slice(1) : "invalid").join(' ');
console.log(capitaliseEach("wah kya bat hai..."));

// Contains Substring
const contains = (str, sub) => str.includes(sub);
console.log(contains("banana", "nao"));

// Count words in String
const countWords = str => str.trim().split(/\s+[a-zA-Z]/).length;
console.log(countWords("Wah kya      baat haii ..."));

// Reverse Words in a Sentence
const reverseWords = str => str.split(' ').reverse().join();
console.log(reverseWords("Hello World"));

// Reverse Each Word at their own positions
const reverseEachWord = str => str.split(' ').map(w => w.split('').reverse().join('')).join(" ");
console.log(reverseEachWord("Rishi Vajre"));

// Remove Vowels
const removeVowels = str => str.replace(/[aeiou]/gi, 'X');
console.log(removeVowels("Apple"));

// ANAGRAM : 2 Strings are ?
const areAnagrams = (str, str1) => str.toLowerCase().split('').sort().join('') === str1.toLowerCase().split('').sort().join('');
console.log(areAnagrams("mama", "amma"));

// Most Freq Char BUT we often use Hash Map for Freq counting
const morstFreqChar = str => {
    const freq = {};
    [...str].forEach(c => freq[c] = (freq[c] || 0) + 1);
    return Object.keys(freq).reduce((a, b) => freq[a] > freq[b] ? a : b);
};

console.log(morstFreqChar("banana"));
















