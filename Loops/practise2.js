//! Write a program to print the series: 1 + 4/1 + 16/27 + 36/125 + .... up to n terms
// where the numerator is the square of even numbers and the denominator is the cube of odd numbers.

n = 10;
a = ["1"];
even = 0;
odd = 1;

for (i = 1; i <= n; i++) {
    even += 2;
    odd += 2;

    a.push(` + ${Math.pow(even, 2)}/${Math.pow(odd, 3)}`);
}

console.log(...a);
