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