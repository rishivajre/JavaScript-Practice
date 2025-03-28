
/** Scope of var keyword is 
 * 1) global if declared On global level and 
 * 2) Functional if declared on functional level */
/** Scope of let and const keyword is
 * 1) Block level if declared within the block */
/**var is hoisted to the top of the function or global scope, and initialized with undefined */
/**let and const are hoisted to the top of the block, but not initialized */
/**If var is declared within the function, then its not accessible outside that function for other's usage */
/**let can be accessible outside of the scope */


//var can be redeclared and reassigned
//let can be reassigned but not redeclared
//exapmle of redeclaration
var a = 10;
var a = 20; // ✅ No error
console.log(a); // Output: 20
//example of reassignment
let p = 30;
p = 40; // ✅ Reassignment is allowed
console.log(p); // Output: 40
//const cannot be reassigned and redeclared
//const should be initialized at the time of declaration
//const is immutable
//const is not hoisted when declared with const keyword
//const is block scoped
//const is not accessible outside of the block
//let is not hoisted when declared with let keyword

/************************************************/

/**Example 1: Scope Differences (var is function-scoped, let and const are block-scoped) */
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
console.log('*******************************************')
/*********************************************** */
/**Example 2: Redeclaration (var allows redeclaration, let and const do not) */
// var allows redeclaration
var a = 10;
var a = 20; // ✅ No error
console.log(a); // Output: 20

// let does not allow redeclaration
let b = 30;
// let b = 40; // ❌ Error: Identifier 'b' has already been declared

// const does not allow redeclaration
const c = 50;
// const c = 60; // ❌ Error: Identifier 'c' has already been declared


console.log('*******************************************')
/*********************************************** */

//Example 03:Reassignment (var and let can be reassigned, const cannot)

var x = 5; // Initial declaration with var
x = 10; // ✅ Reassignment is allowed
console.log(x); // Output: 10

let y = 15; // Initial declaration with let
y = 20; // ✅ Reassignment is allowed
console.log(y); // Output: 20

const z = 25; // Initial declaration with const
// z = 30; // ❌ Error: Assignment to constant variable
console.log(z); // Output: 25 (unchanged)

console.log('*******************************************')

/**Example 04: This example automates a simple test for verifying the title of a webpage, emphasizing scope, reassignment, and hoisting. */
//not runnable playwright script-----
const { test, expect } = require('@playwright/test');

test('Validate page title with var, let, and const usage', async ({ page }) => {
    // Declaring the base URL with const because it won't change
    const baseUrl = 'https://example.com';

    // Using let for variables that may change based on the test logic
    let expectedTitle = 'Example Domain';
    let actualTitle;

    // Navigating to the website
    await page.goto(baseUrl);

    // Using var inside an if block to demonstrate its function-scope behavior
    if (true) {
        var varVariable = 'This is a var variable'; // Function-scoped
        let letVariable = 'This is a let variable'; // Block-scoped
        const constVariable = 'This is a const variable'; // Block-scoped

        console.log(varVariable); // ✅ Accessible here
        console.log(letVariable); // ✅ Accessible here
        console.log(constVariable); // ✅ Accessible here
    }

    console.log(varVariable); // ✅ Accessible here (function-scoped)
//   console.log(letVariable); // ❌ Error: letVariable is not defined (block-scoped)
//   console.log(constVariable); // ❌ Error: constVariable is not defined (block-scoped)

    // Capturing the page title
    actualTitle = await page.title(); // Assigning the title of the page

    // Validating the page title
    expect(actualTitle).toBe(expectedTitle); // Test should pass

    // Trying to reassign const (will cause an error if uncommented)
//   baseUrl = 'https://newexample.com'; // ❌ Error: Assignment to constant variable

    // Reassigning let variables
    expectedTitle = 'Updated Example Domain'; // ✅ Allowed
    actualTitle = 'Updated Example Domain'; // ✅ Allowed

    // Final test to demonstrate reassignment works with let
    expect(actualTitle).toBe(expectedTitle); // Test should pass
});


console.log('*******************************************')

/**Example 05 */
/**Here’s a complex example showcasing the differences between var, let, and const in terms of hoisting, scope, and 
 * temporal dead zone (TDZ) in a function with nested blocks: */

function complexExample() {
    // Hoisting example for var
    console.log(varVariable); // ✅ Output: undefined (hoisted but uninitialized)
    // console.log(letVariable); // ❌ Error: Cannot access 'letVariable' before initialization (TDZ)
    // console.log(constVariable); // ❌ Error: Cannot access 'constVariable' before initialization (TDZ)

    var varVariable = "I am a var variable"; // Hoisted and initialized to undefined
    let letVariable = "I am a let variable"; // Block-scoped, not hoisted to be usable before declaration
    const constVariable = "I am a const variable"; // Block-scoped, not hoisted to be usable before declaration

    console.log(varVariable); // ✅ Output: I am a var variable
    console.log(letVariable); // ✅ Output: I am a let variable
    console.log(constVariable); // ✅ Output: I am a const variable

    if (true) {
        var varVariable = "Reassigned inside if block"; // `var` is function-scoped, so it overwrites the outer value
        let letVariable = "New let inside if block"; // Block-scoped, separate from outer letVariable
        const constVariable = "New const inside if block"; // Block-scoped, separate from outer constVariable
        
        console.log(varVariable); // ✅ Output: Reassigned inside if block
        console.log(letVariable); // ✅ Output: New let inside if block
        console.log(constVariable); // ✅ Output: New const inside if block
    }

    // Outside the block
    console.log(varVariable); // ✅ Output: Reassigned inside if block (function-scoped var is affected)
    console.log(letVariable); // ✅ Output: I am a let variable (block-scoped let is unaffected)
    console.log(constVariable); // ✅ Output: I am a const variable (block-scoped const is unaffected)
}
complexExample();

console.log('*******************************************')

/**Key Takeaways from This Example:
Hoisting:

var is hoisted and initialized to undefined before execution.
let and const are in a Temporal Dead Zone (TDZ) from the start of the block until their declaration.
Scope:

var is function-scoped, so its value changes even outside the block where it’s reassigned.
let and const are block-scoped, so changes inside a block don’t affect outer values.
Reassignment:

var and let allow reassignment, but const doesn’t allow reassignment.
This example integrates all major concepts into a single scenario for better understanding. */
