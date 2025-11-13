//! Question 1: Write a program to print the following series using for loop
// 1 + 1/2 + 1/3 + 1/4 + ..... + 1/n

n=10;
a = [] ;
console.log("1"); 
for (i = 1; i<n;i++){
    a.push(`+ 1 / ${i} `); // push each term into the array
}
console.log(...a); // output: 1 / 1  + 1 / 2  + 1 / 3  + 1 / 4  + 1 / 5  + 1 / 6  + 1 / 7  + 1 / 8  + 1 / 9



//! Question 2: 
// 1+2/3+4/5+6/7+8/9+10/n
let n =10;
let series = "";

for (let i = 1; i <= n; i += 2) {
    if (i == 1) {
        series += "1"; 
    } else {
        series += ` + ${i}/${i+1}`; 
    }
}
console.log(series);


// 0r this method for question 2 without if loop

n =20;
a = ["1"];
even = 0;
odd = 1;
for ( i = 1; i<=n; i++) a.push (`+ ${even +=2}/${odd +=2} `);
console.log(...a); // output: 1 + 2/3 + 4/5 + 6/7 + 8/9 + 10/11 + 12/13 + 14/15 + 16/17 + 18/19 + 20/21