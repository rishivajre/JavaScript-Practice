const a = { valueOf: () => 2 };

console.log(a ==2);
console.log(a + 3);
console.log(a > 1);

console.log('--------------------');

{
    let b  = 4;
    console.log(b); // 4
}
//console.log(b);  ReferenceError: b is not defined

{
    var x = 10;
    let u = 90;
}

console.log(x) //10
// console.log(u) //ReferenceError: u is not defined

console.log('--------------------');

//IIFE with Block

(() => {
    let message = "hi";
    console.log(message);
}) ();

// console.log(message); //ReferenceError: message is not defined

console.log('--------------------');

{
    var i = 50;
    const ii = 50;
    console.log(i); // ✅ 50
    // i = 60; // ❌ TypeError (const की value change नहीं कर सकते)
}
console.log(typeof ii); // ❌ ReferenceError (x block के बाहर available नहीं)
console.log(typeof i);

console.log('--------------------');
let uniqueId = Symbol('id');

let person = {name: 'amit', age: 34}; //object
let numbers = [1,2,3,4]; //array
let greet = function(){console.log('hello!');};

console.log(person)
console.log(person.age)
console.log(numbers)
console.log(greet)
greet();

console.log('--------------------');

let firstName = 'amit';
let lastName = 'Sharma';
let fullName = `${firstName} ${lastName}`;  // Template literal
console.log(typeof fullName)

console.log(fullName); // "Amit Sharma"

// Primitive string (what you have)
//let fullName = `${firstName} ${lastName}`;
console.log(typeof fullName);           // "string"
console.log(fullName instanceof String); // false

// String object (different!)
let stringObject = new String("test");
console.log(typeof stringObject);           // "object"
console.log(stringObject instanceof String); // true

console.log('--------------------');

// Preferred way
console.log(typeof fullName === 'string')

// Alternative
console.log(Object.prototype.toString.call(fullName) === '[object String]');

console.log(typeof greet);


console.log('--------------------');
console.log(typeof []); // "object"
console.log([] instanceof Array); // true (क्योंकि यह Array से बना 
console.log('--------------------');

console.log(typeof []); // "object"
console.log([] instanceof Array); // true (because it is an instance of Array)
console.log([] == Array); // false (different types)
console.log([] === Array); // false (different types)

console.log(Array.isArray([])); // true
console.log('--------------------');

console.log([] == []); // false (different objects in memory)
console.log([] === []); // false (different objects in memory)

console.log('--------------------');
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false;
    }
    return true;
  }
  
  console.log(arraysEqual([], [])); // true
  console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true
  console.log(arraysEqual([1, 2, 3], [1, 2, 4])); // false

console.log('---------Functions?---------');

/**✅ Functions क्या होते हैं?
Functions एक reusable block of code होते हैं,
जो specific task perform करने के लिए बनाए जाते हैं।

इन्हें बार-बार call किया जा सकता है।

JavaScript में functions objects होते हैं,
यानी इन्हें variable में store किया जा सकता है,
as an argument pass किया जा सकता है,
और return भी किया जा सकता है।
 
*/


console.log('--------------------');
function add (a, b){
    return a+b;
}
let sum = add(5,10);
console.log(sum)
console.log(add(5,10));

console.log('--------------------');
function multiply(a, b=2){
    return a*b;
}

console.log(multiply(5));   // Output: 10 (b की default value 2 use हुई)
console.log(multiply(5, 3)); // Output: 15 (b की value 3 override हो गई)


console.log('----------Callback Function----------');

function greetUser(name, callback){
    console.log("Hello, "+ name);
    callback();
}

function sayGoodBye(){
    console.log("GoodBye!")
}

greetUser("Amit", sayGoodBye)

console.log('--------------------');

console.log('-Arrow Functions (ES6 Feature)--');
const square = (num) =>{
    return num * num;
}

console.log(square(50))

//👉 जब function में केवल एक statement हो, 
// तो {} और return हटाया जा सकता है।

const square2 = num => num * num;
console.log(square2(5))

console.log('⬆️--Short Arrow Function-----');
console.log('--------------------');

(function(){
    console.log("Hello IIFE is Invoked Immediately!")
}) ();

console.log('--------------------');
function showThis() {
    console.log(this);
}

showThis();  
// Browser में: window Object मिलेगा
// Node.js में: global Object मिलेगा

"use strict";
function strictMode() {
    console.log(this);
}

strictMode();  
// Output: undefined (strict mode में)


console.log('--------------------');

const person1 = {
    name: "Amit",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person1.greet();  
// Output: Hello, Amit

console.log('--------------------');



console.log('--------------------');



console.log('--------------------');

