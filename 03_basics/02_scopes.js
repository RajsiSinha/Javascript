//let a = 10
const b = 30
var c = 40

if(true){
    //let a = 20
    const b = 60
    var c = 80
    
}

// console.log(a); // 10
// console.log(b); // 30
// console.log(c); // 80

let a = 100
if(true){
    let a = 10
    const b = 20
    // console.log("innr:", a); // 10
}
// console.log(a); // 100

function one(){
    const username = "tia"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    // console.log(website); // error

    two()
    
}
// one()

if(true) {
     const username = "tia"
     if (username === "tia") {
        const website = "youtube"
        // console.log(username + website);
        
     }
     // console.log(website); // error
     
}
// console.log(username); // error


// +++++++++++++++++++++ interesting ++++++++++++++++++++++

console.log(addone(5)); // 6
function addone(num){
    return num + 1
}

// addTwo(5) // error
const addTwo = function(num){
    return num + 2
}









