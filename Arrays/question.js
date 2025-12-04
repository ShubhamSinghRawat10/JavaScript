//! write a function to check if the user object has name, email and age properties. If all properties are present, return 1 else return 0.
//! functon as arguemnt
function checkuserdata(user) {
    const { name, age, email } = user;

    return (name && email && age) ? 1 : 0;
}

const user = {
    name: "shubham",
    email: "shubh.rwt2005@gmail.com",
    age: 18,
};

console.log(checkuserdata(user));  // Output: 1
