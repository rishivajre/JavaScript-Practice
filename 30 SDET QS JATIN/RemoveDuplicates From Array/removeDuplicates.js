function removeDuplicates(arr) {
    return [...new Set(arr)].sort((a,b) => a - b );
}

console.log(removeDuplicates([0,0,0,1,8,9,3,1,4,6,2,3,54,9,7,8]));
console.log(removeDuplicates([0,0,0,1,8,9,3,1,4,6,2,3,54,9,7,8]).toString());