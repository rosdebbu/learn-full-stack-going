

function maketea(typeoftea) {
    return `making ${typeoftea} tea`;
    console.log(test);
}

let greet = maketea("green tea");
console.log(greet);


// ceate a function named order tea that takes one parameter teatypes inside the funcation , create another function named confirmorder
// that return a message likr "order " from within orderTea and retun the reslut 
//2
 
function ordertea(teatype) {
    function conformorder() {
        return 'order confirmed for chai';
    }
    return conformorder();
}

let orderconfirmation = ordertea("chai");
console.log(orderconfirmation);


//3 . write an array function calatetotal that takes two parametes price and quntity the funcation should retun the total cost by multiplying 
// the prive and quwality and store the resklut ina avariable named totacost

//function geet () {  // regular function declaration 

//const greet = () => {}   // => is used to define an arrow function

const calculatetotal = (price, quantity) => {        // => direct amna use kora jai na
    return price * quantity;
}
let totalcost = calculatetotal(499 * 100);

console.log(totalcost);

// write a function named processteaoder. that takes another function maketea as a parameer and call it 
// with the argumrnt earl gray return the result of calling maketea

function maketea (typeoftea) {
    return `making ${typeoftea} tea`;
}

function processteaoder (teafuntion) {
          return teafuntion ("earl gray");
}

let order =processteaorder(maketea);
console.log(order);





// 5
// write a function named createteamaker that takes a parameter teamname and return a funtion. the returned function should take
// one parameter , teatype and return a message lake making green tea 
// store the retured funtion in a varible named

function createteamaker (name) {
    let score = 100;
    return function (teatype) {
        return `making ${teatype} ${name} ${score}`;
    };
}
 
let teamaker = createteamaker("debjit das");
let result = teamaker("green tea");
console.log(result);

