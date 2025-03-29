const prompt = require('prompt-sync')();
// Function to sort an array in ascending order

//input size of the array
const size = parseInt(prompt('Enter the size of the array: '));
const numbers = [];

//Input numbers (elements of the array)
for (let i=0; i<size; i++){
    numbers[i] = parseInt(prompt(`Enter number ${i + 1}: `));
}

//check if the array is sorted in ascending order
let isAscending = true;

for (let i=0; i<numbers.length-1; i++){
    if (numbers[i]>numbers[i+1]){
        isAscending = false;
        break;
    }    
}

if(isAscending){
    console.log("The array is sorted in ascending order.");
}
else{
    console.log("The array is not sorted in ascending order. Sorting the array now...");

    //Bubble sort algorithm to sort the array in ascending order
    for (let i=0; i<numbers.length-1; i++){
        for (let j=0; j<numbers.length-1-i; j++){
            if (numbers[j]>numbers[j+1]){
                //swap numbers[j] and numbers[j+1]
                let temp = numbers[j];
                numbers[j] = numbers[j+1];
                numbers[j+1]=temp;
            }
        }
    }

    console.log("Sorted array is: ");
    console.log(numbers.join(" "));
}