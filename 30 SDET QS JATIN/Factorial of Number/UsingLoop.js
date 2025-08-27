function factorialUsingLoop(num) {
    let result = 1n; // BigInteger value
    for (let i =1n; i<=BigInt(num); i++) {
        result *= i;
    }
    return result;
}

console.log(factorialUsingLoop(5).toString());