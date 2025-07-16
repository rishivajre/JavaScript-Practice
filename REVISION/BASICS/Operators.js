// ✅ Step 4: Operators

// Operators are used to perform operations on variables and values.
// There are different types of operators in JavaScript, including arithmetic, assignment, comparison, logical, and more.
// Here are some examples of different types of operators:
// 1. Arithmetic Operators
let a = 10;
let b = 3;
let sum = a + b; // addition
let diff = a - b; // substraction
let product = a * b; //multiplication
let quotient = a / b; // division
let remainder = a%b; // modulus
let exponent = a ** b; //exponentiation/power
console.log(`Sum: ${sum}, Diff: ${diff}, product: ${product},
    Quotient: ${quotient}, Remainder: ${remainder}, Exponent: ${exponent}`);

// 2. Assignment Operators
let x = 5; // assignment
x += 2; // earlier value of x is 5, now it becomes 7 OR x = x + 2;
x -= 3; // earlier value of x is 7, now it becomes 4 OR x = x - 3;
x *= 2; // earlier value of x is 4, now it becomes 8 OR x = x * 2;
x /= 4; // earlier value of x is 8, now it becomes 2 OR x = x / 4;
x %= 2; // earlier value of x is 2, now it becomes 0 OR x = x % 2;
console.log(`Value of x after assignment operations: ${x}`);

// 3. Comparison Operators

console.log(5 === '5'); // false (strict equality, checks value and type) in JavaScript, number 5 is not equal to string '5' or Type coercion does not happen
console.log(5 == '5'); // true (loose equality, checks value only, type coercion happens)
console.log(5 !== '5'); // true (strict inequality, checks value and type)
console.log(5 != '5'); // false (loose inequality, checks value only, type coercion happens)
console.log(5 > 3); // true (greater than)
console.log("**********")
let p = true;
let y = false;
console.log(p && y); // false bcoz both values are not true logically and operator returns true only if both operands are true
console.log(p || y); // true bcoz at least one value is true logically and operator returns true if at least one operand is true
console.log(!p); // false (Logical NOT, negates the value of p)
console.log(!y); // true (Logical NOT, negates the value of y)