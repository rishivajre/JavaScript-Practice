// ✅ Array Basics

let arr = [5,6,5,8,7]; console.log("OG: "+arr); // [5, 6, 5, 8, 7]
arr.push(9); //adds 9 to the end of the array
console.log("push: "+arr); // [5, 6, 5, 8, 7, 9]

arr.pop(); // removes the last element (9) from the array
console.log("pop: "+arr); // [5, 6, 5, 8, 7]

arr.shift(); // removes the first element (5) from the array
console.log("shift: "+arr); // [6, 5, 8, 7]

arr.unshift(4); // adds 4 to the beginning of the array
console.log("unshift: " + arr); // [4, 6, 5, 8, 7]

arr.splice(2, 1); // removes 1 element at index 2 (5)
console.log("Splice: " + arr); // [4, 6, 8, 7]

arr.splice(1, 0, 5); // adds 5 at index 1 without removing any element
console.log("Splice add: " + arr); // [4, 5, 6, 8, 7]

arr.splice(1, 2, 11, 12); // removes 2 elements after index 1 and adds 11 and 12
console.log("Splice remove and add: " + arr); // [4, 11, 12, 8, 7]

arr.reverse(); // reverses the order of elements in the array
console.log("Reverse: " + arr); // [7, 8, 12, 11, 4]

arr.sort(); // Sorts the array in ascending order
console.log("Sort: " + arr); // [11, 12, 4, 7, 8] ❌ Error
// Note: Sorting is based on string comparison, so numbers may not sort as expected

arr.sort((a, b) => a - b) // Sorts the array in ascending order numerically
console.log("Sort Numeric: " + arr); // [4, 7, 8, 11, 12]

let arr2 = [1, 2, 3, 4, 5];
let arr3 = arr.concat(arr2); // Concatenates arr and arr2   

console.log("Concat: " + arr3); // [4, 7, 8, 11, 12, 1, 2, 3, 4, 5]

// Using forEach to iterate over the array
arr3.forEach((element, index) => {
    console.log(`Element at index ${index}: ${element}`);
});

// Using map to create a new array with each element squared
let squaredArr = arr3.map(element => element * element);
console.log("Mapped (squared): " + squaredArr); // [16, 49, 64, 121, 144, 1, 4, 9, 16, 25]

// Using filter to create a new array with elements greater than 10
let filteredArr = arr3.filter(element => element > 10);
console.log("Filtered (greater than 10): " + filteredArr); // [11, 12, 16, 25]

// Using reduce to sum all elements in the array
let sum = arr3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Reduced (sum): " + sum); // 66

// Using find to get the first element greater than 10
let firstGreaterThanTen = arr3.find(element => element > 10);
console.log("First element greater than 10: " + firstGreaterThanTen); // 11

// Using includes to check if the array contains a specific element
let containsTwelve = arr3.includes(12); 
console.log("Contains 12: " + containsTwelve); // true

// Using indexOf to find the index of a specific element
let indexOfEight = arr3.indexOf(8); 
console.log("Index of 8: " + indexOfEight); // 2

// Using slice to get a portion of the array
let slicedArr = arr3.slice(2, 5); // Gets elements from index
console.log("Sliced (index 2 to 5): " + slicedArr); // [8, 11, 12]

// Using join to convert the array to a string
let joinedString = arr3.join(", "); // Joins elements with a comma and space
console.log("Joined String: " + joinedString); // "4, 7, 8, 11, 12, 1, 2, 3, 4, 5"

// Using every to check if all elements are greater than 0
let allGreaterThanZero = arr3.every(element => element > 0);
console.log("All elements greater than 0: " + allGreaterThanZero); // true

// Using some to check if any element is greater than 10    
let anyGreaterThanTen = arr3.some(element => element > 10);
console.log("Any element greater than 10: " + anyGreaterThanTen); // true

// Using fill to fill the array with a specific value
let filledArr = new Array(5).fill(0); // Creates an array of length 5 filled with 0
console.log("Filled Array: " + filledArr); // [0, 0, 0, 0, 0]

// Using flat to flatten a nested array
let nestedArr = [1, [2, 3], [4, [5, 6]]];
let flattenedArr = nestedArr.flat(2); // Flattens the array to a depth of 2
console.log("Flattened Array: " + flattenedArr); // [1, 2, 3, 4, 5, 6]

// Using findIndex to get the index of the first element that satisfies a condition
let indexOfFirstGreaterThanFive = arr3.findIndex(element => element > 5);
console.log("Index of first element greater than 5: " + indexOfFirstGreaterThanFive); // 0

// Using sort with a custom comparator function to sort in descending order
arr3.sort((a, b) => b - a); // Sorts the array in descending order
console.log("Sorted in Descending Order: " + arr3); // [12, 11, 8, 7, 4, 5, 3, 2, 1]

