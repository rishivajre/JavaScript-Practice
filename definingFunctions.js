

//Normal function creation
function add(a,b) {
  return a + b;
}
let sum = add(2,3);
console.log(sum);


//Assigning anonymus function to yor values without giving them name

let sum1 = function (c, d) {
  return c + d;
};
console.log(sum1(4,5));


/*ODirect On liner code - most optimized*/

let sum2 = (c,d) => c + d;
console.log(sum2(22,3));



/** Scope of var keyword is 1) global if declared On global level and 2) Functional if declared on functional level */

/**If var is declared within the function, then its not accessible outside that function for other's usage */

/**let can be accessible outside of the scope */
function scopeExample() {
    if (true) {
        var varExample = "I am a var variable"; // Function-scoped
        let letExample = "I am a let variable"; // Block-scoped
        const constExample = "I am a const variable"; // Block-scoped
    }
    
    console.log(varExample); // ✅ Accessible (function-scoped)
    // console.log(letExample); // ❌ Error: letExample is not defined (block-scoped)
    // console.log(constExample); // ❌ Error: constExample is not defined (block-scoped)
}
scopeExample();


