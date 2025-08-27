function reverseInteger(num) {
  const sign = num < 0 ? -1 : 1;

  const reversedString = Math.abs(num).toString().split("").reverse().join("");
  const reversedNum = parseInt(reversedString, 10);
  
  return reversedNum * sign;
}

console.log(reverseInteger(678));