function fibonacci(n) {
    let a = 0; b = 1; series = [];

    for (let i = 0; i<n; i++) {
        series.push(a); // push value of 'a' into series[]
        [a, b] = [b, a + b]; //Update the value of 'a' each time
    }

    return series;
}

console.log(fibonacci(15).toString());