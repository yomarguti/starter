import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((res) => {
  const todo: Todo = res.data;
  const { id, completed, title } = todo;
  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
  The Todo with ID: ${id}
  Has a title of: ${title}
  Is it finished: ${completed}
  `);
};

class Car {}

//----------Type annotations
let apples: number = 10;
let nothing: undefined = undefined;
let now: Date = new Date();
let colors: string[];
const myCar: Car = new Car();
let point: { x: number; y: number } = { x: 3, y: 10 };

//-functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

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
