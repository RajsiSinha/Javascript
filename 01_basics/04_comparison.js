// >, <, >=, <=, ==, != -> basic comparisons

console.log("3" > 2); // true
console.log("03" > 2); // true

// note: avoid these types of conversions
// == works differently and > , < works differently
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true

console.log(undefined == 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0); // false

// strict check
// ===

console.log("3" === 3);  // check datatype // output: false
