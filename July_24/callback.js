// 3. Callbacks - A callback is a function that is passed as an argument to another function and is executed after some operation has been completed. This technique allows for asynchronous execution of code, meaning certain operations can be performed while waiting for other tasks to complete.

// Types of Callabcks -

// 3.1. Synchronous Callbacks: These are executed immediately, within the main flow of the program.

function greet(name, callback) {
    console.log("Hello, " + name + "!");
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
  

// 3.2. Asynchronous Callbacks: Asynchronous callbacks are used for operations that take some time to complete. They are executed after the operation finishes.

// i) Example1 - 
function fetchData(callback) {
    setTimeout(() => {
      console.log("Data fetched from server");
      callback();
    }, 2000);
}

function processData() {
    console.log("Processing data");
}

fetchData(processData);


// ii) Example2 -
console.log('Start');

function fetchData(callback) {
  setTimeout(() => {
    console.log('Data fetched');
    callback();
  }, 2000);
}

fetchData(() => {
  console.log('Callback executed');
});

console.log('End');


// 3.3 Handling Errors - 

function fetchData(callback, errorCallback) {
    setTimeout(() => {
        const error = false; // Change to true to simulate an error
        if (error) {
            errorCallback("Error fetching data");
        } else {
            console.log("Data fetched from server");
            callback();
        }
    }, 2000);
}

function processData() {
    console.log("Processing data");
}

function handleError(error) {
    console.error(error);
}

fetchData(processData, handleError);


// 3.4 Callback Hell - When multiple asynchronous operations are nested within each other, it can lead to a situation known as "callback hell," which makes the code difficult to read and maintain.

function step1(callback) {
    setTimeout(() => {
      console.log("Step 1 completed");
      callback();
    }, 1000);
}
  
function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 completed");
        callback();
    }, 1000);
}
  
function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 completed");
        callback();
    }, 1000);
}
  
function step4(callback) {
    setTimeout(() => {
        console.log("Step 4 completed");
        callback();
    }, 1000);
}
  
step1(() => {
    step2(() => {
        step3(() => {
            step4(() => {
                console.log("All steps completed");
            });
        });
    });
});