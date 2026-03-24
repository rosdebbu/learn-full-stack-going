

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


//3 . 