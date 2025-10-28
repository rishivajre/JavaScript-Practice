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
console.log('---------------------------------------');