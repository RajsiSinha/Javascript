 function myname(){
    console.log("w");
    console.log("o");
    console.log("r");
    console.log("l");
    console.log("d");
 }

//  myname()

//  function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
//  }

//  addTwoNumbers() // NaN
//  addTwoNumbers(1, 8) // 9
//  addTwoNumbers("1", 8) // 18
//  addTwoNumbers(1, "a") // 1a
//  addTwoNumbers(1, null) // 1

 function addTwoNumbers(number1, number2){
    let res = number1 + number2
    console.log("world");
    return res
    return number1 + number2
 }

 const res = addTwoNumbers(1, 8)
 // console.log(res);

 function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("please enter username");
    //     return
        
    // }
    if(!username){
        console.log("please enter username");
        return
    }
     return `${username} just logged in`
 }

 function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("please enter username");
    //     return
        
    // }
    if(!username){
        console.log("please enter username");
        return
    }
     return `${username} just logged in`
 }
 
 console.log(loginUserMessage());

 function calculateCartPrice(val1,val2, ...num1){
    return num1 
 }

 console.log(calculateCartPrice(200,400,600,800)); // [600, 800]

 const user = {
    username: "tia",
    price: 199
 }

 function handleObject(anyObject){
    console.log(`username is ${user.username} and price is ${user.price}`);

 }

 handleObject(user)

 // if user.price-> price is undefined
 
 handleObject({
    username: "sam",
    price: 200
 })

 const myNewArray = [200, 400, 600, 800]

 function returnSecondValue(getArray){
    return getArray[1]
 }

 console.log(returnSecondValue(myNewArray));
 console.log(returnSecondValue([1, 2, 3, 4, 5]));
 
 
 