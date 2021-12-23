interface WheelVehicle {
  name: string;
  year: Date;
  isBroken: boolean;
  summary(): string;
}

const oldCivic: WheelVehicle = {
  name: 'civic',
  year: new Date(),
  isBroken: true,
  summary() {
    return 'Name: ' + this.name;
  },
};

const printVehicle = (vehicle: WheelVehicle) => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.isBroken);
};

printVehicle(oldCivic);
