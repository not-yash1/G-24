
// Q1: What will be the output of the given code and why ?

const person = {
    name: 'John',
    greet: function() {

        console.log(this.name);
        
        const innerFunction = function() {
            console.log(this.name);
        };
        
        innerFunction();
    }
};

person.greet();





// Q2: What will be the output of the given code and why ?

// const person = {
//     name: 'John',
//     greet() {
//       console.log(this.name);
//     }
// };

// person.name = 'Jane';
// person.greet();
// var person = Object.create(person);
// // friend.greet();
// person.greet();








// // Q3: What will be the output of the given code and why ?

// var x = 20;
// let y = 5;
// foo();
// function foo(){
//     let x = 6
//     var y = 16
//     var z = 28
//     function bar(){
//         console.log(x)
//         console.log(y)
//         var z = 15
//         var y = 55
//         ;(function boo(){
//             console.log(z)
//         })()
//     }
//     ;(function bar(){
//         console.log(x)
//         var x = 10
//         return 99
//     }())
//     bar()
// }






// // Q4: What will be the output of the given code and why ?

// var c = 10;
// var d = 20;
// var bar = function() {
//     console.log(d); 
//     console.log(c); 
//     return 0;
// };

// var bar = function() {
//     console.log(c); 
//     console.log(d); 
//     foo();
// };


// function foo(){
//     console.log(c)
//     var c = 20;
//     var w = bar();
//     var bar = function() {
//         console.log(c); 
//         console.log(d);
//         console.log(a);
//         var a = 65
//     }
// }


// (function foo() {
//     var a = 20;
//     console.log(c);
//     console.log(d); 
//     bar();
// })();





// Q5: What will be the output of the given code and why ?

// var student = {
//     canStudy: true,
//     canWrite: true,
//     canRead: true,
//     code: function(){
//         console.log(`${this.name} is coding`);
//     }
// }

// var person = (name, age) => ({
//     name: name,
//     age: age
// })

// var P1 = person('John', 30);
// var P2 = person('Jane', 25);
// // var S1 = new student();
// // student.__proto__ = P1;
// student.code();

// // P1.__proto__ = student;
// student.__proto__ = P2;
// // console.log(P1.canRead) 
// student.code();





// Q6: What will be the output of the given code and why ?

a();

var a = function(){
    console.log("Hello")
}

a();

function a(){
    console.log("World")
}

a()
  
  



// #NEXT

// ab(1, 2);

// function ab(a, b){
//     console.log("First", a, b);
//     console.log(this);
// }

// ab(3, 4);

// var ab = (a, b) => {
//     console.log("Second", a, b);
//     console.log(this);
// }

// ab(5, 6);




// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.greet = function() {
//     console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// function Employee(name, age, jobTitle) {
//     Person.call(this, name, age); // Inherit properties from Person
//     this.jobTitle = jobTitle;
// }

// // Inherit methods from Person's prototype
// Employee.prototype = Object.create(Person.prototype);
// Employee.prototype.constructor = Employee;

// Employee.prototype.describeJob = function() {
// console.log(`I am a ${this.jobTitle}.`);
// };

// const employee1 = new Employee('Charlie', 28, 'Software Engineer');
// // console.log(employee1)
// employee1.greet();


// employee1.greet(); // Hello, my name is Charlie and I am 28 years old.
// employee1.describeJob(); // I am a Software Engineer.