function secondLargestNum(arr) {
    let unique = [...new Set(arr)];
    unique.sort((a, b) => b - a);  // sort the arrays in descending order & then give ele of 1st position

    return unique[1]; // giving 2nd positioned element
}

console.log(secondLargestNum([1,15,62,48,461,5,94,51,694,85,13,1]));