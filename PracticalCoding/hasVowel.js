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