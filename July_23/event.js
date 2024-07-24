
// 3. Event Loops - The event loop is a crucial component of JavaScript's concurrency model, particularly in environments like the browser or Node.js. It enables JavaScript to perform non-blocking I/O operations, despite being single-threaded. The event loop continually checks if the call stack is empty and then processes the message queue to execute callbacks and other tasks.


// 3.1 Functioning of the Event Loop -

    // 3.1.1 Call Stack: This is where function execution contexts are managed. When a function is called, it is added to the call stack. When the function returns, it is removed from the call stack.

    // 3.1.2 Web APIs: These are provided by the browser (or Node.js) and include features like setTimeout, DOM events, and AJAX requests.

    // 3.1.3 Callback Queue: Also known as the message queue or task queue, this holds the messages (callbacks) to be processed.

    // 3.1.3 Event Loop: This constantly monitors the call stack and the callback queue. If the call stack is empty, it will take the first message from the callback queue and push it to the call stack for execution.

// i) Example1 -
// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout');
// }, 0);

// console.log('End');


// ii) Example2 -
// console.log('Start');

// setTimeout(() => {
//   console.log('Timeout 1');
// }, 1000);

// setTimeout(() => {
//   console.log('Timeout 2');
// }, 500);

// setInterval(() => {
//   console.log('Interval');
// }, 300);

// console.log('End');


// iii) Example3 -
console.log('Start');

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log('Fetch:', json));

console.log('End');