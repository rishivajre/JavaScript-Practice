const a = [1];
const b = a;
b.push(2);
console.log(a, b);
console.log('-------------------');

//Here you have to explain what is context and how it works. 
// Also based on the below code you should tell what each properties value is
const obj = {
    a: this,
    b: function(){
      return this;
    },
    c: ()=>{
      return this;
    },
    d(){
      return this;
    }, 
    e: function(){
      return this.a;
    }
  }
  
  console.log(obj.a, obj.b(), obj.c(), obj.d(), obj.e());
  // Output:
  // obj.a - global object
  // obj.b() - obj
  // obj.c() - global object
  // obj.d() - obj
  // obj.e() - global object

  console.log('-------------------');
  console.log(obj.a === obj.b(), obj.a === obj.c(), obj.a === obj.d(), obj.a === obj.e());
  console.log('-------------------');
  console.log(obj.b() === obj.c(), obj.b() === obj.d(), obj.b() === obj.e());
  console.log('-------------------');
  console.log(obj.c() === obj.d(), obj.c() === obj.e());
  console.log('-------------------');
  console.log(obj.d() === obj.e());
  console.log('-------------------');
  console.log(obj.e() === obj.a);

  console.log('-------------------');

  var x = 1 // global scope
  if (true){
    let y =2 // block scope
    const z=3 // block scope
    console.log(x,y,z)
  }
  console.log(x)
  console.log('-------------------');

  console.log(0 == false)
  console.log(0 === false)

  console.log('-------------------');

  console.log(typeof x)
  console.log(typeof null)
  console.log(typeof undefined)
  console.log(typeof NaN)
  console.log(typeof Infinity)
  console.log(typeof -Infinity)
  console.log(typeof 1n)
  console.log(typeof '1')
  //where instanceof is used to check the type of an object at the runtime
  console.log([] instanceof Array) // true, because [] is an instance of Array
  console.log([] instanceof Object) // true, because [] is an instance of Object
  console.log([] instanceof Function) // false, because [] is not an instance of Function
  console.log({} instanceof Object) // true, because {} is an instance of Object
  console.log({} instanceof Function) // false, because {} is not an instance of Function
  console.log({} instanceof Array) // false, because {} is not an instance of Array
  console.log('-------------------');

  // NaN is a number and typeof NaN is number, lets discuss about it
  console.log('-------------------');

  console.log(1 + '1') // 11, because + operator is overloaded, it is used for addition and concatenation
  console.log(1 - '1')  // 0, because - operator is not overloaded, it is used only for subtraction
  console.log(1 * '1') // 1, because * operator is not overloaded, it is used only for multiplication
  console.log(1 / '1') // 1, because / operator is not overloaded, it is used only for division
  console.log(1 % '1') // 0, because % operator is not overloaded, it is used only for modulus
  console.log(1 + '1' + 1)  // 111
  console.log(1 + 1 + '1') // 21
  console.log('1' + 1 + 1) // 111, because + operator is overloaded, it is used for addition and concatenation
  console.log('1' + 1 + '1') // 111, because + operator is overloaded, it is used for addition and concatenation
  console.log(1 + '1' + '1')  // 111
  console.log('1' + 1 + '1') // 111, because + operator is overloaded, it is used for addition and concatenation

  console.log('-------------------');

  // Explain the output of the below code
  console.log(1 + 1 + '1') // 21
  console.log(1 + '1' + 1) // 111
  console.log('1' + 1 + 1) // 111, how it is different from the above line
  console.log('1' + 1 + '1') // 111
  console.log('-------------------');

  //NaN is a number and typeof NaN is number, lets discuss about it,
  //what is NaN: NaN is a property of the global object, i.e. it is a variable in global scope.
  // The initial value of NaN is Not-A-Number — the same as the value of Number.NaN. 
  // In modern browsers, NaN is a non-configurable, non-writable property. Even when this is not the case, avoid overriding it.
   console.log(NaN === NaN) // false, because NaN is not equal to NaN
    console.log(NaN == NaN) // false, because NaN is not equal to NaN
    console.log(NaN === undefined) // false, because NaN is not equal to undefined
    console.log(NaN == undefined) // false, because NaN is not equal to undefined
    console.log(NaN === null) // false, because NaN is not equal to null
    console.log(NaN == null) // false, because NaN is not equal to null
    console.log(NaN === '') // false, because NaN is not equal to ''
    console.log(NaN == '') // false, because NaN is not equal to ''
    console.log(NaN === 0) // false, because NaN is not equal to 0
    console.log(NaN == 0) // false, because NaN is not equal to 0
    console.log(NaN === '0') // false, because NaN is not equal to '0'
    console.log(NaN == '0') // false, because NaN is not equal to '0'
    console.log(NaN === false) // false, because NaN is not equal to false
    console.log(NaN == false) // false, because NaN is not equal to false
    console.log(NaN === true) // false, because NaN is not equal to true
    console.log(NaN == true) // false, because NaN is not equal to true
    console.log(NaN === Infinity) // false, because NaN is not equal to Infinity

    console.log('-------------------');
   
    
