// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log(`DB CONNECTED`);
    
// }
// chai()

// named iife
(function chai(){
    console.log(`DB CONNECTED`);
    
}) ();

// unnamed IIFE with parameters

((name) =>{
    console.log(`DB CONNECTED ${name}`);
})('tia'); // ; is important otherwise it gives error



