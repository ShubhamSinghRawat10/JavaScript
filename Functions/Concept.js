//! it is a module that exports a function to greet a user
//function
function userlogin(user){
    return ` ${user} Welcome Back! `;
}

//function calling
console.log(userlogin("Jhonny_Depp")); // Output:  Jhonny_Depp Welcome Back!

console.log(userlogin()); // Output:  undefined Welcome Back!



//! If we want to improve the function to handle undefined user input
//! Use Of Conditional Statements (IF , Else)
function userlogin(user){
    if(user === undefined){
        console.log("Please provide a username");
        return; // Exit the function early if it runs into undefined then the other code will not execute
    }
    return ` ${user} Welcome Back! `; // Template literal to include the username
}

console.log(userlogin("Jhonny_Depp"));


