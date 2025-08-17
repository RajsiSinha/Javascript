const score = 200
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(balance.toString().length);
console.log(balance.toFixed(2)); // for precision value

const otherNumber = 343.1804
console.log(otherNumber.toPrecision(4)); // 343.2

const hundreds = 1000000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++++++++ Maths ++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.5));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.min(2, 5, 8, 4));
console.log(Math.max(2, 5, 8, 4));

console.log(Math.random()); // returns float number between 0 and 1 but never 1
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random()* (max - min + 1 )) + min);
















