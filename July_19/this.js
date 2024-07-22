
// 1. this keyword - this keyword refers to the object that it belongs to.

// Function Scope - window
// Global Scope  - window
// Method Scope - object
// Event Listeners : selected DOM element




// 2. Call - 

function abcd(){
    console.log(this);
}

var obj = { age: 24 }
abcd.call(obj);

// abcd.call(obj);

// function abcd(a, b, c){
//     console.log(this);
// }

// abcd.call(obj, 1, 2, 3);



// 3. Apply -

function abc(a, b, c){
    console.log(this.age + a + b + c)
}

var obj = { age: 24 }
abc.apply(obj, [1, 2, 3]);



// 4. Bind -

var w = abc.bind(obj);
w();
