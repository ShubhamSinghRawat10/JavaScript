//! For IN loop : It is speacially used for indices values loop

// for of
// for In
// for each

// a1 = [10, 99, 43, 4, 5, 66];
// for (const element of a1) {
// for of loop directly iterates over the value of object
//   if (element % 2 == 0) console.log(element);
// }

// for in loop
// for in loop abstraclty work on the indices of the object

// a1 = ["karan", "Shubham", 10, 99, 43, 4, 5, 66];
// a1[0],a1[1]

// for (const i of a1) {
  //if (i % 2 == 0) console.log(i); //here it  will mod the acutal elements of the array becuae FOR OF loop works on the actual element so the arrya
// }

// a1 = ["karan", "Shubham", 10, 99, 43, 4, 5, 66];
// a1[0],a1[1]
// for (const i in a1) {
  //console.log(i); // will only print the indcies of the Array
// }

// for (const i in a1) {
  // console.log(a1[i]); // will print the acutal value of the array becuase we are accessing it thorugh its array index
// }

// for (const i in a1) {
  //  if (i % 2 == 0) console.log(a1[i]); // here it will mod the index values of the array as the FOR IN loop focuses on the indixes of the Array
// }

// a1 = [1, 2, 3, [1, 2, 33, [11, 12, 13, 14]]]; //indices

obj = {
  name: "Shubham", //keys are the actuals idices in the Object
  course: "Btech",
};

for (const i in obj) {
  //! FOR IN LOOP is direclty iterable over the keys of objects
  console.log(`${i}-->${obj[i]}`);

}
// for (const key in a1) {
//   for (const key1 in a1) {
//     console.log(key);
//   }