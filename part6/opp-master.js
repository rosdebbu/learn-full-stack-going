let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    start: function()
   {
      return `The ${this.make} car got started in ${this.year}`;
},
};

//console.log(car.start());


function Person (name, age) {
    this.name = name;
    this.age = age;
}