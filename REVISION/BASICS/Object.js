let user = {
    name: "Alice",
    age: 30,

    //greet: function() { } // Old way of defining a method
    // Using ES6 shorthand method definition
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
let arr3 = [8, 7, 4, 5, 3, 2, 1];
// Accessing object properties
console.log(user.name); // Alice
console.log(user.age); // 30
console.log(user.greet()); // Hello, my name is Alice and I am 30 years old.
// Adding a new property
user.email = "rifh@gmaiil.com";
console.log(user.email); //



let person = {
    name : "Ramesh Aanda",
    age : 33,
    // Method to greet the person
    greet : function() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}
console.log(person.greet());
// Adding a new property
person.email = "RV@gmail.com";
console.log(person.email); //

// Accessing properties using bracket notation
console.log(person["name"]); // Ramesh Aanda
console.log(person["age"]); // 33
// Updating a property
person.age = 34;
console.log(person.age); // 34
// Deleting a property
delete person.email;
console.log(person.email); // undefined (property deleted)
// Checking if a property exists
console.log("name" in person); // true
console.log("email" in person); // false (property deleted)

console.log("------------------------")
// Iterating over object properties
for (let key in person) {
    console.log(`${key}: ${person[key]}`); // Logs each property and its value
}
console.log("Added email: " + user.email); //
// Using Object.keys to get an array of property names

//adding a new function to the object
user.getDetails = function() {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
}

person.getDetails = function() {
    return `Name: ${this.name}, Age: ${this.age}, Email: ${this.email}`;
}
console.log(user.getDetails()); // Name: Alice, Age: 30, Email: 
console.log(person.getDetails()); // Name: Ramesh Aanda, Age: 34, Email: undefined
