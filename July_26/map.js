
// map(): The map() method creates a new array with the results of calling a provided function on every element in the calling array.


// 1. Syntax : 
array.map(function(currentValue, index, arr){}, thisValue)

// Example 1:
var numbers = [1, 2, 3, 4, 5];

var doubled = numbers.map(function(number) {
  return number * 2;
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]
console.log(numbers); // Output: [1, 2, 3, 4, 5]


// Example 2:
var numbers = [1, 2, 3, 4, 5];

var doubled = numbers.map(number => number * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]


// Example 3:
let users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

let names = users.map(user => user.name);

console.log(names); // Output: ["Alice", "Bob", "Charlie"]


// Example 4:
let numbers = [1, 2, 3, 4, 5];

let descriptions = numbers.map((number, index, array) => {
  return `Number ${number} is at index ${index} in [${array.join(", ")}]`;
});

console.log(descriptions);
// Output:
// [
//   "Number 1 is at index 0 in [1, 2, 3, 4, 5]",
//   "Number 2 is at index 1 in [1, 2, 3, 4, 5]",
//   "Number 3 is at index 2 in [1, 2, 3, 4, 5]",
//   "Number 4 is at index 3 in [1, 2, 3, 4, 5]",
//   "Number 5 is at index 4 in [1, 2, 3, 4, 5]"
// ]


// Example 5:
let numbers = [1, 2, 3, 4, 5];

let objects = numbers.map(number => { number: number });

console.log(objects);
// Output:
// [
//   { number: 1 },
//   { number: 2 },
//   { number: 3 },
//   { number: 4 },
//   { number: 5 }
// ]


// Example 6: using thisArg
let calculator = {
    factor: 10,
    multiply: function(number) {
      return number * this.factor;
    }
};

let numbers = [1, 2, 3, 4, 5];

let multiplied = numbers.map(function(number) {
    return this.multiply(number);
}, calculator);

console.log(multiplied); // Output: [10, 20, 30, 40, 50]
  

  
