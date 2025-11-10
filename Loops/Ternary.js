//! Ternary Operator
//? It is a shorthand way of writing an if-else statement.

a=122;

// variable = condition ? True : False;

ans = a % 2 == 0 ? "Even" : "Odd";
console.log(ans); // Output: Even

//! Nesting Ternary Operator


ans = a% 2 == 0 ? (a>=5 ? a*a : a*a*a) : odd;
console.log(ans); // Output: 14884

// different way of same example 

console.log( a % 2 == 0 ? ( a >= 9 ? a * a : a * a * a ) : "Odd" ); // Output: 14884