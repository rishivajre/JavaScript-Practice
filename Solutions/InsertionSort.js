// Insetion sort implementation
function insertionSort(arr) {
 //Loop through the array starting from the 2nd element
 for (let i=1; i<arr.length; i++) {
    let key = arr[i]; //The current element to be inserted
    let j = i-1; //Last index of the sorted array

    // Shift element of the sorted part to the right
    while (j>=0 & arr[j] > key) {
        arr[j+1] = arr[j]; // shift bigger ele to the right
        j--; //moved the index to its previous position (0 -> -1)
    }
    //Insert the key into it correct position
    arr[j+1] = key; //(-1+1 i.e. at 0th index key is inserted at first iteration)
 }

 return arr;
}

const arr = [5,4,3,2,1,0,-1];
console.log(insertionSort(arr));