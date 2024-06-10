// The initial numbers that must be verified.
const n1 = 25;
const n2 = 8;
const n3 = 10;
const n4 = 7;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.

const isSum50 = (n1 + n2 + n3 + n4) == 50;

console.log(isSum50);



let N = 25;
// Extract the last digit using N % 10
let lastDigit = N % 10;
 
// Check for last digit
if (lastDigit === 0 || lastDigit === 5) {
    console.log(N + " is divisible by 5");
} else {
    console.log(N + " is not divisible by 5");
}