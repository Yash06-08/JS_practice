// function add(a,b){
//   return a+b;
// }
// console.log(add(5,3));

// const square = function(x) {
//   return (x*x);
// }
// console.log(square(5))

// let multiply = (a,b) => a*b;
// console.log(multiply(2,3))

// function sum(...numbers){
//   return numbers.reduce((a,b) => a+b , 0);
// }
// console.log(sum(1,2,3,4,5,6))

// (function() {
// console.log("This runs immediately!");
// })();

// function factorial(n) {
// if(n === 0) return 1;
// return n * factorial(n-1);
// }
// console.log(factorial(5));

// function reversestring(str){
//   return str.split("").reverse().join("");
// }
// console.log(reversestring("hello"))

// function findmax(arr){
//   return Math.max(...arr);
// }
// console.log(findmax([1,2,4,5,6,9,3]));

// function toFahrenheit(c) {
// return (c * 9/5) + 32;
// }

// console.log(toFahrenheit(30));

// function swap(a,b){
//   [a,b]=[b,a];
//   return[a,b];
// }
// console.log(swap(4,5))

// function factorial(n){
//   let result =1
// for(let i=1;i<=n;i++)
// result*=i;
// return result;
// }
// console.log(factorial(6))

function longestWord(str){
  return str.split(" ").reduce((a,b)=>a.length>b.length?a:b);
}
console.log(longestWord("Hello world is the fist program of any programming language"));

