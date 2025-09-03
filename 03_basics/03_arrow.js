const user = {
    username: "tia",
    price: 99,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this); // this refers current context
        
    }
    
}
//user.welcomeMessage() // tia
//user.username = "sam"
//user.welcomeMessage() // sam

//console.log(this); // {} -> empty object
 
// note: in windows browser inspect console.log(this) -> window object

// function chai(){
// let username = "tia"
// console.log(this); 
// console.log(this.username); // undefined
  
// }
// chai()

// arrow function
// explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(1,3));

// implicit return
// const addTwo = (num1, num2) => (num1 + num2)

// console.log(addTwo(1,3));

// with objects
const addTwo = (num1, num2) => ({username: "tia"})

console.log(addTwo(1,3));


















