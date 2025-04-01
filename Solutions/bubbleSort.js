// Bubble Sort Implementation
function bubbleSort(arr) {
    const n = arr.length;
    for (let i=0; i<n-1; i++) {
        for (let j=0; j<n-i-1; j++) {
            if (arr[j] > arr[j+1]){
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp; 
            }
        }
    }
    return arr;
}

const arr = [5,4,3,2,1,0,-1,-2,-3];

console.log(bubbleSort(arr)); /*/ Output: [
    -3, -2, -1, 0, 1,
     2,  3,  4, 5]*/
// Time Complexity: O(nxn) = O(n^2) 