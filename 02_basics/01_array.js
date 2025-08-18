const myArray = [0, 1, 2, 3, 4, 5]
const fruits = ["apple", "mango", "orange", "banana"]

const myArray2 = new Array(1,2,3,4)
console.log(myArray[0]);
console.log(fruits[1]);

// Array methods

myArray.push(6)
myArray.pop()

myArray.unshift(9)
myArray.shift()

console.log(myArray.includes(9)); // false
console.log(myArray.indexOf(9));  // -1

const newArray = myArray.join() 
console.log(myArray);
console.log(typeof newArray); // string

// slice, splice

console.log("A", myArray); // 0,1,2,3,4,5

const newArray1 = myArray.slice(1,3)
console.log(newArray1); // 1,2
console.log("B", myArray); // 0,1,2,3,4,5

const newArray2 = myArray.splice(1,3) // removes all the given range elements from original array 
console.log("C", myArray); // 0,4,5
console.log(newArray2); // 1,2,3







