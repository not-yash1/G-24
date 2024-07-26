// 4. Promises - Promises are a way to handle asynchronous operations in JavaScript. They represent a value that may be available now, or in the future, or never. A promise can be in one of three states:

// Pending: The initial state, neither fulfilled nor rejected.
// Fulfilled: The operation completed successfully.
// Rejected: The operation failed.

// A promise is created using the Promise constructor, which takes a function as an argument. This function, called the executor, has two parameters: resolve and reject.


// 4.1 Creating a Promise - A promise is created using the Promise constructor, which takes a function as an argument. This function, called the executor, has two parameters: resolve and reject.

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    let success = true; // Change to false to simulate an error
  
    if (success) {
      resolve("Operation was successful!");
    } else {
      reject("Operation failed.");
    }
});


// 4.2 Handling Promises - Promises have methods to handle their eventual outcome: then, catch, and finally.

myPromise
  .then((message) => {
    console.log("Success: " + message);
  })
  .catch((error) => {
    console.error("Error: " + error);
  })
  .finally(() => {
    console.log("Operation completed.");
  });


// 4.3 Chaining Promises:

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First promise resolved");
    }, 1000);
});
  
const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second promise resolved");
    }, 1000);
});
  
promise1
    .then((result) => {
      console.log(result);
      return promise2;
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error("Error: " + error);
    });


// 4.3 Handling Multiple Promises: JavaScript provides methods like Promise.all, Promise.race, Promise.allSettled, and Promise.any to handle multiple promises.


// 4.3.1 Promise.all : takes an array of promises and resolves when all promises are fulfilled or rejects if any promise is rejected.

const promises1 = Promise.resolve("Promise 1 resolved");
const promises2 = Promise.reject("Promise 2 resolved");
const promises3 = Promise.resolve("Promise 3 resolved");

Promise.all([promises1, promises2, promises3])
  .then((results) => {
    console.log(results); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
  })
  .catch((error) => {
    console.error("Error: " + error);
  });


// 4.3.2 Promise.race : takes an array of promises and resolves or rejects as soon as one of the promises resolves or rejects.

const promise11 = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "First");
});
  
const promise12 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Second");
});
  
Promise.race([promise1, promise2])
    .then((result) => {
      console.log(result); // "Second"
    })
    .catch((error) => {
      console.error("Error: " + error);
    });
  

// 4.3.3 Promise.allSettled : takes an array of promises and returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects describing the outcome of each promise.

const promise21 = Promise.resolve("Promise 1 resolved");
const promise22 = Promise.reject("Promise 2 rejected");
const promise3 = Promise.resolve("Promise 3 resolved");

Promise.allSettled([promise1, promise2, promise3])
  .then((results) => {
    console.log(results);
    // [
    //   { status: "fulfilled", value: "Promise 1 resolved" },
    //   { status: "rejected", reason: "Promise 2 rejected" },
    //   { status: "fulfilled", value: "Promise 3 resolved" }
    // ]
});



// 4.3.4 Promise.any : takes an array of promises and returns a promise that resolves as soon as any of the promises in the array fulfills. If all the promises are rejected, it rejects with an AggregateError.

const promise31 = Promise.reject("Promise 1 rejected");
const promise32 = Promise.resolve("Promise 2 resolved");
const promise33 = Promise.resolve("Promise 3 resolved");

Promise.any([promise1, promise2, promise3])
  .then((result) => {
    console.log(result); // "Promise 2 resolved"
  })
  .catch((error) => {
    console.error("Error: " + error);
  });