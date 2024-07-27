
// 5. Async/Await - Async/Await is a modern syntax in JavaScript introduced in ECMAScript 2017 (ES8) that allows you to work with asynchronous code in a more synchronous and readable manner. It is built on top of promises and allows you to write asynchronous code as if it were synchronous, making it easier to understand and maintain.


// 5.1 Declaring an Async Function - To declare an async function, use the async keyword before the function definition. An async function always returns a promise.

async function fetchData() {
    return "Data fetched";
}

fetchData().then(data => console.log(data)); // Output: "Data fetched"


// 5.2 Using await :

async function fetchData() {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data fetched"), 2000);
    });
  
    let result = await promise; // Wait until the promise resolves
    console.log(result); // Output: "Data fetched"
}

fetchData();


// 5.2 Error Handling - Error handling with async/await is done using try...catch blocks, similar to synchronous code.

async function fetchData() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error("Data fetch failed")), 2000);
        });
    
        let result = await promise; // Wait until the promise resolves
        console.log(result);
    } catch (error) {
        console.error(error); // Output: Error: Data fetch failed
    }
}

fetchData();


// 5.3 Combining Multiple Async Operations -

async function fetchData() {
    let promise1 = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data 1 fetched"), 1000);
    });
  
    let promise2 = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data 2 fetched"), 2000);
    });
  
    let result1 = await promise1; // Wait for the first promise
    console.log(result1); // Output: "Data 1 fetched"
  
    let result2 = await promise2; // Wait for the second promise
    console.log(result2); // Output: "Data 2 fetched"
}

fetchData();


// 5.4 Parallel Execution - 

async function fetchData() {
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data 1 fetched"), 1000);
    });
  
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Data 2 fetched"), 2000);
    });
  
    let results = await Promise.all([promise1, promise2]); // Execute in parallel
    console.log(results); // Output: ["Data 1 fetched", "Data 2 fetched"]
}

fetchData();



// Example:

async function getUserData() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users/1');
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Fetch error: ', error);
    }
}
  
getUserData();
