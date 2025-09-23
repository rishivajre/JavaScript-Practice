const countDuplicate = (str) => {
    return str.split('').reduce((charCounts, char) => {
        charCounts[char] = (charCounts[char] || 0) + 1;
        return charCounts;
    }, {});
}

const resultReduce = countDuplicate("banana");
console.log(resultReduce);