let computer = {
  cpu: 12,
};

let lenovo = {
  screem: "hd",

  __proto__: computer,
};
let johnhardware = {};

// console.log('lenovo', lenovo.__proto__);


//console.log('tesla', Object.getPrototypeOf(tesla));

let genericCar = { tyres: 4 };

let tesla = {
  driver: "Ai",
};

Object.setPrototypeOf(tesla, genericCar);

// console.log("tesla", Object.getPrototypeOf(tesla));

