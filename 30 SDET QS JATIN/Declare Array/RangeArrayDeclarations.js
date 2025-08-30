/* 1. Array.from() with a mapping function
This is a concise and readable method that directly creates a new array from an array-like object, 
such as { length: 10 }, and populates it with a mapping function.  */

const nums = Array.from({ length: 10 }, (_, index) => index + 1);
console.log(nums);
const revNums = Array.from({length: 10}, (_, index) => 10 - index); 
console.log(revNums);

/* How it works:
{ length: 10 } creates an object with a length property, making it "array-like."
Array.from() iterates over this object.
The arrow function (_, index) => index + 1 is the mapping function. 
The underscore _ is a convention for an unused parameter (the value of each element, which is undefined), and 
index is the current index (0-9). 
index + 1 converts the zero-based index to a 1-10 value.  */

const numbers = [...Array(10).keys()].map(num => num + 1);
console.log(numbers);
const revNumbers = [...Array(10).keys()].map(num => 10 - num);
console.log(revNumbers);

/* 3. Standard for loop
This is a simple, straightforward, and highly readable approach that works in all versions of JavaScript. 
It involves initializing an empty array and then using a for loop to push each number into it.  */

const numEmpty = [];
for (let i=1; i<=10; i++) {
    numEmpty.push(i);
}

console.log(numEmpty);