// Immediately Invoked Function Expressions (IIFEs) are a common pattern in JavaScript for creating a new scope and executing a function immediately. This pattern helps avoid polluting the global scope, which can prevent conflicts and accidental overwriting of variables.


// // 1. iife as function declaration

// (function() {
//     // code here
// })();


// // 2. iife as function expression

// (function() {
//     // code here
// }());


// // 3. Variable declaration in iife

// (function() {
//     var message = "Hello, World!";
//     console.log(message); // Outputs: Hello, World!
// })();

// // The following line will throw a ReferenceError because 'message' is not defined in the global scope
// console.log(message); // ReferenceError: message is not defined



// // 4. Parameters in iife

// (function(name) {
//     console.log("Hello, " + name + "!");
// })("Alice"); // Outputs: Hello, Alice!



// Examples :

var counter = (function() {
    var count = 0; // Private variable
    console.log("Count: ", count)

    return {
        increment: function() {
            count += 1;
            return count;
            // console.log(count)
        },
        decrement: function() {
            count -= 1;
            return count;
        },
        getValue: function() {
            return count;
        }
    };
})();

console.log(counter.increment()); // Outputs: 1
console.log(counter.increment()); // Outputs: 2
console.log(counter.decrement()); // Outputs: 1
console.log(counter.getValue());  // Outputs: 1


