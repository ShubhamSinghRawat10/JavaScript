// Name must have minimum 3 characters,
// Valid email must contain "@" and ".com",
// Age must be 18+
//! oneliner version of validateUser function
// function validateUser({ name, age, email }) {
    
//  return ( (namevalid = typeof name === "string" && name.length >= 3) && (agevalid = typeof age === "number" && age >= 18) && (typeof email === "string" 
//                        && email.includes("@") 
//                        && email.includes(".com")));
// }


//! using Fat arrow function
const validateUser = ({ name, age, email }) =>
    ( (namevalid = typeof name === "string" && name.length >= 3) && (agevalid = typeof age === "number" && age >= 18) && (typeof email === "string"
                          && email.includes("@")
                            && email.includes(".com")));
                            
const user = {
    name : "Ali",
    email : "shubhamsinghrawat2005@gmail.com",
    age : 20
};

console.log(validateUser(user)); // true
