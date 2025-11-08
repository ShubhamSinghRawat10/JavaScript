//! CallBackFunction --> Nested Function is mandatory 

function username(){
    return "Shubham";
}
function printname(name){
    console.log(name())
}
printname(username);

// In the above example, the function 'username' is passed as an argument to the function 'printname'. 
// Inside 'printname', the 'username' function is called using 'name()' to get the return value "Shubham", 
// which is then logged to the console. This demonstrates the concept of a callback function, where one function 
// is passed to another function to be executed later.;



//! Call back using various function
//? Example 2: Using Anonymous Function as Callback

function calculate (n1,n2, Addition ){
    return Addition(n1,n2);
}

const add = calculate (5,10, function(n1,n2){
    return n1 + n2;
});

console.log(add); // 15 will be the output...

//now same example using fat arrow function

const addition = (n1,n2) => n1 + n2;
const addlog = addition (5,10, addition);
console.log(addlog); // 15 will be the output...