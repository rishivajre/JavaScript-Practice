let user = {
    name: "Raaj",
    age: 34,

    // Using ES6 shorthand method definition
    greet() {
        return `Hi my name is ${this.name} and I am ${this.age} years old.`;
    }
}

console.log(user.name);
console.log(user.greet());

