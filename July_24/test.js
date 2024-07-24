
// 1. Arguments in functions
// function ab(a, b) {
//     console.log("First", a, b);
//     console.log(arguments)
// }

// ab(3, 4, 5, 6);

// const ab = (a, b) => {
//     var c  = 10;
//     console.log(this);
//     return a + b;
// }

// ab(1, 2);

// var abc = function(){
//     console.log(this)
// }

// abc();


// 2. Arguments in arrow functions
// function traditionalFunction(a, b, c) {
//     console.log(arguments)
//     const arrowFunction = (a) => {
//         console.log(a);
//         console.log(arguments); // refers to the arguments of traditionalFunction
//     };
//     arrowFunction(8, 9);
// }

// traditionalFunction(1, 2, 3, 4, 5); // Logs: [1, 2, 3]


// 3. Using arguments in arrow functions in global scope: 
// var c = 10;
// let a = 5;

// var b = () => {
//     console.log(arguments);
// }

// console.log(arguments)

// b();


// 4. Promises :
// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     let success = true; // Change to false to simulate an error
  
//     if (success) {
//       resolve("Operation was successful!");
//     } else {
//       reject("Operation failed.");
//     }
// });

// myPromise
//   .then((message) => {
//     console.log("Success: " + message);
//   })
//   .catch((error) => {
//     console.error("Error: " + error);
//   })
//   .finally(() => {
//     console.log("Operation completed.");
//   });



// 5. Promise all :
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("First promise resolved");
//     }, 3000);
// });
  
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Second promise resolved");
//     }, 1000);
// });

// Promise.all([promise2, promise1])
//   .then((results) => {
//     console.log(results); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
//   })
//   .catch((error) => {
//     console.error("Error: " + error);
//   });



// 6. Promise race :
// const promise1 = new Promise((resolve, reject) => {
//     console.log("First resolved")
//     setTimeout(resolve, 3000, "First");
//   });
  
//   const promise2 = new Promise((resolve, reject) => {
//     console.log("Second resolved")
//     setTimeout(resolve, 1000, "Second");
//   });
  
//   Promise.race([promise1, promise2])
//     .then((result) => {
//       console.log(result); // "Second"
//     })
//     .catch((error) => {
//       console.error("Error: " + error);
//     });



// 7. Promise allSettled :
// const promise1 = Promise.resolve("Promise 1 resolved");
// const promise2 = Promise.reject("Promise 2 rejected");
// const promise3 = Promise.resolve("Promise 3 resolved");

// Promise.allSettled([promise1, promise2, promise3])
//   .then((results) => {
//     console.log(results);
//     // [
//     //   { status: "fulfilled", value: "Promise 1 resolved" },
//     //   { status: "rejected", reason: "Promise 2 rejected" },
//     //   { status: "fulfilled", value: "Promise 3 resolved" }
//     // ]
//   });



// 8. Promise any :
// const promise1 = Promise.reject("Promise 1 rejected");
// const promise2 = Promise.resolve("Promise 2 resolved");
// const promise3 = Promise.resolve("Promise 3 resolved");

// Promise.any([promise1, promise2, promise3])
//   .then((result) => {
//     console.log(result); // "Promise 2 resolved"
//   })
//   .catch((error) => {
//     console.error("Error: " + error);
//   });



// 9. Async/Await :
// async function fetchData() {
//     let promise1 = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Data 1 fetched"), 1000);
//     });
  
//     let promise2 = new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Data 2 fetched"), 2000);
//     });
  
//     let results = await Promise.all([promise1, promise2]); // Execute in parallel
//     console.log(results); // Output: ["Data 1 fetched", "Data 2 fetched"]
// }

// fetchData();
  


// 10. setTimeout and setInterval :
// function greet(name, age) {
//     console.log(`Hello, ${name}! You are ${age} years old.`);
// }

// setTimeout(greet, 2000, 'John', 25);  // After 2 seconds, logs "Hello, John! You are 25 years old."



// 11. setInterval :
// function greet(name, age) {
//     console.log(`Hello, ${name}! You are ${age} years old.`);
// }

