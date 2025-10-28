var a = 1;
let b = 2;
const c = 3;

console.log('---------------------------------------');

console.log(5 == "5");
console.log(5 === "5");
console.log('---------------------------------------');

console.log(typeof 69);
console.log([] instanceof Array);
console.log('---------------------------------------');

for(let i in ['a','b']) {console.log(i);} // 0,1 Iterates Keys: Object properties, array indices
for(let v of ["a","b"]) {console.log(v);} // a,b Iterates values: arrays, strings, iterables
console.log('---------------------------------------'); // for...in || for...of

{
    let p = 10; //Block scoped
    const t=30; //block scoped
    var v = 400; //Global scoped
    console.log(p,t);
} console.log(v);
console.log('---------------------------------------');

console.log(typeof null); //"object" (quirk!!)
console.log(typeof []); //"object"
// Data Types:
// 1. Primitives: Number, String, Boolean, Null, Undefined, Symbol, BigInt
// 2. Reference: Object, Array, Function, Date, etc.
console.log('---------------------------------------');

console.log("Declaration "+ add(9,9));
function add(a,b) {return a + b;} // Function: Declaration

let sub = function(a,b) {return a-b;};
console.log("Expression "+ sub(1000,5)); // Function: Expression

const prod = (a, b) => a * b; 
console.log("Arrow Func "+ prod(2,2)); // Arrow Function
console.log('-------------Object Functions----------------------');

// Object Functions : Array of Keys & Values retrieval
const user = {
    name: 'Rishi',
    age: 29,
    ID: 1099
};
const keys = Object.keys(user);
const val = Object.values(user);
const userObjArr = Object.entries(user);
console.log("Keys: "+keys+" & "+"Values: "+val+"\n");
console.log("Entries: "+userObjArr);
console.log('----------Object.assign(target, source)-------------------------');

const src = {
    a: 1,
    b: 2
};
const trgt = {
    c: 3
};
Object.assign(trgt, src);
console.log(trgt); 
Object.assign(src, trgt);
console.log(src);

console.log('-------------------------Callbacks------------------------------');
/**A callback is a function passed as an argument to another function, 
 * which is then invoked inside the outer function to complete some routine or action.
 * Callbacks are foundational for handling asynchronous operations, but can also be used in synchronous code. */

function greet(name, cb) {
    cb("Hello " + name);
}
greet("Rishi", msg => console.log(msg));

console.log('------------Synchronous Callback Example (Array methods)---------------');

const num = [1,2,3];
num.forEach(num => {
    console.log(num * 2);
})

console.log('------------Asynchronous Callback Example (setTimeout)-----------');

console.log('start');

function finish() {
    console.log('finish');
}

setTimeout(finish, 2000); // The 'finish' function is the callback.
console.log("waiting...");