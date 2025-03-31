// Print the spiral order matrix as output for a given matrix of numbers.
const prompt = require('promt-sync')();

// Import prompt-sync for user input
// Taking a matrix as an input and printing its elements.
const rows = parseInt(prompt('Enter the number of rows: '));
const cols = parseInt(prompt('Enter the number of cols: '));

const matrix = [];
// Initialized an empty array to store the matrix
// Loop to take input for each element of the matrix
for (let i=0; i<rows; i++){
    matrix[i] = [];
    // To create a 2D array, you need to explicitly initialize each row as an empty array/ in each time-loop.
    for(let j=0; j<cols; j++){
        matrix[i][j] = parseInt(prompt(`Enter element at postion [${i}] [${j}:] `));
    }
}

// Loop to print the matrix elements
