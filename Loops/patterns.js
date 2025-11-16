// *
// * *
// * * *
// * * * *
// * * * * *
let n = 7;

for (let i = 1; i <= n; i=i+2) {
    for (let j = 1; j <= i; j++) {
        process.stdout.write("");
    }
    console.log(" ");
}


//? let n=5;

// * * * * *
// * * * *
// * * *
// * *
// *
for ( let i=n ; i>=1; i-- ) {
    for ( let j=1 ; j<=i ; j++ ) {
        process.stdout.write("* ");
    }
    console.log();
}

// A
// A B
// A B C
// A B C D
// A B C D E

for (let i = 1; i <= 5; i++) {
    let line = "";
    let A = 65;   // declare the variable

    for (let j = 0; j < i; j++) {
        line += String.fromCharCode(A++) + " ";
    }

    console.log(line);
}
//2
//3 5
//4 6 8
//5 7 9 11
for (let i = 1; i <= 4; i++) {
    let line = "";  
    let num = i + 1;

    for (let j = 1; j <= i; j++) {
        line += num + " ";
        num += 2;
    }
    console.log(line);
}