//for in & for of
const arr = [2,3,4,57,5]
for (let i in arr){
  console.log(i) // 0, 1, 2, 3, 4 because i is the index of the array
}
// for of is used to iterate over the values of an iterable object
for (let i of arr){
  console.log(i) // 2, 3, 4, 57, 5 because i is the value of the array
}
console.log('-------------------');
const obj1 = {a: 1, b: 2, c:8};
for (let i in obj1){
  console.log(i) // a, b, c because i is the key of the object
}
const arr1 = [4.5,6,7];
for (let p of arr1){
  console.log(p) // error, because obj1 is not an iterable object
}

console.log('-------------------');

// lets see the use of block statements
{
  let g = 1;
  console.log(g) // 1
}
//console.log(g) // error, because g is not defined
//more examples
{
  let h = 1;
  console.log(h) // 1
}
{
  let h = 4;
}
console.log(typeof h) // Undefined, because h is not defined outside the block
console.log('-------------------');
//Block scope aur function scope mein kya fark hai?
//Block scope: A block scope is the area within if, 
// switch conditions or for and while loops.
// Generally speaking, whenever you see {curly brackets}, it is a block.
// Anything within these brackets is a block.
// Function scope: A function scope is the space within a function.
// It is created when a function starts and destroyed when the function returns.
// Anything within a function is within the function scope.
// Example:
// Block scope
{
  let x = 2;
  console.log(x) // 2
}
//console.log(x) // error, because x is not defined
// Function scope
function myFunction(){
  var y = 2;
  console.log(y) // 2
}
myFunction();
//console.log(y) // error, because y is not defined

{
  var z = 2;
  console.log(z) // 2
}
console.log(z) // 2
console.log('-------------------');


//What are promises in Jscript: 
// 1. Creating a new Promise
let promise = new Promise((resolve, reject) => {
  let success = true;

  if (success){
    resolve('operation was successful')
  }else{
    reject('Operation Failed')
  }
})
//2. Handling promise
promise.then((message)=> {
  console.log(message);
}).catch((error)=>{
  console.log(error)
})

const p = new Promise (r => setTimeout(()=> 
  r('Done'), 2000));
p.then(console.log);

async function fn(){
  console.log(await p)
}

fn();

console.log('-----------------')
function delay(ms){
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function asyncFunction(){
  console.log('Start');
  await delay(2000);
  console.log('End')
}

asyncFunction();

console.log('----------------')
function Person (name, age){
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function(){
  console.log(`Hello, my name is ${this.name}
     and I am ${this.age} years old.`);
}

function Employee(name, age, jobTitle){
  Person.call(this, name, age)
  this.jobTitle = jobTitle;
}
// Set the prototype of Employee to be 
// an instance of Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.work = function (){
  console.log(`${this.name} is working as a ${this.jobTitle}`)
};

const emp = new Employee("Alex", 40, 'Software Engineer');

emp.greet();
emp.work();

