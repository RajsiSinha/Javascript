// dates

let myDate = new Date()
console.log(myDate); // 2025-08-18T10:07:06.512Z
console.log(myDate.toString()); // Mon Aug 18 2025 10:07:06 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toJSON()); // 2025-08-18T10:07:06.512Z
console.log(myDate.toDateString()); // Mon Aug 18 2025
console.log(myDate.toLocaleString()); // 8/18/2025, 10:07:06 AM
console.log(myDate.toLocaleDateString()); // 8/18/2025
console.log(myDate.toLocaleTimeString()); // 10:07:06 AM
console.log(typeof myDate); // object

let myCreatedDate = new Date(2023, 0, 23) // month starts from 0 in javascript
console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3) 
console.log(myCreatedDate1.toLocaleString()); // 1/23/2023, 5:03:00 AM

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString()); // 1/14/2023, 12:00:00 AM

let myTime = Date.now() // in milliseconds
console.log(myTime); // 1755512663671
console.log(myCreatedDate3.getTime()); // 1673654400000

console.log(Math.floor(Date.now()/1000)); // in seconds // 1755512663 

let newDate = new Date()
console.log(newDate.getMonth() + 1);  // does to get exact month // 8 
console.log(newDate.getDay()); // 1

newDate.toLocaleString('default', { // object
    weekday: "long"
})




















