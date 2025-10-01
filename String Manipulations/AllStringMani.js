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

// Capitalise 1st Letter of Each word of the String
const capitaliseEach = input => input.split(' ').map(w => w.length > 0 ? w[0].toUpperCase() + w.slice(1) : "invalid").join(' ');
console.log(capitaliseEach("wah kya bat hai..."));

// 