// 1. decelre an array named teaflavour that contains the string green tea black tea and lemon tea

let teaflavors = ["green tea", "black tea", "oolong tea"];

let teaE1 = new Array("green tea", "black tea", "oolong tea");
// acess the first elemnts for the arrat an store it 

const firstTea = teaflavors[0];
console.log(firstTea);

// 2. declore array name citites contating london tokya paris and new york.

let cities = ["london", "tokyo", "paris", "new york"];

// acess the third element from the array and store it in a variable named  favoritiescity

const favoriteCity = cities[2];
console.log(favoriteCity);

// 3. you have aray name teatypes containing herbal tea white tea masla chai 

let teatypes = ["herbal tea", "white tea", "masala chai"];
// changes the second element of the array to "jasmine tea"
teatypes[1] = "jasmine tea";
console.log(teatypes);


// 4. declore an array named citiesvisited containing mumbai and sydney

let citiesvisited = ["mumbai", "sydney"];

// add the city berlin to the array using the push method

citiesvisited.push("berlin");
console.log(citiesvisited); // push oi hoisa best way to add element array te, push method ar maddhome array ar last a element add hoi
console.log(citiesvisited.length);


// 5. you have an array named teaorders with chai iced tea, matcha and earl gray tea


let teaorders = ["chai", "iced tea", "matcha", "earl gray tea"];

// remove the last element the array using the pop methods and store it in the lastorder variable

const lastOrder = teaorders.pop();
console.log(teaorders);
console.log(lastOrder);

//6. you have an array popularteas contaning green tea oolong tea and chai

let popularteas = ["green tea", "oolong tea", "chai"];
// create a soft copy of this array named softcopyteas

let softcopyteas = popularteas;
popularteas.pop();
console.log(softcopyteas);
console.log(popularteas);

//7. you ahve an array named topcities containing berlin singapore and new york. 

let topcities = ["berlin", "singapore", "new york"];
// ceate a hard copy of this array named hardcopycities
 let hardcopycities = [...topcities];
//let hardcopycities = topcities.slice();  // realy oi slice use hoi eda yana
topcities.pop();
console.log(topcities);
console.log([...hardcopycities]); 

//8 you have two array europeancities containig paris and rome and asiancities contating tokyo and bangkok

let europeancities = ["paris", "rome"];
let asiancities = ["tokyo", "bangkok"];
// merge these two arrays into a new array named worldcities
let worldcities = [...europeancities, ...asiancities];
console.log(worldcities);

// you have an array array teamenu containing masala chai oolong tra green tea earl gray

let teamenu = ["masala chai", "oolong tea", "green tea", "earl gray"];

// fing the leagth of the array and store it 

let menulength = teamenu.length;
console.log(menulength);

//10 . you have an array named citybucketlist containig kyoto london cape town vancouver 
// check inlondon is an array and stored in  a varble named islondoninlist

let citybucketlist = ["kyoto", "london", "cape town", "vancouver"];
let islondoninlist = citybucketlist.includes("london");
console.log(islondoninlist);

//imp* 