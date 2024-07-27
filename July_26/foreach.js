
// 1. forEach - 


// 1.1 Syntax :
array.forEach(callback(element, index, array), thisArg);


// 1.2 Example :
var fruits = ["Apple", "Banana", "Cherry"];

fruits.forEach((fruit, index) => {
  console.log(`${index}: ${fruit}`);
});
// Output:
// 0: Apple
// 1: Banana
// 2: Cherry




// 2. forOf - 

// 2.1 Syntax :
for (variable of iterable) {
    // code block to be executed
}

// 2.2 Example :
var fruits = ["Apple", "Banana", "Cherry"];

for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry




// 3. forIn - 

// 3.1 Syntax :
for (variable in iterable) {
    // code block to be executed
}

// 3.2 Example :
let person = {
    name: "John",
    age: 30,
    city: "New York"
};
  
for (let key in person) {
    console.log(key + ": " + person[key]);
}
// Output:
// name: John
// age: 30
// city: New York





// 4. Caution with Arrays - Using for...in with arrays can lead to unexpected results because it iterates over all enumerable properties, not just array elements.
  
let fruits = ["Apple", "Banana", "Cherry"];

for (let index in fruits) {
  console.log(index + ": " + fruits[index]);
}
// Output:
// 0: Apple
// 1: Banana
// 2: Cherry

// It can also iterate over properties added to the array prototype
Array.prototype.test = "test";

for (let index in fruits) {
  console.log(index + ": " + fruits[index]);
}
// Output:
// 0: Apple
// 1: Banana
// 2: Cherry
// test: test



// 5. forEach return - 

// 5.1 Example:
var numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
  if (number === 3) {
    return; // This will skip the rest of the callback function for number 3
  }
  console.log(number);
});
// Output:
// 1
// 2
// 4
// 5

// 5.2 Example:
var numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) {
    break; // This will exit the loop when number is 3
  }
  console.log(numbers[i]);
}
// Output:
// 1
// 2


// 5.3 Example:
let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  if (number === 3) {
    break; // This will exit the loop when number is 3
  }
  console.log(number);
}
// Output:
// 1
// 2


// 5.4 Example:
let numbers = [1, 2, 3, 4, 5];

numbers.some(function(number) {
  if (number === 3) {
    return true; // This will stop the loop when number is 3
  }
  console.log(number);
  return false;
});
// Output:
// 1
// 2


// 5.5 Example:
let numbers = [1, 2, 3, 4, 5];

numbers.every(function(number) {
  if (number === 3) {
    return false; // This will stop the loop when number is 3
  }
  console.log(number);
  return true;
});
// Output:
// 1
// 2



// 6. Asynchronous in foreach - 

let numbers = [1, 2, 3, 4, 5];

numbers.forEach(async (number) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log(number);
});
// Output (the order may not be as expected):
// 1
// 2
// 3
// 4
// 5


let numbers = [1, 2, 3, 4, 5];

async function processNumbers() {
  for (let number of numbers) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(number);
  }
}

processNumbers();
// Output (with a 1-second delay between each):
// 1
// 2
// 3
// 4
// 5
