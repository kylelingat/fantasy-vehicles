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
  constructor(make, color, type, topSpeed, cost, attractionLevel, techLevel) {
    super(make, color, type);
    this.make = make;
    this.color = color;
    this.type = type;
    this.topSpeed = topSpeed;
    this.cost = cost;
    this.attractionLevel = attractionLevel;
    this.techLevel = techLevel;
  }

 get superCarDetails() {
    return super.VehicleDetails + `with a top speed of ${this.topSpeed}, a cost of ${this.cost}, an attraction level of ${this.attractionLevel} and a tech level of ${this.techLevel} `;
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
let lambo = new SuperCar('Me', 'Black', 'Lambo', '90mph', '$30', '90000', '4000');
let bike = new Motorcycle('Ducatti', 'Black & Red', 'Motorcycle', '130mph', '$3.25')
console.log(car.VehicleDetails);
console.log(lambo.superCarDetails);
console.log(bike.bikeDetails);



