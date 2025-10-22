//! Using Of rest/Spread Operator In Functions
// function calculateCartPrice(...num) {// Using rest parameter to collect all arguments into an array
//     //if we dont use ...num, it will return the first argument only
//     return num;
// }

// console.log(calculateCartPrice(10, 20, 30)); // [10, 20, 30] will be the output...


//! Using Spread Operator To Pass Object Properties As Individual Arguments
const user={
    username : "john_doe",
    age : 25,
    country : "USA"
}

function handleuser(anyobject){
    console.log(`username is ${anyobject.username}, age is ${anyobject.age} and country is ${anyobject.country}`);
}

handleuser({...user});// Using spread operator to pass object properties as individual arguments

//? this is the other way to call the function
handleuser({
    username : "Sam",
    age : 30,
    country : "Canada"
})


//! Using Spread Operator To Pass Array Elements As Individual Arguments
const myNewArray = [200,400,600,800];
function returnSecondElement(getarray){
    return getarray[1];
}

console.log(returnSecondElement([myNewArray])); // 400 will be the output...

//? or

console.log(returnSecondElement([200,400,600,800])); // 400 will be the output...
