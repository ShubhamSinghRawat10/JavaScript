//! SELF INVOKING FUNCTION

(function helloprint(){
    console.log("Hello World");
}()); 
//there is no need to externally calling the function we can call the function when it is defined



//? Example 2 
// Self Invoking Function with parameters
(function helloprint(...a){
    const date = new Date().toString();
    console.log(date);
    console.log(...a);
})(10,20,30,40,50); 