let score = "33"

console.log(typeof score); // string
console.log(typeof (score)); //as a method; output: string

let valueInNumber = Number(score)
console.log(typeof valueInNumber); // number

let score2 = "33abc"
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2); // number
console.log(valueInNumber2); // NaN -> not a number

let score3 = null
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3); // number
console.log(valueInNumber3); // 0

let score4 = undefined
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4); // number
console.log(valueInNumber4); // NaN

let score5 = true
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5); // number
console.log(valueInNumber5); // 1

// "33" -> 33
// "33abc" -> NaN
// null -> 0
// undefined -> NaN
// true -> 1; false -> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn); // boolean
console.log(booleanIsLoggedIn); // true

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2); // false

let isLoggedIn3 = "xyz"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3); // true

// 1 -> true; 0 -> false
// "" -> false
// "xyz" -> true

let anyNumber = 33
let stringNumber = String(anyNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string

//*******************  Operations **************

let value = 3
let negativeValue = -value
console.log(negativeValue); // -3

// +, -, *, /, %, ** -> basic operations

let str1 = "hello"
let str2 = "world"
let str3 = str1 + str2
console.log(str3); // helloworld

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
console.log(true); // true
console.log(+true); // 1
//console.log(true+); // error
console.log(+""); // 0

let num1, num2, num3 
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++;
console.log(gameCounter); //101
















