// primitive

// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const temp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

//const bigNumber = 36457584985765784748n

// Reference or Non primitive

// Arrays, Objects, Functions

const places = ["delhi", "bengaluru", "chennai"];
let myObj = {
    name: "Kriti",
    age: 22,
}

const myFunction = function() {
    console.log("hello world");
}

console.log(typeof bigNumber); // undefined
console.log(typeof score); // number
console.log(typeof scoreValue); // number
console.log(typeof isLoggedIn); // boolean
console.log(typeof temp); // object
console.log(typeof id); // symbol
console.log(typeof anotherId); // symbol
console.log(typeof places); // object
console.log(typeof myFunction); // function


// +++++++++++++++++++++++++++++++++++++++++++++++

// Stack(primitive), Heap(Non-primitive)

let myName = "Rajsi"

let anotherName = myName
anotherName = "Rajsi Sinha"

console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ibl"
}

let userTwo = userOne

userTwo.email = "usertwo@google.com"

console.log(userOne.email);
console.log(userTwo.email);











