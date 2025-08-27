function reverseStringLoop(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }

  return reversed;
}

console.log(reverseStringLoop("Hellow"));
