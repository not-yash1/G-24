

// `setTimeout` and `setInterval` are two fundamental functions in JavaScript that deal with timing events. They allow you to execute code after a specified delay or at regular intervals, respectively.


// 1. setTimeout -

// 1.1 Syntax :

var timeoutID = setTimeout(callback, delay, [args]);


// Example :
function greet(name) {
    console.log(`Hello, ${name}!`);
}

var timeoutID = setTimeout(greet, 2000, 'John');  // After 2 seconds, logs "Hello, John!"


// 1.2 Cancelling a timeout :

clearTimeout(timeoutID);




// 2. setInterval -

// 2.1 Syntax :

var intervalID = setInterval(callback, delay, [args]);

// Example :

function showTime() {
    console.log(new Date().toLocaleTimeString());
}

var intervalID = setInterval(showTime, 1000);  // Every 1 second, logs the current time


// 2.2 Cancelling an interval :

clearInterval(intervalID);



// Examples :

// 1. Delayed execution with 'setTimeout' :
function showMessage() {
    console.log("This message appears after 3 seconds!");
}

setTimeout(showMessage, 3000);



// 2. Repeated execution with 'setInterval' :
function updateClock() {
    let now = new Date();
    console.log(now.toLocaleTimeString());
}

let clockID = setInterval(updateClock, 1000);



// 3. Stopping Repeated Execution :
let count = 0;

function repeatMessage() {
    count++;
    console.log(`This is message number ${count}`);
    
    if (count >= 5) {
        clearInterval(messageID);
    }
}

let messageID = setInterval(repeatMessage, 1000);



// 4. Using Arguments in setTimeout and setInterval :
function greet(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

setTimeout(greet, 2000, 'John', 25);  // After 2 seconds, logs "Hello, John! You are 25 years old."


// let number = 5
// function countdown() {
//     console.log(number);
//     number--
    
//     if (number === 0) {
//         clearInterval(countdownID);
//         console.log("Happy New Year!");
//     }
// }

// let countdownID = setInterval(countdown, 1000);  // Counts down from 5 to 0



// 5. Nesting setTimeout for Repeated Execution :
function repeatedGreet() {
    console.log("Hello!");
    
    setTimeout(repeatedGreet, 2000);  // Re-execute after 2 seconds
}

setTimeout(repeatedGreet, 2000);  // Initial call after 2 seconds



// 6. setTimeout with Zero Delay : 
console.log("Start");

setTimeout(() => {
    console.log("This is executed after the current code.");
}, 0);

console.log("End");



// 7. Animations with setInterval :
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





