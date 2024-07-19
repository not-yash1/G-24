// Execution context - Global and Function
// Lexical Environment

// Environment Record: Stores all the variable and function declarations.
// Outer Environment Reference: Points to the lexical environment of the parent scope.





// var a = 10;

// function outerFunction() {
//     var b = 20;
    
//     function innerFunction() {
//         var c = 30;
//         a = 15;
//         console.log(a); 
//         console.log(b); 
//         console.log(c); 
//     }
//     console.log(a);
    
//     innerFunction();
// }

// console.log("Last a1: ", a);

// outerFunction();
// console.log("Last a2: ", a);




// Closures - A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.



function makeCounter() {
    let count = 0;
    console.log(count);
    return function() {
        count++;
        console.log(count);
    };
}

const counter1 = makeCounter();
const counter2 = makeCounter();
counter2(); 
counter1();
counter1();
counter2(); 
counter2(); 






