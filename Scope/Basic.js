//! Local Scope Example
//? Local always have higher priority than Global


let a =10;
function localscope(){
    let a =20;
    console.log(a);
}
localscope(); //20
console.log(a); //10