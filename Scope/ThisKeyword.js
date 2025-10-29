//! This keyword is used to give the reference to the sibling of the object , Example all the direct or indirect childs of the objects can be accessed by this keyword in thge place of object name.

// In this we created userData abject and inside that object i have created printname method / function to print the name using this keyword.

const userData = {
    username: { frontname: "Shubham", lastname: "Rawat" },
    age: 24,
    printName(){
        console.log(this.usernamenamne);
    },
};
userData.printName(); 
console.log(userData.username); // { frontname: 'Shubham', lastname: 'Rawat' }
console.log(userData.username.frontname); // Shubham