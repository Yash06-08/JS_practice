let person ={name: "Alice", age:20};
console.log(person);

console.log(person.name);

person.city= "paris";
console.log(person);

for (let key in person) console.log(key, person[key]);


console.log(Object.keys(person).length);