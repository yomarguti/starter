class Car {}

//----------Type annotations
let apples: number = 10;
let nothing: undefined = undefined;
let now: Date = new Date();
let colors: string[];
const myCar: Car = new Car();
let point: { x: number; y: number } = { x: 3, y: 10 };

//When to use type inference ---always
const aNumber = 10;

//When to use type annotations
// 1- functions return any
const objStr = JSON.stringify({ id: 25 });
const user: { id: number } = JSON.parse(objStr);

// 2 - When declare a variable on one line then initialize later
const primaryColors = ['blue', 'yellow', 'red'];
let foundColor: string;

for (let i = 0; i < primaryColors.length; i++) {
  if (primaryColors[i] === 'red') {
    foundColor = primaryColors[i];
  }
}

// 3 - type can be infered
const myColors = ['blue', 'yellow', 'red'];
let theColor: string | boolean = false;

for (let i = 0; i < myColors.length; i++) {
  if (myColors[i] === 'red') {
    theColor = myColors[i];
  }
}

//-Functions
//always type annotations on functions

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

function divide(a: number, b: number): number {
  return a / b;
}

const multiply = function (a: number, b: number): number {
  return a * b;
};
