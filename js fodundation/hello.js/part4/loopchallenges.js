//1. write an loop that culclate the sum of all numder from 1 to 5 and store the result in a variable named sum

let sum = 0;
let i = 1;
// 1+ 2+ 3 + 4 + 5 = 15

while (i <= 5) 
    {
        sum += i; // sum = sum + i
        i++;
    }
// console.log(sum);


// write a while loop  that counts down from 10 to 1 and stores numders in a array named countdown

let countdown = [ ];
let j = 10;
while (j >= 1) {
    countdown.push(j);
    j--;
}
// console.log(countdown);

// write a do while looop thatprompts a user to enter their
// favorite tea type untill thet enter stop srore each tea type in an array named teacollection

 /*  let teacollection = [];
let teaType;

do {
   tea = prompt("Enter your favorite tea type (or type 'stop' to finish):");    

   if (tea !== "stop") {
    teacollection.push(teaType);
   }
   
} while (teaType !== "stop"); */


//4 write a do while loop that adds numder from 1 to 3 and stores the reslt in a variable named total

let total = 0;
let k = 1;

do {
    total += k; // total = total + k
    k++;
} while (k <= 3);
console.log(total);


// 5 write a for loop that multiplies each elemnt in the array 2 , 4  , 6 by 2 and stores the result in a new array named multilednumbers.

let multilednumbers = [];
let numbers = [2, 4, 6];

for (let l= 0; l < numbers.length; l++) {

    //takenumder = numbers[l] * 2;
    //multilednumbers.push(takenumber);
    multilednumbers.push(numbers[l] * 2);
} 
// console.log(multilednumbers);

// for (let index = 0; index < numbers.length; index++) {
    // Do something with each element


//6 

let cities = ["New York", "London", "Paris", "Tokyo"];
let cityList = [];

for (let m = 0; m < cities.length; m++) {
    const mycity = cities[m];
    cityList.push(mycity);
}
 console.log(cityList);


 // have work on do while loop and for loop and for loop
 