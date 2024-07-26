
// 1. What will be the output of the code and why ?

const promises1 = Promise.resolve("Promise 1 resolved");
const promises2 = Promise.resolve("Promise 2 resolved");
const promises3 = Promise.resolve("Promise 3 resolved");

Promise.all([promises1, promises2, promises3])
  .then((results) => {
    console.log(results); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
  })
  .catch((error) => {
    console.error("Error: " + error);
  });




// 2. What will be the output of the code and why ?

const promises4 = Promise.resolve((res, rej) => {
    setTimeout(() => {
        res("Promise1 resolved")
    }, 2000)
});
const promises5 = Promise.resolve("Promise 2 resolved");
const promises6 = Promise.resolve("Promise 3 resolved");

Promise.all([promises4, promises5, promises6])
  .then((results) => {
    console.log(results); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
  })
  .catch((error) => {
    console.error("Error: " + error);
  });




// 3. What will be the output of the code and why ?

const promises7 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise1 resolved")
    }, 2000)
});
const promises8 = Promise.resolve("Promise 2 resolved");
const promises9 = Promise.resolve("Promise 3 resolved");

Promise.all([promises7, promises8, promises9])
  .then((results) => {
    console.log(results); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
  })
  .catch((error) => {
    console.error("Error: " + error);
  });




// 4. What will be the output of the code and why ?

const promises10 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise10 resolved")
    }, 2000)
});
const promises11 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise11 resolved")
    }, 1000)
});
const promises12 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise12 resolved")
    }, 3000)
});

Promise.all([promises10, promises11, promises12])
  .then((results) => {
    console.log(results); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
  })
  .catch((error) => {
    console.error("Error: " + error);
  });




// 5. What will be the output of the code and why ?

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





// 6. What will be the output of the code and why ?

console.log("Starting execution");

const promise13 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 13 resolved");
        resolve("First");
    }, 3000);
});

const promise14 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise 14 resolved");
        resolve("Second");
    }, 100);
});

Promise.race([promise13, promise14])
    .then((result) => {
      console.log(result); // "Second"
    })
    .catch((error) => {
      console.error("Error: " + error);
    });

console.log("Code after Promise.race");




// 7. What will be the output of the code and why ?

const promises20 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise1 resolved")
    }, 2000)
});
const promises21 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Promise2 resolved")
    }, 1000)
});
const promises22 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise3 resolved")
    }, 3000)
});

Promise.allSettled([promise10, promise11, promise12])
  .then((results) => {
    console.log(results);
    // [
    //   { status: "fulfilled", value: "Promise 1 resolved" },
    //   { status: "rejected", reason: "Promise 2 rejected" },
    //   { status: "fulfilled", value: "Promise 3 resolved" }
    // ]
});




// 8. What will be the output of the code and why ?

const promises23 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise1 resolved")
    }, 2000)
});
const promises24 = new Promise((res, rej) => {
    setTimeout(() => {
        rej("Promise2 resolved")
    }, 1000)
});
const promises25 = new Promise((res, rej) => {
    setTimeout(() => {
        res("Promise3 resolved")
    }, 3000)
});

Promise.any([promises23, promises24, promises25])
  .then((result) => {
    console.log(result); // "Promise 2 resolved"
  })
  .catch((error) => {
    console.error("Error: " + error);
  });