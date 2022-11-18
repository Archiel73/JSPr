var broj = 23;
console.log(typeof broj);
var broj = "Arlinn";
console.log(typeof broj);
var broj = null; //komanda za brisanje vrjednosti, tip postaje null
console.log(typeof broj);

let person = {name: "Arlinn", //key:value <-person objekat
surname: "Kord", //key:value
age: 36}; //key:value
console.log(person);

let personAge = person.age;
console.log("Age: " + person.age); //Age: 36
console.log("Ime: " + person.name); //Ime: Arlinn
let prezime = person["surname"];
console.log(prezime);