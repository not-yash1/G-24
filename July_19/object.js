
// Objects - An object is a collection of properties, where a property is an association between a name (or key) and a value. The value can be a primitive, function, or another object.


// 1. Syntax 

// i) Object Literals :

var obj = {
    key1: 'value1',
    key2: 'value2',
    key3: function() {
      return 'Hello!';
    }
};


// iii) Object.create:

let person = Object.create(null);
person.name = "John";
person.age = 30;



// ii) Object Constructor :

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person('John', 30);



// 2. Accessing or Modifying Properties

let obj = {
    key1: 'value1',
    key2: 'value2',
    key3: function() {
      return 'Hello!';
    }
};

obj.key4 = 'value4';
obj['key5'] = 'value5';



// 3. Deleting Properties

delete obj.key1;



// 4. Methods

let obj = {
    greet: function() {
      return 'Hello!';
    }
};

console.log(obj.greet()); // 'Hello!'



// 5. 'this' Keyword

let person = {
    name: "John",
    greet: function() {
        console.log("Hello, " + this.name);
    }
};

person.greet(); // Hello, John



// 6. Standard Object methods

// i) Object.keys():
let keys = Object.keys(person); // ["name", "age"]

// ii) Object.values():
let values = Object.values(person); // ["John", 30]

// iii) Object.entries():
let entries = Object.entries(person); // [["name", "John"], ["age", 30]]

// iv) Object.assign():
let target = {};
let source = { name: "John" };
Object.assign(target, source); // target now has name property

// v) Object.freeze():
let person = { name: "John" };
Object.freeze(person);
person.name = "Pete"; // throws an error

// vi) Object.seal():
let person = { name: "John" };
Object.seal(person);
person.name = "Pete"; 
person.address = "Chandigarh" // throws an error




// 7. Prototypes and Inheritance

// i) Prototype Chain :

function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function() {
    console.log("Hello, " + this.name);
};

let jane = new Person("John", 30);
jane.greet(); // Hello, John




// 8. ES6 Classes - 

// i) Class Declaration :

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello, " + this.name);
    }
}

let jon = new Person("John", 30);
jon.greet(); // Hello, John


// ii) Inheritance with classes :

class Employee extends Person {
    constructor(name, age, job) {
        super(name, age);
        this.job = job;
    }

    work() {
        console.log(this.name + " is working as a " + this.job);
    }
}

let jade = new Employee("Jane", 25, "Developer");
jade.greet(); // Hello, Jane
jade.work();  // Jane is working as a Developer




// 9. Prototypal inheritance

var student = {
    canStudy: true,
    canWrite: true,
    canRead: true,
    code: function(){
        console.log(`${this.name} is coding`);
    }
}

function person(name, age){
    this.name = name;
    this.age = age
}

var P1 = new person('John', 30);
var P2 = new person('Jane', 25);
// var S1 = new student();
// student.__proto__ = P1;
student.code();

// P1.__proto__ = student;
student.__proto__ = P2;
// console.log(P1.canRead) 
student.code();




// var person = (name, age) => ({
//     name: name,
//     age: age
// })
  
  
  