/* 1. Array literal notation (most common)
This is the easiest and most preferred method for creating an array. 
You use square brackets [] to declare an array, 
and you can provide comma-separated elements to initialize it.  */
let emptyArray = [];
let arr1 = ["dog", "catch", "mouse"];
console.log(arr1);
console.log(arr1.toString());
console.log("------------------------");
/*  2. Array constructor
You can create an array by using the new Array() constructor. 
This method is less common due to its potential for unexpected 
behavior when a single number is passed as an argument. */
let colors = new Array("Blue", "RED", "Green");
console.log(colors);
let size = new Array(10);

console.log("------------------------");
/*  3. Using Array.of()
The Array.of() method creates a new array instance with a variable number of arguments, 
regardless of the number or type of the arguments. 
It avoids the confusing behavior of the Array() constructor when a single number is passed. */
let nums = Array.of(10);
let mixedArr =  Array.of("catch", 1212, true); // array of Multiple Ele.
console.log(nums);
console.log(mixedArr);

console.log("------------------------");
/* 4. Using Array.from()
This method creates a new, shallow-copied array instance from an array-like or iterable object. 
It is particularly useful for converting other data structures into arrays.Syntax */

let greeting = Array.from("Hello"); // Creating an array from a string
console.log(greeting);

// an array from nodeList (from DOM query)
//let listItems = Array.from(document.querySelector('li'));
// console.log(listItems);

