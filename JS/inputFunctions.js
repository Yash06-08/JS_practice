// // 5. Remainder
// let a5 = Number(prompt("Enter first number:"));
// let b5 = Number(prompt("Enter second number:"));
// console.log("Remainder =", a5 % b5);

// // 8. Largest of two numbers
// let x8 = Number(prompt("Enter first number:"));
// let y8 = Number(prompt("Enter second number:"));
// console.log("Largest =", x8 > y8 ? x8 : y8);

// // 11. Average of array
// let arr11 = prompt("Enter numbers:").split(" ").map(Number);
// console.log("Average =", arr11.reduce((a, b) => a + b, 0) /
// arr11.length);


// 20. Factorial of a number
let n20 = Number(prompt("Enter number:"));
let fact = 1;
for (let i = 1; i <= n20; i++) fact *= i;
console.log("Factorial =", fact);