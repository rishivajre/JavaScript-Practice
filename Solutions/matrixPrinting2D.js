const prompt = require('prompt-sync')();
// Import prompt-sync for user input
// Taking a matrix as an input and printing its elements.

const rows = parseInt(prompt('Enter the number of rows: '));
const cols = parseInt(prompt('Enter the number of cols: '));

const matrix = [];
// Initialized an empty array to store the matrix

// Loop to take input for each element of the matrix
for (let i=0; i<rows; i++){
    matrix[i] = []; 
    // To create a 2D array, you need to explicitly initialize each row as an empty array.
    for (let j=0; j<cols; j++){
        matrix[i][j] = parseInt(prompt(`Enter element at postiion ${i} ${j}: `));
    }
}

// Loop to print the matrix elements
console.log("The matrix is: ");
// for (let i=0; i<rows; i++){
//     console.log(matrix[i].join(" ")); // Join each row with a space and print it
// }

for (let i=0; i<rows; i++){
    for (let j=0; j<cols; j++){
        process.stdout.write(matrix[i][j] + " ");
    }
    console.log(); // Move to the next line after each row
}

console.log('Enter the element to search in the matrix: ');
const x = parseInt(prompt(''));

 for (let i=0; i<rows; i++){
    for (let j=0; j<cols; j++){
        if (matrix[i][j] === x){
            console.log(`Element ${x} found at position [${i}] [${j}]`);

        }
    }
 }