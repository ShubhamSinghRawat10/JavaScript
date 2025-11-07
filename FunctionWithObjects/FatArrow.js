//! Function Referencing 

var printhello = function heloo() {
    console.log("Hello World");
};
printhello();




//! Fat Arrow Function --> ES6 (ECMA Script 6)

// 1. Fat Arrow Function is always defined using const keyword
// 2. In Fat Arrow Function, the value of 'this' is lexically inherited from the outer function where it is defined.
// 3. In Fat arrow function we dont provif=de the name of the function only varible name is provided.

//=> FAt Arrow Function Syntax
// function referencing to a variable using const keyword

const printHello = () => {
    console.log("Hello World ");
};
printhello();

// Example 2: Fat Arrow Function with parameters

const add = (a,b) => {
    console.log("Heloo Shubham ");
    return a + b;
};


//! if you are not giving any other value in the function other than return then you can remove {} and return keyword also
//? One liner fat arrow function

// const add = (a, b) => a + b; // Implicit return
// console.log(add(5, 10));