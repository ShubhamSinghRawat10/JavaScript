//! Freeze for Objects
// It is used to make the values of an object immutable (unchangeable)

// obj = {name : "Shubham", age : 24};
// console.log(obj);
// obj.name = "Shubham Singh Rawat"
// Object.freeze(obj);// now name will be freeze to this
// console.log(obj);


// console.log(Object.keys(obj)); // All keys in the arrays will be printed

// a = Object.keys(obj);
// console.log(a);

// a[0] = "Full name"; // keys always return a new array so changing a[0] will not affect obj
// console.log(a);

// a = { name : "Rohit"};
// console.log(a);
// console.log(Object.keys(a));
// console.log(Object.values(a));




//! Object Destructuring

on = {
    fullname : "Shubham",
    course: "Btech",
    branch: "CSE"
}

// console.log(on.fullname);


// const { fullname,course ,branch} = on; // destructuring}
// console.log(fullname);
// console.log(course);


const { fullname : fn, 
        course : cr, 
        branch : br } = on; // destructuring with aliasing
        console.log(fn);
        console.log(cr);