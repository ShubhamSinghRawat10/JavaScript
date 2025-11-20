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

// reference function functionname
// function calling sum(arugment)