let a=10
let b=20
let c=30

// a1 = [a,b,c]
// console.log(a1); // it will print the array without comma in between ...

//! Array.of() method ... isme nested array print ho jaega dusre array ke andar... 
// a2=Array.of(a,b,c);
// console.log(a2); // it will print the array without comma in between ...

//! Spread operator ...

a1 = [1,2,3,4,5,6,7,8,9]
//syntax
a3= Array.of(a1,a,b,c);
console.log( " Yeh Nested hai " , a3); // it will print the array without comma in between ...

a4 = Array.of(...a1,a,b,c);
console.log(" Yeh Spread hai ", a4); // it will print the array without comma in between ...