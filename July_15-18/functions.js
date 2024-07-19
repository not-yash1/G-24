// Type of functions :

// 1. Function Declarations
// 2. Function Expressions
// 3. Arrow Functions
// 4. Anonymous Functions
// 5. Named Functions
// 6. Immediately Invoked Function Expressions (IIFEs)
// 7. Constructor Functions
// 8. Generator Functions
// 9. Async Functions
// 10. Methods (Object Methods)

// 1. Function Declarations

// function greet() {
//     console.log("Hello, world!");
// }

// greet(); // Outputs: Hello, world!



// 2. Function Expressions

// const greet = function() {
//     console.log("Hello, world!");
// };

// greet(); // Outputs: Hello, world!


// 3. Arrow Functions

// const greet = () => {
//     console.log("Hello, world!");
// };

// greet(); // Outputs: Hello, world!



// 4. Anonymous Functions

// setTimeout(function() {
//     console.log("This is an anonymous function.");
// }, 1000);



// 5. Named Functions

// const greet = function greeting() {
//     console.log("Hello, world!");
// };

// greet(); // Outputs: Hello, world!



// 6. Immediately Invoked Function Expressions (IIFEs)

// (function() {
//     console.log("This is an IIFE.");
// })();



// 7. Constructor Functions

// function Person(name) {
//     this.name = name;
// }

// const person1 = new Person("Alice");
// console.log(person1.name); // Outputs: Alice



// 8. Generator Functions

// function* generateNumbers() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const generator = generateNumbers();
// console.log(generator.next().value); // Outputs: 1
// console.log(generator.next().value); // Outputs: 2
// console.log(generator.next().value); // Outputs: 3



// 9. Async Functions

// async function fetchData() {
//     const response = await fetch('https://api.example.com/data');
//     const data = await response.json();
//     console.log(data);
// }

// fetchData();



// 10. Methods (Object Methods)

// const obj = {
//     greet: function() {
//         console.log("Hello, world!");
//     }
// };

// obj.greet(); // Outputs: Hello, world!



