// if statement

// const isUserLoggedIn = true
const temperature = 41

if(2 === "2" ){
    console.log("executed"); // not executed
}

if(temperature === 41 ){
    console.log("less than 50");
}

else{
console.log("temperature is greater than 50");
}
console.log("execute");

const score = 200

if(score > 100){
    const power = "fly" // local scope
    console.log(`user power: ${power}`);
}

// console.log(`user power: ${power}`); // error 

// short hand notation

const balance = 1000
// if (balance > 500) console.log("test"), console.log("test2"); // not recommended

if (balance > 500) {
    console.log("less than 500");
}
else if(balance < 750){
    console.log("less than 750");
}

else if(balance < 900){
    console.log("less than 900");
}

else {
    console.log("less than 1200");
}
    
const isUserLoggedIn = true
const debitCard = true 
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (isUserLoggedIn && debitCard && 2==3){
    console.log("allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}







