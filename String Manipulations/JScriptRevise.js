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
console.log('---------------------------------------');

