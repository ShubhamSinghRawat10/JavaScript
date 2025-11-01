// obj = {
//     "name": "Shubham",
//     "age": 24,
//     "subjects": ["HTML", "CSS", "JS", "ReactJS"],
// };
// obj1 =10;
// b=30;

// function printval(o,s){
    // Specially when we are working with functions in js we to keep constraint on type checking.

//     console.log(typeof o);
//     if(typeof o === "object"){
//         console.log(o.name);
//         console.log(o.subjects[2]);
//     }
//     else {
//         console.log("Not an object");
//     }
// }
// printval(obj);
// printval(obj1); 
// printval(b);


//!


 a1=[10,20,30,40,50];
 a=10;

 function Arraypaas(a){
    if(Array.isArray(a)){
        ob = {
            rollno: arr,
        };
        console.log(ob.rollno);
    }else {
        console.log("Not an Array" );
    }
}

function objectprint(arr){
    if (typeof arr === "object"){
        ob= {
            ...arr,
        };
        console.log(ob);
    } else {
        console.log("Not an object");
    }
 }

 objectprint(a1,a);

