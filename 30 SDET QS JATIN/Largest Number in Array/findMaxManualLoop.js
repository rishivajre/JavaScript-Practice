function findMaxLoopManually(arr) {
    let max = arr[0];

    for (let num of arr) {
        if (num > max) max = num;
    }

    return max;
}

console.log(findMaxLoopManually([1,23,455.5,-54545165167,7]));