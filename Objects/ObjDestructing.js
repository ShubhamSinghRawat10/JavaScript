//! Object Destructuring 

obj2={1:"rohit",2:"sonu", dep:"ece"};
//object destruction using spread operator
console.log({...obj1,...ob});//it will show single output because obj1 and ob is 
// same and stored in heap value , so it will follow Shallow Scripting



// console.log({...obj1,...obj2});//it will show combined output because obj1 and obj2 is different and stored in heap value , so it will follow Shallow Scripting


// console.log(ob["full name"]); // for printing without index number key we have to use bracket notation with colons
// console.log(obj1[2]);
// console.log(ob.dep);
// console.log(obj2[1]);



obj1={1:"karan",2:"Shubham", dep:"cse"};
ob={"full name":"karan",2:"rahul", dep:"cse"};
obj4={...obj1,ob};
console.log(obj4);// it will show obj1 and ob as combined output because 
// we have used spread operator for obj1 and then added ob as it is so it will show both values
//! iske output me obj1 ke values pehle aayengi because it is child value due to spread operator
//!  & fir ob ke values aayenge jo as a key value pairs ho jaenge 