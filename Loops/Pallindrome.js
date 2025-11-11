let num = 121;
let str = num.toString();
let rev = '';
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
if (rev === str) {
    console.log(num + " is a palindrome number.");
}
else {
    console.log(num + " is not a palindrome number.");
}

