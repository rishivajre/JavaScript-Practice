var price = [200, 300, 400, 500, 600, 700, 800, 900, 1000]
var sum = 0
for(let i=0;i<price.length;i++){
    console.log(price[i])
    sum = sum + price[i]
}
console.log(sum)
console.log('******************************')
//How to use Reduce:
//reduce will return the single value based on the condition
let total = price.reduce((sum, totalValue)=>sum + totalValue, 0)
console.log(total)//output: 5400
console.log('******************************')
let max = price.reduce((max, value)=>value > max ? value : max, 0)
console.log(max)//output: 1000
//lets solve the same problem using for loop
console.log('***********Max Price using for loop*******')
let maxPrice = 0
for (let i=0;i<price.length;i++){
    if(price[i]>maxPrice){
        maxPrice = price[i]
    }
}
console.log(maxPrice)//output: 1000
console.log('***********Using reduce method************')
let min = price.reduce((min, value)=>value < min ? value : min, price[0])
console.log(min)//output: 200
//lets solve the same problem using for loop
console.log('***********Min Price using for loop*******')
let minPrice = price[0]
for (let i=0; i<price.length;i++){
    if(price[i]<minPrice){
        minPrice = price[i]
    }
}
console.log(minPrice)//output: 200
console.log('***************finding even scores Using for loop***************')

var scores = [56, 89, 100, 200, 300, 64, 66, 56, 55]
var evenScores = []
for(let j=0;j<scores.length;j++){
    if(scores[j]%2==0){                 
        evenScores.push(scores[j])
    }
}
console.log(evenScores)
//OR use filter which is used to filter
//the elements of the array based on the condition
console.log('***************Using Filter***************')
var evenValues = scores.filter(evenMarks=>evenMarks%2==0)
console.log(evenValues)
console.log('***************Using Map***************')
//map will return the new array based on the condition
console.log(evenValues)
var doubleScores = evenValues.map(value=>value*2)
console.log(doubleScores)//output: [ 112, 178, 200, 400, 600, 128, 132, 112, 110 ]
doubleScores.forEach(value=>console.log(value))
doubleScores.forEach((value, ppp)=>console.log(ppp, value))
console.log('***************Using forEach***************')
var totalMarks = 0
scores.forEach(value=>totalMarks = totalMarks + value)
console.log(totalMarks)
console.log('******************************')
let sumDoubleScroes = doubleScores.reduce((sum,val)=>sum+val,0)//output: 1962
console.log(sumDoubleScroes)//output: 1962

//reduce, filter, map, forEach are the methods of array
//reduce will return the single value based on the condition
//filter will return the array based on the condition
//map will return the new array based on the condition
//forEach will iterate the array
//Now lets do chaining of reduce, filter, map, forEach
console.log('***************Chaining of reduce, filter, map, forEach***************')
var scores = [56, 89, 100, 200, 300, 64, 66, 56, 55]
var totalScore = scores.filter(value=>value%2==0).map(value=>value*2).reduce((sum, value)=>sum+value,0)
console.log(totalScore)//output: 1962

//this is also known as prototype chaining
//this is also known as method chaining
//this is also known as function chaining
//this is also known as chaining
//this is also known as cascading
//this is also known as fluent interface design pattern
//Why we need to use chaining?
//Chaining is used to avoid the intermediate variables
//Chaining is used to write the code in a single line
//Chaining is used to write the code in a readable format
//Chaining is used to write the code in a maintainable format
//Chaining is used to write the code in a clean format