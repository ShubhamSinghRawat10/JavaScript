//TODO global --->object declare array global declare krro

// TODO , pass both into a function .
// TODO , check their type checking  then  a new object in the function  pass the object value to function object using this keyyword!!
// TODO , the function should take minimum 3 arguments

arr = [10 , 20 ,30]
obj = {
    "name" : "shubham",
    "age" : 19,
    "subjects" : ["c" , "c++" , "java" , "python"]
}

function answer(a, b, c) {

//TODO , ARRAY TYPECHECKING .. 

    if (Array.isArray(this.arr)) {
        console.log("arr IS ARRAY");
    }
    else{
        console.log("NOT AN ARRAY");
    }

// TODO , OBJECT TYPECHECKING..

    if (typeof this.obj === "object") {
        console.log("obj IS AN OBJECT");
    }
    else{
        console.log("NOT AN OBJECT");
        
    }
    console.log("ARRAY VALUES :" , this.arr);
    console.log("OBJECT VALUES :" , this.obj);
    
}
answer.call({arr , obj} , 1 , 2 , 3)