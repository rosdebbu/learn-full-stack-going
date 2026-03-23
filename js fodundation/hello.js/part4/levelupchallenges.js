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

let teatype = ["chai", "green tea", "herbal tea", "black tea"];

let preferredteas = [];

for (const tea of teatype) {
    if (tea === "herbal tea") {
        continue;
    }
    preferredteas.push(tea);
}
console.log(preferredteas);
  

//5 use a for in loop to loop through an object containing city populations
 // stop the lopp when the population of berlin is new object previous cities populations in a new object named citypopulations

 let citiypopulations = {
    london: 9000000,
    newyork: 8000000,
    paris: 2000000,
    berlin: 3000000,
 };
 
 let citypopulations = {};

  //console.log(Object.hasOwn(citiypopulations));

   for (const city in citiypopulations) {
    if (city === "berlin") {
        break;
    }
    // key = value 
  citypopulations[city] = citiypopulations[city];  // citypopulations = citypopulations + city + citiypopulations[city]

   }
   
   console.log(citypopulations);



   // 6. use a for in loop  to loop through an object contains city populations
   // skip any cities with a population below 3 million store the rest in a new object named largecities

   let worldcities = {
    sydney: 9000000,
    newyork: 8000000,
    paris: 2000000,
    berlin: 3000000,
 };

let largecities = {};

for (const city in worldcities) {
    if (worldcities[city] < 3000000) {
        continue;
    }
    largecities[city] = worldcities[city];
}

console.log(largecities);


//7 write a foreach loop that  iterates through the array earl gray green tea chai oolong tea 
// dtop the loop when chai is found store and store all previous tea types in an array named avaliableteas


let teacollection = ["earl gray", "green tea", "chai", "oolong tea"];
let avaliableteas = [];

teacollection.forEach (function(tea) {  // output shob it iteamd alada hoiya ja 
    if (tea === "chai") {
        return; // how its different from break and continue in for loop, for loop e break use korle loop ta stop hoye jabe ar continue use korle oi iteration ta skip kore next iteration e chole jabe, kintu forEach loop e return use korle oi iteration ta skip kore next iteration e chole jabe, ar forEach loop e break use kora jabe na karon forEach loop e break use korle error dibe
    }   // reatun can be use but in foreach loop 
    
    avaliableteas.push(tea);
});
console.log(avaliableteas);

 //function  hello (){   //functions 
  //  console.log("hello world");

  //8 write a for loop that iterates thruogh the array berlin tokyo sydney paris 
  // skip sydney and store the other cities in new array named traveldcities

  let worldcities2 = ["berlin", "tokyo", "sydney", "paris"];  // 4 funations fired at a time but we want to skip sydney and store the other cities in new array named traveldcities, so we use forEach loop and return statement to skip sydney and store the other cities in new array named traveldcities, if we use for loop and break statement then the loop will stop when it finds sydney and the rest of the cities will not be stored in new array named traveldcities, if we use for loop and continue statement then the loop will skip sydney and store the rest of the cities in new array named traveldcities but it will also check for sydney in every iteration which is not efficient, so we use forEach loop and return statement to skip sydney and store the other cities in new array named traveldcities which is more efficient.
  let traveldcities = [];

  worldcities2.forEach(city => {   // => is funstion only use to use 
    if (city === "sydney") { // why syndey is mention and and remove from output, because we want to skip sydney and store the other cities in new array named traveldcities.  what the === is use than the sydney is remove from the output, if we use == than the sydney is not remove from the output, because == is a loose equality operator that does type coercion, while === is a strict equality operator that does not do type coercion.  so if we use == than the sydney is not remove from the output, because == will convert the string "sydney" to a boolean value true and then compare it with the string "sydney" which will also be converted to true, so the condition will be true and the loop will continue to the next iteration without skipping sydney.  but if we use === than the condition will be false because "sydney" is not strictly equal to "sydney" (because they are different types), so the loop will skip sydney and continue to the next iteration.
        return;
    }
    traveldcities.push(city);
  } );
    console.log(traveldcities);


    // 9 write a for loop that iterates thriugh the array 2, 5, 7, 9 
    // skip the value of 7 and multy the rest by 2 . store the result in a new array named doublednumbers

 let numbers = [2, 5, 7, 9];
    let doublednumbers = [];

    for (const number of numbers) {
        if (number === 7) {
            continue;
        }
        doublednumbers.push(number * 2);
    }
    console.log(doublednumbers);

    // edar liga aro akta menthod as kitu ota o imp asa use korta lagbo


    //10 use a for-of loop to iterate through the array 
    // chai green tea black tea jasmine tea herba; tea 
    // and store when the length of the current tea name is greater than 10.
    // store the teas iterated over in a array named shortteas

    let myteas = ["chai", "green tea", "black tea", "jasmine tea", "herbal tea"];
    let shortteas = [];

    for (const tea of myteas) {
        if(tea.length > 10) {
            break;
        }
        shortteas.push(tea);
    }
    console.log(shortteas);
    
    // why in jasmine tea and herbal tea is greater than 10, because the length of the string "jasmine tea" is 11 and the length of the string "herbal tea" is 11, so both of them are greater than 10, 
    // so the loop will stop when it finds "jasmine tea" and "herbal tea" and the rest of the teas will not be stored in the array named shortteas.
// eya na tomar each word count kora jei. 