// setTimeout(greet, 2000, 'John', 25);  // After 2 seconds, logs "Hello, John! You are 25 years old."



// 12. clearTimeout and clearInterval :
// let number = 5;
// function countdown(number) {
//     console.log(number);
//     number--;
    
//     if (number === 0) {
//         clearInterval(countdownID);
//         console.log("Happy New Year!");
//     }
// }

// let countdownID = setInterval(countdown, 1000, number);  // Counts down from 5 to 0



// function countdown(number) {
//     console.log(number);
    
//     if (number === 0) {
//         clearInterval(countdownID1);
//         console.log("Happy New Year!");
//     } else {
//         countdownID1 = setInterval(countdown, 1000, number - 1);
//     }
// }

// let countdownID1 = setInterval(countdown, 1000, 5);



// var num = 5
// function countdown(number) {
//     console.log(number);
    
//     if (number === 0) {
//         clearInterval(countdownID);
//         console.log("Happy New Year!");
//     }
// }

// let countdownID = setInterval(function() {
//     countdown(num--);
// }, 1000);



// let number = 5
// function countdown() {
//     console.log(number);
//     number--;

//     if (number === 0) {
//         clearInterval(countdownID);
//         console.log("Happy New Year!");
//     }
// }
    
// let countdownID = setInterval(countdown, 1000);
        
        
        
// 13. clearInterval :
// function repeatedGreet() {
//     console.log("Hello!");
    
//     setTimeout(repeatedGreet, 2000);  // Re-execute after 2 seconds
// }

// setTimeout(repeatedGreet, 2000); 


// function fetchData(callback) {
//     setTimeout(() => {
//         callback();
//       console.log("Data fetched from server");
//     }, 2000);
// }

// function processData() {
//     console.log("Processing data");
// }

// fetchData(processData);


// let count = 0;

// function repeatMessage() {
//     count++;
//     console.log(`This is message number ${count}`);
    
//     if (count >= 5) {
//         clearInterval(messageID);
//     }
// }

// let messageID = setInterval(repeatMessage, 1000);



// function greet(name, callback) {
//     console.log("Hello, " + name + "!");
//     callback();
// }

// function sayGoodbye() {
//     console.log("Goodbye!");
// }

// greet("Alice", sayGoodbye);



// function fetchData(callback) {
//     setTimeout(() => {
//       console.log("Data fetched from server");
//       callback();
//     }, 2000);
// }

// function processData() {
//     console.log("Processing data");
// }

// fetchData(processData);



// console.log('Start');

// function fetchData(callback) {
//   setTimeout(() => {
//     console.log('Data fetched');
//     callback();
//   }, 2000);
// }

// fetchData(() => {
//   console.log('Callback executed');
// });

// console.log('End');


// function fetchData(callback, errorCallback) {
//     setTimeout(() => {
//         const error = true; // Change to true to simulate an error
//         if (error) {
//             errorCallback("Error fetching data");
//         } else {
//             console.log("Data fetched from server");
//             callback();
//         }
//     }, 2000);
// }

// function processData() {
//     console.log("Processing data");
// }

// function handleError(error) {
//     console.error(error);
// }

// fetchData(processData, handleError);





// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// var timeoutID = setTimeout(greet, 2000, 'John');  // After 2 seconds, logs "Hello, John!"


// function showTime() {
//     console.log(new Date().toLocaleTimeString());
// }

// var intervalID = setInterval(showTime, 1000);  // Every 1 second, logs the current time


// // 2.2 Cancelling an interval :

// setTimeout(() => {
//     clearInterval(intervalID)
// }, 2000)
// clearInterval(intervalID);

// function updateClock() {
//     let now = new Date();
//     console.log(now.toLocaleTimeString());
// }

// let clockID = setInterval(updateClock, 1000);



let position = 0;

function moveBox() {
    position += 1;
    // document.getElementById('box').style.left = position + 'px';
    console.log(position);

    if (position >= 100) {
        clearInterval(animationID);
    }
}

let animationID = setInterval(moveBox, 10);

  