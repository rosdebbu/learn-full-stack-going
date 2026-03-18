// numder

let balance = 1000;
let anotherBalance = new Number(2000);

console.log(typeof (balance));
console.log(anotherBalance.valueOf());  // this is non primitive value of the number object --- object hoibo
console.log(typeof (anotherBalance));

//bollean
let isactive = true;
let isreallyactive   = new Boolean(false);  // not reccommmneded to use this
console.log(typeof (isactive));
console.log(isreallyactive.valueOf());

// null and undefined
let firstname = null;
let lastname = undefined;
// console.log(firstname);  // null
// console.log(lastname);   // undefined

// string

let mystring = "hey, its debjit!";
let mystringone ="senorita";
let username = "yoyo";

let oldgreet = mystring + ""+ "debjit";
console.log(oldgreet);

let greetmessage = `hey, its ${username}!`;
let demoOne = `value is ${2+3}`;
console.log(greetmessage);
// console.log(demoOne);


// symbol alwalys unique thaka imp *
let sm1 = Symbol("hello");
let sm2 = Symbol("yo");

console.log(sm1);
console.log(sm2);
console.log(sm1 == sm2); // false, because each symbol is unique
