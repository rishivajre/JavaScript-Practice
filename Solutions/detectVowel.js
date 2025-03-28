 
function hasVowel(str){
    if(typeof str !== 'string'){
        console.log('Input must be a String');
        return false;
    }

    const vowels = ['a', 'e', 'i', 'o','u'];
    return str.toLowerCase().split('').some(char=>vowels.includes(char));
}

console.log(hasVowel('Cat'));
console.log(hasVowel('Trye'));
console.log(hasVowel('123'));
console.log(hasVowel(789))

console.log('-------OR---------');

function hasVowel02(str02){
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    str02 = str02.toLowerCase();
    
    for(let i=0;i<str02.length;i++){
        if(vowels.includes(str02[i]))
            return true
    }
    return false
}

console.log(hasVowel02("Hello")); // True
console.log(hasVowel02("Sky"));   // False
console.log(hasVowel02(""));      // False

console.log(hasVowel02('Try'));
console.log(hasVowel02('123'));

console.log('------Array Reduce------');
function hasVowel3(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return str.toLowerCase().split('').reduce((found, char) => {
      return found || vowels.includes(char);
    }, false);
  }
  
  // Test cases
  console.log(hasVowel3("Hello")); // True
  console.log(hasVowel3("Sky"));   // False
  console.log(hasVowel3(""));      // False

  /**
   * Explanation:
    reduce: String ko array mein convert karke ek accumulator (found) maintain karta hai.
    Logic: Agar vowel milta hai, found true ho jata hai aur wahi return hota hai.
    Pros: Functional programming style, modern aur elegant lagta hai.
    Cons: Pura array traverse karta hai, some() jaisa early exit nahi hai.
   */