function isPrimeBasic (num) {
    if(typeof num !== 'number' || !Number.isInteger(num)){
        console.log('Input must be an Integer');
        return false;
    }
    if(num <= 1) return false;

    for (let i=2; i<=num; i++){
        if(num%i == 0)
            return false;
    }
    return true;
}
console.log(isPrimeBasic(8));
console.log(isPrimeBasic(5));
console.log('----');
console.log(isPrimeBasic('5'));
console.log('-----isPrimeOptimized-----');

function isPrimeOptimized(num){
    if (num <= 1) return false;
    if (num === 2) return false;
    if (num % 2 === 0) return false;

    for (let i=3; i <= Math.sqrt(num); i += 2){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrimeOptimized(2));  // True
console.log(isPrimeOptimized(4));  // False
console.log(isPrimeOptimized(17)); // True
console.log(isPrimeOptimized(25)); // False
console.log(isPrimeOptimized(49)); // True

console.log('-----isPrimeRecursive-----');

function isPrimeRecursive(num, divisor = 2){
    if(num <=1) return false;
    if(divisor > Math.sqrt(num)) return true;
    if (num % divisor === 0) return false;

    return isPrimeRecursive(num, divisor + 1);
}

console.log(isPrimeRecursive(2));  // True
console.log(isPrimeRecursive(4));  // False
console.log(isPrimeRecursive(17)); // True
console.log(isPrimeRecursive(66)); // False
console.log(isPrimeRecursive(2147)); // True
