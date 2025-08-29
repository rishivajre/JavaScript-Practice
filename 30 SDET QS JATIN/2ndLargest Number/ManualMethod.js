function secondLargest(arr) {
    if (arr.length < 2) return null; // nnot enough elements

    let first = -Infinity; // for largest Number
    let second = -Infinity; // for secondLargest number

    for (let num of arr) {
        if (num > first) {
            //found a new largest num
            second = first; // previous largest becomes second largest
            first = num; // update largest
        } else if (num > second && num < first) {
            second = num; // update second only if num < first but num > current second value
        } 
    }

    return second === -Infinity ? null : second;
    //If second = -Infinity still, it means no second largest exists (all numbers same, or only one element).
}

console.log(secondLargest([10, 20, 4, 45, 99]));
