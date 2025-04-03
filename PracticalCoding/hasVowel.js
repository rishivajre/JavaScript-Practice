// Approach 01: Using a loop and character checking
function hasVowel(str) {
    str = str.toLowerCase();
    for (let i=0; i<str.length; i++) {
        const char = str[i];
        if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
            return true; // Vowel found
        }
    }
    return false; // No vowel found
}

// Example usage:
console.log(hasVowel("hello")); 
console.log('-------------------');

//Approach 02: Using REGEX
function hasVowelRegex(str) {
    return /[aeiou]/i.test(str); // Check for vowels using regex
}

// Example usage:
console.log(hasVowelRegex("hello")); // true
console.log(hasVowelRegex("sky")); // false
console.log('-------------------'); 

//Approach 03: Using Array and some() method
function hasVowelArray(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').
        some(char => vowels.includes(char)); // Check if any character is a vowel
}
console.log(hasVowelArray("Hellos"));
console.log('-------------------');

//Aproach 04: Using Set Intersection
function hasVowelSet(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']); // Creates a set of vowels
    return [...str.toLowerCase()].some(char => vowels.has(char)); 
    // Checks if any character is a vowel
}
console.log(hasVowelSet("Hellos"));
console.log('-------------------');

//Aproach 05: Using for...of loop
function hasVowelForOf(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            return true; // Vowel found
        }
    } return false; // No vowel found
}
console.log(hasVowelForOf("Hellos"));
console.log('-------------------');

//Aproach 06: Using Array.prototype.reduce()
function hasVowelReduce(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').reduce((found, char) => {
        return found || vowels.includes(char); // Check if any character is a vowel
    }, false); // Initial value is false
}
console.log(hasVowelReduce("Hellos")); // true
console.log(hasVowelReduce("sky"));    // false
console.log('-------------------');

//Aproach 07: Using .every() method
function hasVowelEvery(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').every(char => vowels.includes(char)); // Check if all characters are vowels
    // Note: This will return false if no vowels are found
}
console.log(hasVowelEvery("hello")); // false
console.log(hasVowelEvery("aeiou")); // true
console.log('-------------------');

//Aproach 08: Using String.prototype.filter()
function hasVowelFilter(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('')
            .filter(char => vowels.includes(char)).length > 0; // Check if any character is a vowel
    // Note: This will return false if no vowels are found
}

console.log(hasVowelFilter("Hellos")); // true
console.log(hasVowelFilter("sky"));    // false