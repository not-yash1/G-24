
// 1. What will be the output of the code and why ?

function greet(name, age) {
    console.log(`Hello, ${name}! You are ${age} years old.`);
}

setInterval(greet, 2000, 'John', 25);



// 2. What will be the output of the code and why ?

function fetchData(callback) {
    setTimeout(() => {
        callback();
        console.log("Data fetched from server");
    }, 2000);
}

function processData() {
    console.log("Processing data");
}

fetchData(processData);



// 3. What will be the output of the code and why ?

function moveBox() {
    position += 1;
    // document.getElementById('box').style.left = position + 'px';
    console.log(position);

    if (position >= 100) {
        clearInterval(animationID);
    }
}

let animationID = setInterval(moveBox, 10);



// 4. What will be the output of the code and why ?

function updateClock() {
    let now = new Date();
    console.log(now.toLocaleTimeString());
}

let clockID = setInterval(updateClock, 1000);

setTimeout(() => {
    clearInterval(clockID)
}, 2000)
// clearInterval(clockID);



// 5. What will be the output of the code and why ?

let count = 0;

function repeatMessage() {
    count++;
    console.log(`This is message number ${count}`);
    
    if (count >= 5) {
        clearInterval(messageID);
    }
}

let messageID = setInterval(repeatMessage, 1000);



// 6. What will be the output of the code and why ?

var number = 5;
function countdown(number) {
    console.log(number);
    number--;
    
    if (number === 0) {
        clearInterval(countdownID);
        console.log("Happy New Year!");
    }
}

var countdownID = setInterval(countdown, 1000, number);



// 7. What will be the output of the code and why ?

var number = 5;
function countdown(number) {
    console.log(number);
    number--;
    
    if (number === 0) {
        clearInterval(countdownID);
        console.log("Happy New Year!");
    }
}

let countdownID = setInterval(countdown, 1000);



// 8. What will be the output of the code and why ?

var number = 5;
function countdown() {
    console.log(number);
    number--;
    
    if (number === 0) {
        clearInterval(countdownID);
        console.log("Happy New Year!");
    }
}

let countdownID = setInterval(countdown, 1000, number);



// 9. What will be the output of the code and why ?

var number = 5;
function countdown() {
    console.log(number);
    number--;
    
    if (number === 0) {
        clearInterval(countdownID);
        console.log("Happy New Year!");
    }
}

let countdownID = setInterval(countdown, 1000);



// 10. What will be the output of the code and why ?

function countdown(number) {
    console.log(number);
    
    if (number === 0) {
        clearInterval(countdownID1);
        console.log("Happy New Year!");
    } else {
        countdownID1 = setInterval(countdown, 1000, number - 1);
        clearInterval(countdownID1);
    }
}

let countdownID1 = setInterval(countdown, 1000, 5);



// 11. What will be the output of the code and why ?

var num = 5
function countdown(number) {
    console.log(number);
    
    if (number === 0) {
        clearInterval(countdownID);
        console.log("Happy New Year!");
    }
}

let countdownID = setInterval(function() {
    countdown(num--);
}, 1000);



// 12. What will be the output of the code and why ?

let number = 5
function countdown() {
    console.log(number);
    number--;

    if (number === 0) {
        clearInterval(countdownID);
        console.log("Happy New Year!");
    }
}
    
let countdownID = setInterval(countdown, 1000);



// 13. What will be the output of the code and why ?

function repeatedGreet() {
    console.log("Hello!");
    
    setTimeout(repeatedGreet, 2000);
}

setTimeout(repeatedGreet, 2000); 



// 14. What will be the output of the code and why ?

setTimeout(() => {
    setTimeout(() => {
        console.log("Hello!")
    }, 500)
}, 1000)



// 15. What will be the output of the code and why ?

setInterval(() => {
    setTimeout(() => {
        console.log("Hello!")
    }, 500)
}, 1000)



// 16. What will be the output of the code and why ?

setTimeout(() => {
    setInterval(() => {
        console.log("Hello!")
    }, 500)
}, 1000)



// 17. What will be the output of the code and why ?

setInterval(() => {
    setInterval(() => {
        console.log("Hello!")
    }, 500)
}, 1000)



// 17. What will be the output of the code and why ?

setInterval(() => {
    var id = setInterval(() => {
        console.log("Hello!")
    }, 2000)

    setTimeout(() => {
        clearInterval(id)
    }, 2100)
}, 1000)

