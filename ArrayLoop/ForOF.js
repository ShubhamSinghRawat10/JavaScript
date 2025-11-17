//!  There are 3 types of another loops which direclty iterates over object & array!!

//! for OF LOOP
// foreach
// forin

const arr = [2, 4, 6, 36, 3, 63, 62, 633, "#"];

// for (const iteratorvariable of pass the name of array or object on which it is to iterated ) {

// }

// FOR OF LOOP --> DIRECTLY ITERATEABLE OVER ARRAY
// FOR OF LOOP IS DIRECLTLY ITERATEBALE OVER STRINGS

str = "Subham@#$%^&";

for (const shubham of arr) {
  //   console.log(shubham);
}

// for (const element of object) {
// }

obj = {
  name: "Karan",
  college: "BIRLA",
  Course: "B.Tech",
};
// console.log(obj);

for (const element of Object.keys(obj)) {
  //   console.log(element);
}
for (const element of Object.values(obj)) {
  //   console.log(element);
}

//Array Destructing
for (const [karan, shubham] of Object.entries(obj)) {
  console.log(`${karan}: ${shubham}`);
  console.log(`${shubham}: ${karan}`);
}
