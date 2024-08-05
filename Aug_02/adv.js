
// Functions as objects - 


// 1. name
// 2. length
// 3. toString()
// 4. caller
// 5. prototype

// function Person(age, add){
//     this.age = age
//     // return 4;
//   }
  
  var p1 = new Person(23)
//   console.log(Person.hasOwnProperty("name"))
// console.log(Person.length)

// console.log(Person.toString());


function ab(a, b){
    console.log("first")
}

function bc(b,c){
    // ab();
    let name1 = 4;
    console.log("second")
}

// bc();

ab.__proto__ = bc
// ab();
// bc();
ab.__proto__()

// console.log(ab.constructor.length)