// // Constructor Functions - Constructor functions in JavaScript are used to create objects. They provide a way to create multiple instances of an object with the same properties and methods.


// // 1. Creating Objects with Constructors

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1); // Person { name: 'Alice', age: 30 }
console.log(person2); // Person { name: 'Bob', age: 25 }


// // 2. Adding Methods to Constructors

Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

person1.greet(); // Hello, my name is Alice and I am 30 years old.
person2.greet(); // Hello, my name is Bob and I am 25 years old.


// // 3. Understanding Prototypes - The prototype property is used to add properties and methods to the constructor function

console.log(person1.__proto__ === Person.prototype); // true
console.log(person2.__proto__ === Person.prototype); // true


// // 4. Checking Instance 

console.log(person1 instanceof Person); // true
console.log(person2 instanceof Person); // true


// // 5. Inheritance with Constructor Functions

function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Inherit properties from Person
    this.jobTitle = jobTitle;
}

// Inherit methods from Person's prototype
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

Employee.prototype.describeJob = function() {
    console.log(`I am a ${this.jobTitle}.`);
};

const employee1 = new Employee('Charlie', 28, 'Software Engineer');

employee1.greet(); // Hello, my name is Charlie and I am 28 years old.
employee1.describeJob(); // I am a Software Engineer.



// // 6. ES6 Classes

class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

class Employee extends Person {
constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
}

describeJob() {
    console.log(`I am a ${this.jobTitle}.`);
}
}

const employee2 = new Employee('Charlie', 28, 'Software Engineer');

employee2.greet(); // Hello, my name is Charlie and I am 28 years old.
employee2.describeJob(); // I am a Software Engineer.




function Person(name) {
    this.name = name;
    
    this.greet = function() {
      console.log(this.name);
    };
}

const john = new Person('John');
const greet = john.greet;
greet();
  
  

  
