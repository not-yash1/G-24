// Questions :

// 1. What will be the output of the below code and why?

// var x = 10;

// function foo() {
//     var x = 20;
//     function bar() {
//         console.log(x);
//         var x = 30;
//     }
//     bar();
// }

// foo();
// console.log(x);









// 2. What will be the output and why? Explain how closures and lexical environments are involved.

// function createCounter() {
//     let count = 0;
//     return function() {
//         count++;
//         console.log(count);
//     };
// }

// let counter1 = createCounter();
// let counter2 = createCounter();

// counter1();
// counter1();
// counter2();






// 3. What will be the output of the below code and why? Explain the role of execution contexts and hoisting.

// console.log(a);
// var a = 1;
// foo();

// function foo() {
//     console.log(a);
//     var a = 2;
//     bar();

//     function bar() {
//         console.log(a);
//     }
// }

// console.log(a);







// 4. What will be the output of the console.log statements and why?

// console.log(a); // What will this log?
// let a = 5;

// function test() {
//     console.log(b); // What will this log?
//     let b = 10;
// }

// test();











// 5. Explain the output of the console.log statements. How does the lexical environment affect this?

// (function() {
//     var x = 10
//     var y = 10
// })();

// console.log(y); // What will this log?
// console.log(x); // What will this log?














// 6. What will be the output of the below code and why? Describe how the scope chain is resolved.

// var x = 10;

// function outer() {
//     var y = 20;
//     function inner() {
//         console.log(x + y + z);
//         var z = 30;
//         console.log(x + y + z);
//     }
//     inner();
// }

// outer();






// 7. What will be the output of the below code and why? Explain the difference between dynamic and lexical scoping.

// var x = 10;

// function foo() {
//     console.log(x);
// }

// function bar() {
//     var x = 20;
//     foo();
// }

// bar();






// 8. What will be the output of the console.log statements and why? Discuss the concepts of variable shadowing and hoisting.

// var a = 1;

// function outer() {
//     console.log(a);
//     var a = 2;
//     function inner() {
//         console.log(a);
//     }
//     inner();
// }

// outer();






// 9. What will be the output of the console.log statements and why? Explain how multiple lexical environments work.

// let x = 1;

// {
//     let x = 2;
//     {
//         let x = 3;
//         console.log(x); // What will this log?
//     }
//     console.log(x); // What will this log?
// }
// console.log(x); // What will this log?









// 10. What will be the output of the console.log statements and why? Describe the interaction between function scope and block scope.

var x = 1;

function test() {
    var x = 2;
    {
        let x = 3;
        console.log(x); // What will this log?
    }
    console.log(x); // What will this log?
}

test();
console.log(x); // What will this log?





var a = 20

function foo() {
    console.log(a);
}

foo();