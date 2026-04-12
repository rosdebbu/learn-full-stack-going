function person8(name, age) {
     this.name = name;
     this.age = age;
}
function Car(make, model) {
    this.make = make;
    this.model = model;
}

let myCar = new Car ("Toyota", "Corolla");
//console.log(myCar);

let myNewCar = new Car ("Honda", "Civic");
//console.log(myNewCar);

function Tea(type){
    this.type = type;
    this.describe = function() {
        return `This is a ${this.type} tea.`;
    }
}

let lomonTea = new Tea("Lemon");
//console.log(lomonTea.describe());


function Animal(species) {
    this.species = species;

}

Animal.prototype.sound = function() {
    return `${this.species} makes a sound.`;
}

let cat = new Animal("Cat");
console.log(cat.sound());



function Drink(name){
    if(!new.target) { // Check if the function is called with 'new'
        throw new Error("Drink must be called with 'new'"); 
    }
    this.name = name;
}

let tea = new Drink("Green Tea");
let coffie = new Drink("cold Coffee");

console.log(tea);
console.log(coffie);

