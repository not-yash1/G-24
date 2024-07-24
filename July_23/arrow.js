
// Arrow Functions - Arrow functions, introduced in ECMAScript 6 (ES6), provide a concise syntax for writing function expressions in JavaScript. They are often used to create anonymous functions and have a shorter syntax compared to traditional function expressions. Additionally, arrow functions have some distinct features related to their this binding, making them useful in certain contexts.



// 1. Syntax - 

    // 1.1 Basic Syntax : 
    // (param1, param2, ..., paramN) => expression

    // 1.2 Expression Syntax :
    // (param1, param2, ..., paramN) => {
    //     // multiple statements
    //     return expression;
    // }

    // 1.3 Single parameter syntax :
    // param => expression

    // 1.4 Single parameter and single statement syntax :
    // () => expression




// 2. Features and Benefits - 

// 2.1 Concise Syntax : 

// Traditional function expression
var add = function(a, b) {
    return a + b;
};

// Arrow function
const add = (a, b) => a + b;


// 2.2 Lexical 'this' Binding - Unlike traditional functions, arrow functions do not have their own this context. Instead, they inherit this from the surrounding scope at the time they are defined. This makes them particularly useful in scenarios where you want to preserve the context of this.

// function Person() {
//     this.age = 0;
    
//     setInterval(() => {
//         this.age++; // 'this' refers to the Person instance
//     }, 1000);
// }
    
// const person = new Person();


// 2.3 No arguments Object - Arrow functions do not have their own arguments object. If you need to access the arguments of the surrounding function, you can use a rest parameter or refer to the arguments object of the enclosing context.

// function traditionalFunction() {
//     const arrowFunction = () => {
//       console.log(arguments); // refers to the arguments of traditionalFunction
//     };
//     arrowFunction();
// }

// traditionalFunction(1, 2, 3); // Logs: [1, 2, 3]


// 2.4 Implicit Return: If the arrow function body consists of a single expression, the value of that expression is implicitly returned.

// Traditional function expression
var multiply = function(a, b) {
    return a * b;
};
  
  // Arrow function with implicit return
const multiply = (a, b) => a * b;


// 2.5 No new Keyword: Arrow functions cannot be used as constructors and cannot be called with the new keyword.
  
  
      






























const ab = (a, b) => {
    var c  = 10;
    console.log(this);
    return a + b;
}

ab(1, 2);

var abc = function(){
    console.log(this)
}

abc();
