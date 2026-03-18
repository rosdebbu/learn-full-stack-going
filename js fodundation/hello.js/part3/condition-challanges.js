
// this are 5 challanges on conditionals in js , like the if else working 
// conditionals are used to perform different actions based on different conditions. In JavaScript, we have several types of conditional statements,
// including if, else if, else, and switch statements. Here are 5 challenges that you can try to solve using these conditional statements:

//1
// checking if a numder is greater than another numder:

let num1 = 10;  
let num2 = 20;


if(num1 > num2) {
    console.log(`${num1} is greater than ${num2}`);
} else {
    console.log(`${num2} is greater than ${num1}`);

}

console.log("i am an regular coder");

//2
// checking if a string is equal to another string:

let username = "debjit";
let anotherUsername = "das";

if (username != anotherUsername) {
    console.log("welcome back, debjit!");
} else {
    console.log("you are not debjit, you are " + anotherUsername);
}

if(username === "debjit") {
    console.log("welcome back, debjit!");
}


//3
// checking if a varble is a numder or not

let score = 100;

if (typeof score === "number") {
    console.log("yep, this is a number");
} else {
    console.log("nope, this is not a number");
}


//4
// checking if a boolean value is true or false

let isteadone = false;
if (isteadone) {
    console.log("TEA IS READY");

} else {
    console.log("TEA IS NOT READY");
}


//5
//check if an array is empty or not:

let items = ["item111"];

console.log(items.length);

if (items.length == 0) {
    console.log("array is empty");
} else {
    console.log("array is not empty");

}