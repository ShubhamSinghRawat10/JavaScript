// create a function that can take as may as arguments in which we are giving 3 argument  and 2 are set as default and the 3 will allow taking as many arguments you want to take

function myFunction(a = 10, b = 20, ...args) {
  if (a === undefined) 
    a = 10;
  if (b === undefined)
     b = 20;

  console.log("val of a =", a);
  console.log("val of b =", b);

  if (args.length > 0) {
    console.log("Additional arguments:", args);
  } else {
    console.log("No additional arguments provided.");
  }
}
myFunction();           
myFunction(5);               
myFunction(5, 15);        
myFunction(5, 15, 25, 35, 45); 



