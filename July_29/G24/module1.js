

// Building a module :
function add (a, b) {
    return a + b;
}

function subtract (a, b) {
    return a - b;
}

export const add1 = (a, b) => a+b
// export const add2 = add;

export const sub1 = (a, b) => a-b

// Exporting the module :
    // 2.1 Exporting the module as an object :
    // module.exports = add
    // module.exports = subtract
    // module.exports = {add, subtract}

    // 2.2 Exporting the module as a function :
    // module.exports = function (a, b) {
    //     return a + b;
    // }


// export default add;
