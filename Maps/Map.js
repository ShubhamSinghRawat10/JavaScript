//! MAPS: maps are duplicate copies of objects
//! It also take key value pairs

obj = {
  name: "shubham",
  name1: "Shubham singh rawat",
};
// console.log(Object.keys(obj).length);

// const mapp = new Map();
// mapp.set("IN", "India");
// mapp.set("UK", "Uttarakhand");
// mapp.set("UK", "Uttarakhand");
// mapp.set("UK", "Uttarakhand");
// mapp.set("UK", "Uttarakhand");
// console.log(mapp);
obj = [
  { name: "Karan", course: "Btech" },
  { name: "Shubham", course: "Btech" },
];

const m = new Map([
  //Nested Array
  ["IN", "India"],
  ["UK", "Uttarakhand"],
  ["UP", "Uttar Prdesh"],
]);
// console.log(...m);

// Adding Value to Map
// set function
m.set("CH", "Chandigarh");
console.log(...m);

// Getting value from map using Key | key or other things fllows Case Senstitivity in JS
console.log(m.get("UK"));

//deleting values from map
m.delete("UK");
console.log(m);

// clear method is used to clear the map without giving any prompt
// m.clear(); //same as of truncate
// console.log(m);

console.log(m.size);

// to check whether the data is present or not in the map

console.log(m.has("UP")); //it will return the output in Bool