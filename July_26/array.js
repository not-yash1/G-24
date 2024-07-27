

// Arrays - Array is a data structure that can hold multiple values at once. These values can be of any type, including numbers, strings, objects, and even other arrays. Arrays are a special type of object in JavaScript, and they come with various built-in methods to perform common operations.


// 1. Creating Arrays :

// 1.1 Array Literals :
var arr = [1, 2, 3, 4, 5];
var arr = [1, 'hello', true, null, undefined, { name: 'John' }, [1, 2, 3]];

// 1.2 Array Constructor :
var arr = new Array(1, 2, 3, 4, 5);
var arr = new Array(5);



// 2. Accessing Array Elements :
var fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry



// 3. Array methods :

// 3.1 push -
var fruits = ["Apple", "Banana"];
fruits.push("Cherry");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// 3.2 pop -
var fruits = ["Apple", "Banana", "Cherry"];
fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana"]

// 3.3 unshift -
var fruits = ["Banana", "Cherry"];
fruits.unshift("Apple");
console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]

// 3.4 shift -
var fruits = ["Apple", "Banana", "Cherry"];
fruits.shift();
console.log(fruits); // Output: ["Banana", "Cherry"]

// 3.5 indexOf -
var fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.indexOf("Banana")); // Output: 1

// 3.6 lastIndexOf -
var fruits = ["Apple", "Banana", "Cherry", "Banana"];
console.log(fruits.lastIndexOf("Banana")); // Output: 3

// 3.7 splice -
var fruits = ["Apple", "Banana", "Cherry"];
fruits.splice(1, 2, "Watermelon");
console.log(fruits); // Output: ["Apple", "Watermelon"]

// 3.8 slice -
var fruits = ["Apple", "Banana", "Cherry"];
var slicedFruits = fruits.slice(1, 2);
console.log(slicedFruits); // Output: ["Banana"]

// 3.9 includes -
var fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits.includes("Banana")); // Output: true

// 3.10 map -
var numbers = [1, 2, 3, 4, 5];
var doubledNumbers = numbers.map(function(num) {
    return num * 2;
});
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// 3.11 filter -
var numbers = [1, 2, 3, 4, 5];
var evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});
console.log(evenNumbers); // Output: [2, 4]

// 3.12 reduce -
var numbers = [1, 2, 3, 4, 5];
var sum = numbers.reduce(function(acc, num) {
    return acc + num;
});
console.log(sum); // Output: 15



// Array.prototype.myPush = function(callback) {
//     let newArray = [];
//     for (let i = 0; i < this.length; i++) {
//         newArray.push(callback(this[i], i, this));
//     }
//     return newArray;
// }

Array.prototype.myPush = function(...args) {
    // `this` refers to the array on which `myPush` is called.
    for (let i = 0; i < args.length; i++) {
      this[this.length] = args[i];
    }
    return this.length;
};


let arr = [1, 2, 3];

arr.myPush(4);
console.log(arr); // Output: [1, 2, 3, 4]

arr.myPush(5, 6, 7);
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7]


const arr = new Array(1,2,3,4,5);
console.log(arr.myMap(x => x * 2));

