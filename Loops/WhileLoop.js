// While loop --> same as of for ---entry controlled loop

// intialization
//  i = 1; 
//  while(i<=10) console.log(i++);
//  console.log( i++); // condition check and updation


 // write a program for perfect Number
    let n =28 ;
    let sum = 0;
    for ( let i =1; i<n; i++){
        if ( n%i == 0){
            sum += i;
        }
    }
    if ( sum == n){
        console.log(n + " is a perfect number");
    }
    else {
        console.log(n + " is not a perfect number");
    }
