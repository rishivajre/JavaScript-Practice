// Function Declaration
function greet(name) {
    return "Hello " + name;
}

// Function Expression
const add = function(a, b){
    return a + b;
}

// Arrow function
const square = (x) => x * x;

console.log(greet+add+square); // This will log the function definitions, not their results

// Example usage of the functions
// Note: To see the output of the functions, you need to call them with arguments
console.log(greet("Ramesh")); // Outputs: Hello Alice
console.log(add(4, 4)); // Outputs: 8
console.log(square(9)); // Outputs: 16