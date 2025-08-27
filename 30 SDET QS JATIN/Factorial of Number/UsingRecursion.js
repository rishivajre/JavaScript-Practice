function factorialUsingRecursion(num) {
    if (num < 0) throw new Error("Factorial not defined for Negative numbers!!");
    if (num === 0 || num === 1) return 1n;
    
    return BigInt(num) * factorialUsingRecursion(num-1);
}

console.log(factorialUsingRecursion(5).toString());