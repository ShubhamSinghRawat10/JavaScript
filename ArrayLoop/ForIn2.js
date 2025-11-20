obj ={
    college : "IIT",
    branch : "CSE",
    name : "Shubham"
};
// for (const i in obj) {
//     console.log(`${i} --> ${obj[i]}`);
    
    
// }
for (const key of Object.keys(obj)) {
    console.log(`${key} --> ${obj[key]}`);
}