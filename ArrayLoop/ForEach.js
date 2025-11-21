//! FOR EACH
//! ( Callback function )
// foreach loop is also a function which is calling an another  function in IT

// iteratorObject.forEach(callbackfunction);
// a1.forEach((i function ) => {
//   console.log(i);
// });

a1 = [1, 2, 3, 4, 56];
console.log(a1);

add = 0;
i = 1;
function sum(val) {
  console.log(`${i++}-->${val}`);
  add += val;
}
a1.forEach(sum);
console.log(add);

//! reference function functionname
// function calling sum(arugment)


a1 = ["apple", "mango", "Banana", "Kiwi", "Strawberry"];

// console.log(
//   a1.forEach((value) => {
//     console.log(value);
//     return value;
//   })
// );

a1.forEach((value) => {
  // console.log(value);
});

// forEach-->for every element of the array it will iterate once itself and pass the value of the array to the callback function
// ob = {
//   name: "Karan",
//   Course: "Btech",
//   College: "BIAS",
// };

// Object.keys(ob).forEach((vv) => {
//   // console.log(vv); to print keys using object
// });
// Object.values(ob).forEach((vv) => {
//   // console.log(vv); to print values using object
// });
// Object.entries(ob).forEach(([a, b], c) => {
//   console.log(${a}---->${b}-->${c});
// });

// // BREAK   -->FALL THROUGH
// // continue

// MAP();
// FILTER();
// REDUCE();

//

char = "a";
switch (char) {
  case "a":
  case "i":
  case "e":
  case "o":
  case "u":
    return "Vowel";
    break;
  default:
    return "Consonant";
}
