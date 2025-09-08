// const userEmail = "user@ai"
// if (userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("user email not found");
// }

// note : if userEmail = [] -> true -> got user email
//        if userEmail = "" -> false -> user email not found

// falsy values 
// false, 0, -0, BigInt, 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){} -> empty 

const userEmail = []
if(userEmail.length === 0){
    console.log("array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}

// console
// false == 0 -> true
// false == '' -> true
// 0 == '' -> true

// Nullish Coalescing Operator (??): null undefined

// let val1 ;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 10
// val1 = null ?? 10 ?? 15
// console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80");




