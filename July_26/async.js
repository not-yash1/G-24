// Synchronous JS - Executes line by line
// Asynchronous JS - Executes line by line and doesn't wait for the previous line to be executed to execute the next line

// 1. Differences -

// 1.1. Execution Order - 

// 1.2 Non-Blocking - 

    // 1.2.1 Synchronous operations block the execution of subsequent code until they complete. This can lead to performance issues, especially if a long-running operation is involved.

    // 1.2.2 Asynchronous operations do not block the execution of subsequent code. Instead, they delegate the task (e.g., an HTTP request or a timer) and allow the program to continue running other code.

// 1.3. Use Cases -

// 1.4 Error Handling - 

    // 1.4.1 Sync - Errors are typically handled using try-catch blocks within the same execution context.

    // 1.4.2 Async - Errors in asynchronous code are typically handled using .catch for promises or try-catch within async functions.


// ## setTimeout, setInterval, Promises, fetch, axios, XMLHttpRequest


// 2. JS is not Asynchronous - JavaScript is single-threaded and synchronous by default, meaning that it executes code line by line, in order. However, it also has the ability to handle asynchronous operations using mechanisms like callbacks, promises, and async/await.


// 3. Event Loops :


// 4. How async code runs simultaneously when JS is single threaded :

// 4.1 Web/Node APIs : When asynchronous functions like setTimeout, fetch, or event listeners are called, they are handed off to the browser's Web APIs or Node's APIs.

// 4.2 Environment : These APIs run in the browser or Node.js environment, which can use multiple threads to handle these tasks independently of the JavaScript engine.

// 4.3 Underlying Mechanism - The actual processing of asynchronous operations like network requests, timers, and I/O is handled by the environment (browser or Node.js), not by the JavaScript engine itself. These environments use separate threads to manage these tasks.

    // 4.3.1 Browser: Uses Web APIs that run on separate threads. When the task completes, it pushes the callback to the appropriate queue.
    // 4.3.2 Node.js: Uses the libuv library to handle I/O operations in a non-blocking way, utilizing a thread pool.

        // 4.3.2.1 Libuv : The libuv library is a cross-platform library that provides an asynchronous I/O API for Node.js. It provides a way to handle I/O operations in a non-blocking way, utilizing a thread pool. When a Node.js application starts, libuv initializes the event loop.


// 5. Callbacks :


// 6. setTimeout and setInterval : 
  
  
// 6. Promises :


// 7. Async/Await :

  

  
  



  