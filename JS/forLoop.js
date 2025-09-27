// let n = Number(prompt("Enter a number: "));
// for(let i=1; i<=n ;i++){
//   console.log(i);
// }

// let n2 = Number(prompt("Enter a number: "));
// for(let i=2 ; i<=n2 ;i+=2){
//   console.log(i);
// }

// let n3 = Number(prompt("Enter a number: "));
// let sum=0;
// for(let i=1;i<=n3;i++){
//   sum+=i;
// }
// console.log(sum); 

// let n4 = Number(prompt("Enter a number:"));
// for (let i = 1; i <= 10; i++) {
// console.log(`${n4} x ${i} = ${n4 * i}`);
// }


// let num = prompt("Enter a number:");
// let sum = 0;
// for (let i = 0; i < num.length; i++) {
// sum += Number(num[i]);
// }
// console.log("Sum of digits = " + sum);

// let str= prompt("Enter a string: ");
// let count=0;
// for(let i=0; i<str.length;i++){
// count++;
// }
// console.log("count: ",count);

// let terms = prompt("Enter how many terms for series :");
// let a=1 ,b=1;
// for(let i=0 ; i<=terms; i++){
//   console.log(a);
//   next = a+b;
//   a=b;
//   b=next;
// }

let base=Number(prompt("Enter base number : "));
let exp=Number(prompt("Enter power:"));
let result=1;
for(let i=1;i<=exp;i++){
  result*=base;
}
console.log(base + "^" + exp + "=" +result);