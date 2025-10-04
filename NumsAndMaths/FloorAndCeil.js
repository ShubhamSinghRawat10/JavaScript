// IMPORTANT METHOD .. 
console.log(Math.random()); // THIS SHOWS THAT IT WILL THROW THE VALUE IN BETWEEN 0 TO 1 ALWAYS
console.log((Math.random()*10)+1); //THIS SHOWS THA TRANGE WILL EXCEED BETWEEN 1 TO 11 AND MOST IMPORTANT CASE IS TO AVOID THE ZERO VALUE  ..
console.log((Math.floor(Math.random()*10)+1)); // NESTING METHOD TECHINQUE TO FIND THE LOWER VALUE .. 

// for ceil method we use 1 
// for floor method we use -1 
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1)) + min );
// WE ADD 1 TO AVOID THE ZERO VALUE AND THE MIN TO THE LAST TO SPECIFY IT'S RANGE THAT IT SHOULD ALWAYS BE GREATER THAN THE MINIMUM VALUE ..