// let num = Number(prompt("Enter a number"));
// if(num>0){
//   console.log("Number is positive");
// }
// else{
//   console.log("Number is negative");
// }


let a2 = 12, b2 = 25;
console.log(a2 > b2 ? a2 : b2);

let n2 = -3;
console.log(n2 > 0 ? "Positive" : (n2 < 0 ? "Negative" : "Zero"));



let ch = 'f';
if(['a','e' ,'i', 'o','u'].includes(ch)){
  console.log("Vowel");
}
else{
  console.log("Consonant");
}

let signal = "red";
switch(signal) {
  case "red": console.log("Stop"); break;
  case "yellow": console.log("Ready"); break;
  case "green": console.log("Go"); break;
  default: console.log("Invalid signal");
}

let purchase = 1500;
console.log(purchase >= 1000 ? "Eligible for discount" : "Not eligible");

