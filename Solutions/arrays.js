var marks = Array(6)

//other way to create an array is
// let marks = [1, 2, 3, 4, 5, 6]

var marks = new Array(56,89,82,45,56,65,64,66,56,55)
console.log(marks[5])
var marks = [56,89,82,45,56,65,64,66,56,55]

console.log(marks.length)
console.log(marks)
console.log(marks.indexOf(82))
console.log(marks.indexOf(100))//if the element is not present in the array it will return -1
console.log(marks.includes(82))
console.log(marks.includes(100))
console.log(marks.push(100))//push will add the element at the end of the array
console.log('******************************')

console.log('After push', marks)
console.log('******************************')
console.log(marks.unshift(64))//unshift will add the element at the beginning of the array
//output: 11, as the length of the array is 11
console.log(marks)
console.log('******************************')
console.log(marks.pop())//pop will remove the last element from the array
console.log('******************************')

console.log(marks)
console.log(marks.shift())//shift will remove the first element from the array

console.log('******************************')
console.log(marks)//output: [ 89, 82, 45, 56, 65, 64, 66, 56, 55, 100 ]
console.log(marks.splice(2, 3))//splice will remove the elements from the array based on the index
console.log('******************************')
console.log(marks)//output: [ 56, 89, 64, 66, 56, 55 ]
console.log(marks.splice(2, 3, 100, 200, 300))//output: [ 82, 45, 56 ]
//splice will remove the elements from the array based on the index and add the elements
console.log('******************************')
console.log(marks)//output: [ 56, 89, 100, 200, 300, 64, 66, 56, 55 ]
console.log(marks.slice(2, 5))//output: [ 64 ]
//slice will return the elements from the array based on the index
console.log('******************************')
console.log(marks)
console.log(marks.join(' '))//join will join the elements of the array with the given separator
console.log('******************************')
console.log(marks)
console.log(marks.indexOf(100))
console.log(marks.indexOf(200))

console.log('******************************')
console.log(marks)
console.log(marks.includes(100))
console.log(marks.includes(200))

console.log('******************************')
console.log(marks)
console.log(marks.concat([100, 200, 300]))//concat will add the elements to the existing array
console.log('******************************')
console.log(marks)
console.log(marks.reverse())//reverse will reverse the elements of the array
console.log('******************************')
console.log(marks)
console.log(marks.sort())//sort will sort the elements of the array
console.log('******************************')
console.log(marks)//Output: [ 100, 100, 100, 100, 100, 100, 100, 200, 300 ]
console.log(marks.sort((a, b) => a - b))//sort will sort the elements of the array in ascending order, output: [ 100, 100, 100, 100, 100, 100, 100, 200, 300 ]
console.log('******************************')
console.log(marks)
console.log(marks.sort((a, b) => b - a))//sort will sort the elements of the array, output: [ 300, 200, 100, 100, 100, 100, 100, 100, 100, 100 ]
console.log('******************************')
console.log(marks)//Output: [ 300, 200, 100, 100, 100, 100, 100, 100, 100, 100 ]
console.log(marks.filter((value) => value < 200))//filter will filter the elements of the array based on the condition, output: [ 100, 100, 100, 100, 100, 100, 100, 100 ]
console.log('******************************')
console.log(marks.filter((value) => value > 200))//filter will filter the elements of the array based on the condition, output: [ 300 ]
console.log('******************************')
console.log(marks)
console.log(marks.map((value) => value * 2))//Output: [ 400, 300, 200, 100, 100, 100, 100, 100, 100, 100 ]
 //map will return the new array based on the condition
//to remove specific element from the array
console.log('******************************')
console.log(marks)
console.log(marks.filter((value) => value !== 100))//Output: [ 300, 200 ]
console.log(marks)//Output: [ 300, 200, 100, 100, 100, 100, 100, 100, 100, 100 ]
console.log(marks.pop())//Output: 100, pop will remove the last element from the array
console.log(marks.includes(550))//Output: false
console.log(marks.includes(100))//Output: true
console.log(marks.slice(2, 3))
console.log('******************************')
var sum = 0
console.log(marks)
for (let i=0; i<marks.length;i++){
    //console.log(marks[i])
    sum = sum + marks [i]//output: 1000
}//output: 1000
console.log(sum)//output: 1000
console.log('******************************')