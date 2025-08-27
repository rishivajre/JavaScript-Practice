function factorialUsingLoop(num) {
    let result = 1n; // BigInteger

    for (let i=1n; i<=BigInt(num); i++) {
        result = result * i;
    }

    return result;
}

console.log(factorialUsingLoop(5).toString());