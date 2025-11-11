// Program to check if a number is an Armstrong number

function isArmstrong(number) {
  // Convert number to string to easily access digits
  let digits = number.toString();
  let power = digits.length;

  // Calculate sum of digits raised to the power of total digits
  let sum = 0;
  for (let digit of digits) {
    sum += Math.pow(parseInt(digit), power);
  }

  // Check if sum equals the original number
  return sum === number;
}

// Example usage
let num = 153;

if (isArmstrong(num)) {
  console.log(`${num} is an Armstrong number`);
} else {
  console.log(`${num} is not an Armstrong number`);
}
