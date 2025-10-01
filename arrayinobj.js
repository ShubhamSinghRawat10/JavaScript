//Array of Object
var b = [
  {
    certficateNumber: 1,
    head: "python",
    dOI: "10Sep",
  },
  {
    certficateNumber: 2,
    head: ["python", "javaScript"], //array of object in index 1 --> uske andar value ka bhi ik array bnya h  (nested Array)
    dOI: { python: "10sep", javaScript: "12sep" },
  },
];
// console.log(b[1].head[1]); accessing the value Java Script
console.log(b[1].dOI.javaScript); //accessing the value of DOI of Javascript