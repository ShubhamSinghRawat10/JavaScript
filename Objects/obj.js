// const obj1={}

// const obj = { Name: "John", Age: 30, City: "New York" };
// console.log(obj); // Output: John
// console.log(obj1); 

//! objects can be create by two ways
// 1. Object literal / Variable
// 2. Object constructor

let a = { 
    name: "Shubham singh rawat", class: "12th", rollno: 23
};
// const ob = new Object({a});
// console.log(ob);

// const Obj = new Object({...a.name});
// console.log(Obj);

const Obj = new Object({...a});
console.log(Obj.class);

// const Obj = new Object({...a});
// console.log(Obj.rollno);