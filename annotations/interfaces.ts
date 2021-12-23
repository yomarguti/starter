interface Vehicle {
  name: string;
  year: Date;
  isBroken: boolean;
  summary(): string;
}

const oldCivic: Vehicle = {
  name: 'civic',
  year: new Date(),
  isBroken: true,
  summary() {
    return 'Name: ' + this.name;
  },
};

const printVehicle = (vehicle: Vehicle) => {
  console.log(vehicle.name);
  console.log(vehicle.year);
  console.log(vehicle.isBroken);
};

printVehicle(oldCivic);
