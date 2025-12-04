//! user ke through 1 object aa rha h , user ek form bhr rh h , many things are comming brom backend.js file
//! hum uss array ko check krna h kya uss array me wo object h ya nhi...


let user ={
    name:"Neon",
    age:"21",
    cityBorn: "Modeltown ,delhi"
};
const{name,age,cityBorn} = user;// destructing kr rhe h array ko
if(name && age && cityBorn){
    console.log("it is an Correct data ",user);
}else{
    console.log("Data is Incorrect");
}

