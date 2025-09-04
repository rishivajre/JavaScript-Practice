const sumOfDigits = num => [...num.toString()].reduce((s, d) => s + +d, 0);

console.log(sumOfDigits(12345));