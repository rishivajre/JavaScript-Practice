// Approach 1: Basic Iteration
function isPrime(num) {
    if (num <= 1) return false;
    if (num == 2) return true;
    for (let i=2; i<num; i++) {
        if (num % i === 0){
            return false; 
        }
    }
    return true;
}

console.log(isPrime(21));
console.log(isPrime(23));

//Approach 2: Optimized Iteration (Upto sqrt of num)
function isPrime(num) {
    if (num<=1) return false;
    if (num===2) return true;
    if (num%2 === 0) return false;
    for (let i=3; i<Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false; // Not a prime Number
        }
    }
    return true; // Prime Number
}

console.log(isPrime(21));
console.log(isPrime(23));
console.log('----------');

//Approach 3: Using functional Array.from programming
function isPrimeFunctional(num) {
    if (num<=1) return false;
    return !Array.from({length: Math.floor(Math.sqrt(num))-1}, (_,i) => i +2)
        .some(i => num % i === 0);
}

console.log("Functional check: ");

[56,23,20,21,19].forEach(num => {
    if(isPrimeFunctional(num)) {
        console.log(`${num} is a Prime Number!`)
    } else {
        console.log(`${num} is not a Prime Number..`) // 
    }
});