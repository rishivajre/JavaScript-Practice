function sumOfDigits(num) {
  let sum = 0;

  while (num !== 0) {
    let lastDigit = num % 10;   // extract last digit
    sum = sum + lastDigit;      // add to sum
    num = Math.floor((num /= 10));    // remove last digit
  }

  return sum;
}

console.log(sumOfDigits(12345));
