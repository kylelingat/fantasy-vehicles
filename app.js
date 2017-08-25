class Vehicle {
  constructor(make, color, type) {
    this.make = make;
    this.color = color;
    this.type = type;
  }

  get VehicleDetails() {
    return `Your vehicle is a ${this.type}, made by ${this.make}, and is ${this.color} `;
  }

  set vehicleColor(vehicleColor) {
    this.color = vehicleColor;
  } 
}


class SuperCar extends Vehicle {
  constructor(make, color, type, topSpeed, cost) {
    super(make, color, type);
    this.make = make;
    this.color = color;
    this.type = type;
    this.topSpeed = topSpeed;
    this.cost = cost;
  }

 get superCarDetails() {
    return super.VehicleDetails + `with a top speed of ${this.topSpeed} and a cost of ${this.cost} `;
  }

  set priceTag(cost) {
    this.cost = cost;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, color, type, topSpeed, cost) {
    super(make, color, type);
    this.make = make;
    this.color = color;
    this.type = type;
    this.topSpeed = topSpeed;
    this.cost = cost;
  }

  get bikeDetails() {
    return super.VehicleDetails + `with a top speed of ${this.topSpeed} and a cost of ${this.cost} `;
  }

  set bikeSpeed(topSpeed) {
    this.topSpeed = topSpeed;
  }
}



let car = new Vehicle('Toyota', 'Silver', 'Tacoma',);
let supahCar = new SuperCar('Me', 'Black', 'Lambo', '90mph', '$30');
let bike = new Motorcycle('Ducatti', 'Black & Red', 'Motorcycle', '130mph', '$3.25')
console.log(car.VehicleDetails);
console.log(supahCar.superCarDetails);
console.log(bike.bikeDetails);



