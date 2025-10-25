// Without Argument Without return value
function hello(){
    console.log("Shubham Rawat");
}
hello();

// With Argument Without return 
function student(name , age){
    console.log("name of student ", name);
    console.log("age is : ", age);
}
student("shubh",21);
student("Vikram",21);

//without Argument with return
function square(){
let num = 5;
    let result = num * num;
    return result;
}
let sq = square();
console.log("Square is : ", sq);

// With Argument with return
function sum(num1 , num2){
    let result = num1 + num2;
    return result;
}
let add = sum(5,4);
console.log("sum of is : ", add);

