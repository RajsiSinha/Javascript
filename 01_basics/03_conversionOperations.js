let score = "33"

console.log(typeof score);
console.log(typeof (score)); //as a method

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

let score2 = "33abc"
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2);
console.log(valueInNumber2);

let score3 = null
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3);
console.log(valueInNumber3);

let score4 = undefined
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4);
console.log(valueInNumber4);

let score5 = true
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5);
console.log(valueInNumber5);

// "33" -> 33
// "33abc" -> NaN
// null -> 0
// undefined -> NaN
// true -> 1; false -> 0

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

let isLoggedIn2 = ""
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);

let isLoggedIn3 = "xyz"
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3);

// 1 -> true; 0 -> false
// "" -> false
// "xyz" -> true

let anyNumber = 33
let stringNumber = String(anyNumber)
console.log(stringNumber);
console.log(typeof stringNumber);





