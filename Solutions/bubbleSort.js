// Bubble Sort Implementation

function bubbleSort(arr) {
    const n = arr.length;
    // Traverse through all array elements
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
console.log(bubbleSort(arr)); 

// 🌟 How Bubble Sort Works:
// 🟢 Bubble Sort repeatedly compares adjacent elements in the array.
// 🔄 If the current element is greater than the next one, they are swapped. 🔄
// 🔁 This process "bubbles" the largest element to the end of the array in each iteration.

// 🔄 Algorithm Steps:
// 1️⃣ Loop from 0 to n-1 (where n is the array length).
// 2️⃣ In each iteration:
//     - Compare adjacent elements. 🔍
//     - Swap them if they are in the wrong order. 🔄
// 3️⃣ Repeat until the array is fully sorted. ✅

// 💡 Key Points:
// - 🕒 Time Complexity: O(n²) in the worst and average cases.
// - 🟢 Best Case: O(n) when the array is already sorted (optimized version).
// - 🔁 Multiple swaps per iteration.
// - 🚀 Simple but inefficient for large datasets.

