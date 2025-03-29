const prompt = require ('prompt-sync')();
// Import prompt-sync for user input

// Input size of the array
const size = parseInt(prompt('Enter array size: '));
const numbers = [];

//input
for (let i=0; i<size; i++){
    numbers[i] = parseInt(prompt(`Enter number ${i + 1}: `));
}

//Initialize min and max
let min = Number.MAX_VALUE;
let max = Number.MIN_VALUE;

//Find min and max
for (let i=0; i<numbers.length; i++){
    if(numbers[i] < min){
        min = numbers[i];
    }
    if(numbers[i] > max){
        max = numbers[i];
    }
}

console.log(`The minimum number is: ${min}`);
console.log(`The maximum number is: ${max}`);