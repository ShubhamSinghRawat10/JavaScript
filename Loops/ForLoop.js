//! For Loop in JavaScript

// for (;;) {}

for (i=0;i<10;i++){
    console.log(i); // Output: 0 1 2 3 4 5 6 7 8 9
}


for ( i =1; i<10; i++){
    if (i % 2 == 0){
        console.log(`even -->${i}`);
    } else {
        console.log(`odd --> ${i}`);
    }
}
// Output: odd --> 1 even -->2 odd --> 3 even -->4 odd --> 5 even -->6 odd --> 7 even -->8 odd --> 9

//? or this method 

for ( i=0;i<=10;i++) console.log(i % 2 == 0 ?`even -->${i}`:`odd --> ${i}`);
 // Output: even -->0 odd --> 1 even -->2 odd --> 3 even -->4 odd --> 5 even -->6 odd --> 7 even -->8 odd --> 9 even -->10


