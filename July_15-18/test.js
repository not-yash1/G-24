



// var a = 20
// let a = "Hello"
// console.log(a);






// function square1(x) {
//     let y = x * x;
//     return y;
// }

// let ans = square1(4);
// console.log(ans);







// Function Declarations and Function expressions


// foo(); 

// function foo() {
//     console.log('Hello');
// }

    
    

    
// bar();

// let bar = function() {
//     console.log('Hello');
// };







// function z(){
//     console.log("First i", i);
//     for(var i = 0; i < 10; i++){
//         console.log(i);
//     }

//     console.log("Last i", i);
// }

// z();


// EC and LE



// Temporal Dead Zone - The TDZ is the time between entering a block scope and the point where a variable is declared and initialized. Accessing variables in the TDZ throws a ReferenceError.


// let a = 10;

// function greet() {
//     console.log(a);
//     console.log(d);
//     // console.log(w);
//     var d = 25;
//     let w = "Hello"
//     function inner(){
//         d = 16;
//         console.log(d)
//         console.log(a)
//         console.log(a + b);
//         console.log(b)
//         var b = 16
//         let t = "MY"
//         console.log(t);
//     }
//     inner();
// }

// greet();






// console.log(a); // What will this log?
// let a = 5;

// function test() {
//     console.log(b); // What will this log?
//     let b = 10;
// }

// test();









// const instance = new MyClass();

// class MyClass {
//     constructor() {
//         this.name = 'MyClass';
//     }
// }

// const instance = new MyClass();
// console.log(instance.name)







// console.log(a);
// console.log(b); 
// let a = 5;
// let b = 10;
// function test() {
//     console.log(a);
//     // console.log(b);
//     var a = 20;
//     let b = 30;
//     function hello(){
//         // console.log(c);
//         let c = null
//         // console.log(w);
//         var x = true;
//         console.log(b + a) // 35 50 30 
//         var b = 16
//         console.log(b + a) // 35 50 30 
//     }
//     hello();
// }
// test();





var c = 10;
let d = 20;


var bar = function() {
    console.log(c); 
    console.log(d); 
    foo();
};

// bar();


(function foo() {
    var a = 20;
    console.log(c);
    console.log(d); 
    bar();
})();







// new MyClass();

// class MyClass {
//     constructor() {
//         console.log('MyClass instantiated');
//     }
// }

// myFunc();

// function myFunc() {
//     console.log('Function executed');
// }








// let myVar = 10;

// console.log(myVar);

// (function() {
//     console.log(myVar);
//     let myVar = 20;
// })();







console.log(foo);
var foo = "bar";

var baz = function() {
    console.log("Hello");
    return 10;
};
console.log(baz());

function qux() {
    console.log("Hi");
}
qux();