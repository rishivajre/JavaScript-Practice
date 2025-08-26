function reverseInteger(num) {
    const sign = num < 0 ? -1 : 1;

    const reversedStr = Math.abs(num).toString().split('').reverse().join('');
    const reversedNum = parseInt(reversedStr, 10);
    return sign * reversedNum;
}

console.log(reverseInteger(1234))