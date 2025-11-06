//! calling of nested function uses calls Stack for execution...
function add(){
    a=10;
    b=20;
    return a+b;
}
function multiply(){
    x=5;
    y=4;
    return mux = x*y*add();
}
console.log(multiply());   