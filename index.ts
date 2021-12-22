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

//Type annotations
let apples: number = 10;
let nothing: undefined = undefined;
let now: Date = new Date();
let colors: string[];
const myCar: Car = new Car();
let point: { x: number; y: number } = { x: 3, y: 10 };
