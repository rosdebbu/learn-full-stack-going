// 1. write s for loop that loops through the array green tea , black tea, chai, oolong tea and stops that loops when it finds chai 
// store all teas chai in a new array named selectedteaslet 

let teas = ["green tea", "black tea", "chai", "oolong tea"];

let selectedteas = [];

for (let i = 0; i < teas.length; i++) {

    if( teas[i] === "chai") {
        break;
    }   
    selectedteas.push(teas[i]);
}

console.log(selectedteas);


//2 write a for loop that loops through the array london new york, paris, tokyo and skips the loop when it finds paris store all cities except paris in a new array named vistiedcities

let cities = ["london", "new york", "paris", "berllin"];
let visitedcities = [];

for (let i = 0; i < cities.length; i++) {
     
    if (cities[i] === "paris" || cities[i] === "paris") {   // if (cities[i] === "paris") { eda abr dahkta lagbo amr code e 2 bar paris check korar dorkar nai
        continue;
    }
    visitedcities.push(cities[i]);   // visitedcities = visitedcities + cities[i]
}

console.log(visitedcities);


//3 questions and stop to iterate through the array 1 2 3  4 5 and stop when the numderis foound 
// store all numder before 3 in a new array named smallnumders

let numder = [1, 2, 3, 4, 5];
let smallnumders = [];  
// for (let i = 0; i < numder.length; i++) { edat for loop use korlam na karon amra array er moddhe theke value gula niye kaj kortesi, for in loop use kora jabe na karon for in loop te index gula niye kaj kora hoy
for  (const num of numder) {  // for of loop use korlam karon amra array er moddhe theke value gula niye kaj kortesi, for in loop use kora jabe na karon for in loop te index gula niye kaj kora hoy
     
    if (num === 4) {
        break;  // numder er moddhe 4 paile loop ta stop kore dibe, ar jodi continue use kora hoto tahole 4 ke skip kore baki numder gulo smallnumders array te push korto
    }
    smallnumders.push(num);
}  
console.log(smallnumders);


//4 use a for of loop to  iterate through the array chai green tea herbal tea black tea and skip the herbal tea
// store all other tesa in an array named preferredteas

let tea = ["chai", "green tea", "herbal tea", "black tea"];

