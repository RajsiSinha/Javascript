const accountId = 15565 //can't change
let accountEmail = "abc@google.com" //withscope
var accountPassword = "54321" //withoutscope
accountCity = "Jaipur" 
let accountState; //undefined output

//accountId = 2 //not allowed

accountEmail = "def@google.com"
accountPassword = "12345"
accountCity = "Noida"

console.log(accountId);

/* 
prefer not to use var because of issue in functional scope and block scope"
*/ 

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
