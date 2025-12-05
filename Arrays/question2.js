// Name must have minimum 3 characters,
// Valid email must contain "@" and ".com",
// Age must be 18+

function validateUser({ name, age, email }) {
    
    const namevalid = typeof name === "string" && name.length >= 3;

    const agevalid = typeof age === "number" && age >= 18;

    const emailvalid = typeof email === "string" 
                       && email.includes("@") 
                       && email.includes(".com");

    return namevalid && agevalid && emailvalid;
}

const user = {
    name : "Ali",
    email : "shubhamsinghrawat2005@gmail.com",
    age : 20
};

console.log(validateUser(user)); // true
