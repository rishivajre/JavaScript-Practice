function containVowel(str){
    // Use a regular expression to check for vowels (a, e, i, o, u)
    // The 'i' flag makes the regex case-insensitive
    // The 'g' flag is not needed here since we only need to check for the presence of at least one vowel
    // The regex checks for any of the vowels (a, e, i, o, u) in the string
  
    return /[aeiou]/i.test(str); //only this line is needed to check for vowels in the string
}
// Test cases
console.log(containVowel("hello")); 
console.log(containVowel("HELLO"));
console.log(containVowel("TNT"));
console.log(containVowel("aeiou"));
console.log(containVowel("AEIOU"));
console.log('--------OR---------');
/**Regular Expression:

/[aeiou]/i:
    [aeiou]: Matches any of the vowels a, e, i, o, u
    /.../i : The i flag makes the match case-insensitive 
             (so it matches both uppercase and lowercase vowels).
 .test(str): Tests if the string contains any characters 
             that match the regular expression. */

function containVowel2 (str2){
    return str2.toLowerCase().includes('a') || str2.toLowerCase().includes('e')
        || str2.toLowerCase().includes('i') || str2.toLowerCase().includes('o') 
        || str2.toLowerCase().includes('u');
    // This function checks if the string contains any vowels by converting it to lowercase
}

console.log(containVowel2("hello"));
console.log(containVowel2("HELLO"));
console.log(containVowel2("TNT"));
console.log(containVowel2("aeiou"));
console.log(containVowel2("AEIOU"));


console.log('--------OR---------');

function containVowel3 (str3) {
    let vowels = "aeiouAEIOU";

    for (let i=0; i<str3.length; i++){
        if (vowels.includes(str3[i])) {
            return true; // Return true if a vowel is found
        }
    }
    return false; // Return false if no vowels are found
}

console.log(containVowel3("hello"));
console.log(containVowel3("HELLO"));
console.log(containVowel3("TNT"));
console.log(containVowel3("aeiou"));
console.log(containVowel3("AEIOU"));

console.log('--------OR---------');

function containVowel4 (str4) {
    let vowels = "aeiouAEIOU";

    for (let char of str4){ // Use for...of loop to iterate through each character in the string
        if (vowels.includes(char)){ // Check if the character is a vowel
            return true;
        }
    }
    return false; // Return false if no vowels are found
}

console.log(containVowel4("hello"));
console.log(containVowel4("HELLO"));
console.log(containVowel4("TNT"));
console.log(containVowel4("aeiou"));
console.log(containVowel4("AEIOU"));