// Using Array.from to create an array from an iterable
let iterable = "Hello";
let arrayFromIterable = Array.from(iterable); // Converts the string to an array of characters
console.log("Array from Iterable: " + arrayFromIterable); // ['H', 'e', 'l', 'l', 'o']


// Using Array.isArray to check if a variable is an array
let isArray = Array.isArray(arr3);
console.log("Is arr3 an array? " + isArray); // true

// Using Array.of to create an array from a set of arguments
let arrayOfValues = Array.of(1, 2, 3, 4, 5); // Creates an array with the given values
console.log("Array.of: " + arrayOfValues); // [1, 2, 3, 4, 5]


// Using Array.prototype.copyWithin to copy part of the array to another location in the same array
let copyWithinArr = arr3.copyWithin(0, 2, 4); // Copies elements from index 2 to 4 to the start of the array
console.log("Copy Within: " + copyWithinArr); // [8, 7, 4, 5, 3, 2, 1]

// Using Array.prototype.fill to fill the array with a specific value
let filledArray = arr3.fill(0, 1, 3); // Fills elements from index 1 to 3 with 0
console.log("Filled Array: " + filledArray); // [8, 0, 0, 5, 3, 2, 1]   

// Using Array.prototype.toLocaleString to convert the array to a localized string
let localizedString = arr3.toLocaleString(); // Converts the array to a localized string representation
console.log("Localized String: " + localizedString); // "8,0,0,5,3,2,1" 

// Using Array.prototype.toString to convert the array to a string
let stringRepresentation = arr3.toString(); // Converts the array to a string representation
console.log("String Representation: " + stringRepresentation); // "8,0,0,5,3,2,1"

// Using Array.prototype.entries to get an iterator for the array entries
let entriesIterator = arr3.entries(); // Returns an iterator for the array entries
for (let entry of entriesIterator) {
    console.log(`Index: ${entry[0]}, Value: ${entry[1]}`); // Logs index and value of each entry
}

// Using Array.prototype.keys to get an iterator for the array keys (indices)
let keysIterator = arr3.keys(); // Returns an iterator for the array keys
for (let key of keysIterator) {
    console.log(`Key: ${key}`); // Logs each key (index) of the array
}   

// Using Array.prototype.values to get an iterator for the array values
let valuesIterator = arr3.values(); // Returns an iterator for the array values
for (let value of valuesIterator) {
    console.log(`Value: ${value}`); // Logs each value of the array
}

// Using Array.prototype.includes to check if the array contains a specific value
let containsEight = arr3.includes(8); // Checks if the array contains the value
console.log("Contains 8: " + containsEight); // true

// Using Array.prototype.indexOf to find the index of a specific value
let indexOfSeven = arr3.indexOf(7); // Finds the index of the value
console.log("Index of 7: " + indexOfSeven); // 1    

// Using Array.prototype.lastIndexOf to find the last index of a specific value
let lastIndexOfEight = arr3.lastIndexOf(8); // Finds the last index of the value
console.log("Last Index of 8: " + lastIndexOfEight); // 0   

// Using Array.prototype.findLast to find the last element that satisfies a condition
let lastGreaterThanFive = arr3.findLast(element => element > 5); // Finds the last element greater than 5
console.log("Last element greater than 5: " + lastGreaterThanFive); // 8

// Using Array.prototype.findLastIndex to find the last index of an element that satisfies a condition
let lastIndexOfGreaterThanFive = arr3.findLastIndex(element => element > 5); // Finds the last index of an element greater than 5
console.log("Last index of element greater than 5: " + lastIndexOfGreaterThanFive); // 0

// Using Array.prototype.flatMap to map each element and flatten the result
let flatMappedArr = arr3.flatMap(element => [element, element * 2]); // Maps each element and flattens the result
console.log("Flat Mapped Array: " + flatMappedArr); // [8, 16, 0, 0, 5, 10, 3, 6, 2, 4, 1, 2]   

// Using Array.prototype.toReversed to create a new array with elements in reverse order
let reversedArr = arr3.toReversed(); // Creates a new array with elements in reverse order
console.log("Reversed Array: " + reversedArr); // [1, 2, 3, 5, 0, 0, 8]

// Using Array.prototype.toSorted to create a new array sorted in ascending order
let sortedArr = arr3.toSorted((a, b) => a - b); // Creates a new array sorted in ascending order
console.log("Sorted Array: " + sortedArr); // [0, 0, 1, 2, 3, 5, 8]

// Using Array.prototype.toSpliced to create a new array with elements spliced
let splicedArr = arr3.toSpliced(1, 2, 10, 20); // Creates a new array with elements spliced at index 1, removing 2 elements and adding 10 and 20
console.log("Spliced Array: " + splicedArr); // [8, 10, 20, 0, 5, 3, 2, 1]
