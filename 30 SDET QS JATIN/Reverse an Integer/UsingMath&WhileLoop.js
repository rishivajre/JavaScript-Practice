// Using Math and While Loop
function reverseInteger(num) {
  let result = 0;
  const sign = num < 0 ? -1 : 1;
  num = Math.abs(num);

  while (num !== 0) {
    
    if (result > Number.MAX_SAFE_INTEGER/10) return 0;

    let lastDigit = num % 10;
    result = result * 10 + lastDigit;
    num = Math.floor(num / 10);
  }

  return result * sign;
}

console.log(reverseInteger(12344));
