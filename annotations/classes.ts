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
  constructor(private wheels: number, color: string) {
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

const car = new Car(4, 'green');
car.stop();
car.drive();
