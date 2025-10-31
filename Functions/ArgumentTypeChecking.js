obj = {
    "name": "Shubham",
    "age": 24,
    "course-subjects": ["HTML", "CSS", "JS", "ReactJS"],
};
obj1 =10;
b=30;

function printval(o,s){
    // Specially when we are working with functions in js we to keep constraint on type checking.

    console.log(typeof o);
    if(typeof 0=== "Object"){
        console.log(o.name);
        console.log(o.course-subjects[2]);
    }
    else {
        console.log("Not an object");
    }
}
printval(obj);
printval(obj1); 
printval(b);