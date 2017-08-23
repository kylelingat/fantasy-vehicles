class Vehicle {
  constructor(make, color, type) {
    this.make = make;
    this.color = color;
    this.type = type;
  }

  get VehicleDetails() {
    return `Your vehicle is a ${this.type}, made by ${this.make}, and is ${this.color}`;
  }

  set vehicleColor(vehicleColor) {
    this.color = vehicleColor;
  } 
}


class SuperCar extends Vehicle {
  constructor(make, color, type, topSpeed, cost) {
    this.make = make;
    this.color = color;
    this.type = type;
    this.topSpeed = topSpeed;
    this.cost = cost;
  }

  get superCarDetails() {
    return VehicleDetails();
  }
}



let car = new Vehicle('Toyota', 'Silver', 'Tacoma')

console.log(car.VehicleDetails)
console.log(car.superCarDetails)