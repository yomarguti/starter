class Vehicle {
  color: string;
  constructor(color: string) {
    this.color = color;
  }

  drive(): void {
    console.log('Runnnnn!');
  }
  honk(): void {
    console.log('Beep!');
  }
}

class Car extends Vehicle {
  constructor(color: string) {
    super(color);
  }
  stop(): void {
    console.log('Stopping!!!!');
  }
  drive(): void {
    console.log('Vroom!');
  }
}

const vehicle = new Vehicle('red');

vehicle.drive();

const car = new Car('green');
car.stop();
car.drive();
