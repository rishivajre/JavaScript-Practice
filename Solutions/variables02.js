console.log('Hello World')

let a=4
console.log(a)
console.log(typeof a)

let b= 234.34
console.log(typeof b)

var c = a+b
console.log(c)

var c= 'RIshi'
console.log(typeof c)

let required = true
console.log(typeof required)
console.log('-----------')
console.log(!required)
console.log('*******************************************')
// lets see an example of null and undefined
let d = null
console.log(typeof d)

let e
console.log(typeof e)
console.log('*******************************************')
// lets see an example of object
let f = {number1: 55, number2: 5.5, name: 'Rishi', isRequired: true} 
/*explaination: object is a collection of key value pairs and key is always a string, value can be any data type, 
object literal is defined by curly braces*/
console.log(f)
//how to concatenate string and all result of variable in console.log in short using + operator
console.log('number1: ' + f.number1 + ', number2: ' + f.number2 + ', name: ' + f.name + ', isRequired: ' + f.isRequired)
//how to concatenate string and all result of variable in console.log in short using template literals
console.log(`number1: ${f.number1}, number2: ${f.number2}, name: ${f.name}, isRequired: ${f.isRequired}`)


console.log('*******************************************')
// lets see an example of array
let g = [55,5.5,'Rishi',true] 
console.log(g)
console.log('*******************************************')
//lets see the use of assignment operators
let h = 5
console.log(h)

h += 5
console.log(h)

h -= 5
console.log(h)
console.log('*******************************************')
h *= 5
console.log(h)

h /= 5
console.log(h)

h %= 5
console.log(h)
console.log('*******************************************')
//lets see the use of comparison operators
let i = 5
let j = 10
let k = 5
console.log(i==j)//because i is not, equal to j, output: false, == is used to check the value of the variable
console.log(i==k)//because i is equal to k, output: true, == is used to check the value of the variable & here value is same
console.log(i===j)//   === is used to check the value and type of the variable, & here value is same but type is different
console.log(i===k)//  === is used to check the value and type of the variable, output: true, because value and type is same
console.log(i!=j)// != is used to check the value of the variable, output: true, because i is not equal to j
console.log(i!=k)// != is used to check the value of the variable, output: false, because i is equal to k
console.log(i!==j)  // !== is used to check the value and type of the variable, output: true, because value and type is different
console.log(i!==k)// !== is used to check the value and type of the variable, output: false, because value and type is same
console.log(i>j)//output: false, because i is not greater than j
console.log(i<j)//output: true, because i is less than j
console.log(i<k)    //output: false, because i is not less than k
console.log(i>k)    //output: false, because i is not greater than k
console.log(i>=j)   //output: false, because i is not greater than or equal to j
console.log(i<=k)   //output: true, because i is less than or equal to k
console.log('*******************************************')
// lets see the use of logical operators
let l = true
let m = false
console.log(l && m)//output: false, because both l and m are not true & && is used to check both conditions are true
console.log(l || m)//output: true, because l is true & || is used to check if any one condition is true
console.log(!l)//output: false, because l is true & ! is used to check the opposite of the condition
console.log(!m)//output: true, because m is false & ! is used to check the opposite of the condition
console.log('*******************************************')
// lets see the use of bitwise operators
let n = 5
let o = 10
console.log(n & o)//output: 0, because 5 in binary is 101 and 10 in binary is 1010, so 101 & 1010 is 0, here '&' is used to check the common bits and return 1 if both bits are 1
console.log(n | o)  //output: 15, because 5 in binary is 101 and 10 in binary is 1010, so 101 | 1010 is 1111, here '|' is used to check the common bits while keeping the bits which are different
console.log(n ^ o)//output: 15, because 5 in binary is 101 and 10 in binary is 1010, so 101 ^ 1010 is 1111, here '^' is used to check the common bits where bits are different
console.log(~n)
console.log(n << 1)
console.log(n >> 1)
console.log(n >>> 1)
console.log('*******************************************')
// lets see the use of instanceof operator
// instanceof operator is used to check the type of an object at run time
console.log('*******************************************')
let p = new Date()
console.log(p instanceof Date) //output: true
//because p is an instance of Date and Date is a constructor function, so instanceof operator will return true
console.log(p instanceof Object) //output: true
console.log('*******************************************')
//more examples
let q = 5
let r = 10
let s = 5
console.log(q==r)
console.log(q==s)
console.log(q===r)
console.log(q===s)
console.log(q!=r)
console.log(q!=s)
console.log(q!==r)
console.log(q!==s)
console.log(q>r)
console.log(q<r)
console.log(q>=r)
console.log(q<=s)
console.log('*******************************************')


// lets see the use of ternary operator
let t = 5
let u = 10
let v = t>u ? 't is greater than u' : 't is less than u'//'?' is used to check the condition, if the condition is true, the value before ':' will be assigned to v
console.log(v)//output: t is less than u
//here t is not greater than u, so the condition is false, so the value after ':' will be assigned to v
console.log(v)//output: t is less than u
console.log('*******************************************')
// lets see the use of instanceof operator but this time with array
let w = [5, 10, 15, 20]
// here w is an instance of Array and Array is a constructor function, so instanceof operator will return true
console.log(w instanceof Array) //output: true
//whereas if we use instanceof operator with object, it will return false
console.log(w instanceof Object) //output: true
//because Array is a constructor function and Object is a constructor function, so Array is a child of Object
//why instanceof operator is used with constructor functions, because constructor functions are used to create objects
//and instanceof operator is used to check the type of an object at run time, so it is used with constructor functions
//to check the type of an object created by constructor function, so that we can use the object in our code accordingly
//for example, if we have an object of type Array, we can use array methods on it, if we have an object of type Object
//we can use object methods on it, so instanceof operator is used to check the type of an object at run time, so that we can use
//the object in our code accordingly.

console.log('*******************************************')
//lets see an example of instanceof operator with constructor function
function Person(name, age){
    this.name = name
    this.age = age
}
let x = new Person('Rishi', 30)
console.log(x instanceof Person) //output: true
console.log(x instanceof Object) //output: true
//lets see an example of instanceof operator with object
let y = {name: 'Rishi', age: 30}
console.log(y instanceof Person) //output: false
console.log(y instanceof Object) //output: true
//lets see an example of instanceof operator with array
let z = [5, 10, 15, 20]
console.log(z instanceof Person) //output: false
console.log(z instanceof Object) //output: true
console.log(z instanceof Array) //output: true

console.log('*******************************************')
//lets see the use of in operator
let obj = {name: 'Rishi', age: 30}  //obj is an object
console.log('name' in obj) //output: true
console.log('age' in obj) //output:

