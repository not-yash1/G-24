// First Class Functions - Functions are treated like any other variable. You can assign them to variables, pass them as arguments to other functions, and return them from functions

// 1. Assigning Functions to Variables:

// const sayHello = function() {
//     console.log("Hello!");
// };

// sayHello();


// const square = function(x) {
//     return x * x;
// };

// console.log(square(4)); // Outputs: 16



// 2. Passing Functions as Arguments:

// function sayHello() {
//     console.log("Hi!!!")
//     return 3
// }
// function greet(sing) {
//     sing += 2;
//     console.log("Hello!", sing)
// }

// greet(sayHello()); // Outputs: Hello!




// function performOperation(a, b, operation) {
//     return operation(a);
// }

// const add = function(x, y) {
//     console.log(x, " + ", y);
//     return x + y;
// };

// console.log(performOperation(5, 3, add));




// 3. Returning Functions from Other Functions:

// function createGreeting(greeting) {
//     return function(name) {
//         console.log(greeting + ", " + name + "!");
//     };
// }

// const sayHi = createGreeting("Hi");
// sayHi(); // Outputs: Hi, Alice!


// function multiplier(factor) {
//     return function(x) {
//         return x * factor;
//     };
// }

// const double = multiplier(2);
// console.log(double(5)); // Outputs: 10




// 4. Storing Functions in Data Structures:
// const arr = [12, 14];
// arr[0];
// arr[1];

// const functionsArray = [
//     function() { console.log("First function"); },
//     function() { console.log("Second function"); }
// ];

// functionsArray[0]; // Outputs: First function
// functionsArray[1](); // Outputs: Second function



const operations = {
    add: function(a, b) { return a + b; },
    subtract: function(a, b) { 
        console.log(a, " - ", b); 
    }
};

console.log(operations.add(5, 2)); // Outputs: 7
operations.subtract(5); // Outputs: 3


