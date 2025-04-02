// Selection Sort Algorithm Implementation in JavaScript
function SelectionSort(arr) {
    const n = arr.length;

    // Traverse through all array elements
    for (let i=0; i<arr.length; i++) {
        let smallest = i;
        for (let j=i+1; j<arr.length; j++) {
            if (arr[j] < arr[smallest]) {
                smallest = j;
            }

            let temp = arr[smallest];
            arr[smallest] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

const arr = [5,4,3,2,1,0,-1];
console.log(SelectionSort(arr));


// 🌟 How Selection Sort Works:
// 🟢 Similar to Bubble Sort, but instead of swapping adjacent elements repeatedly,
// 🔍 It finds the **minimum element** from the unsorted part of the array 
//    and swaps it with the **first unsorted element**.

// 🔄 Algorithm Steps:
// 1️⃣ Loop from 0 to n-1 (where n is the array length).
// 2️⃣ In each iteration:
//     - Find the **smallest element** in the unsorted part. 🔽
//     - Swap it with the **first unsorted element**. 🔄
// 3️⃣ Repeat until the entire array is sorted. ✅

// 💡 Key Points:
// - 🕒 Time Complexity: O(n²) in all cases (worst, average, best).
// - 🔁 1 swap per iteration.
// - 🚀 Simple but not efficient for large datasets.