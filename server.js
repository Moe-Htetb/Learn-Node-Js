const fs = require("fs");
//fs ==> file system
const filePath = "./todo.json";
const command = process.argv[2];
const value = process.argv[3];

// //argv ==> argument vector
// console.log(` command is ${command}  value is${value}`); //console.log(command);

const checkTodo = () => {
  try {
    const buffer = fs.readFileSync(filePath);
    // console.log(buffer);
    const bufferString = buffer.toString();
    // console.log(bufferString);
    const todos = JSON.parse(bufferString);
    //json.parse() ==> convert string to object or array
    return todos;
  } catch (error) {
    console.log(error);
    return [];
  }
};
const addTodo = (todoValue) => {
  const todos = checkTodo();
  todos.push({ todo: todoValue });
  fs.writeFileSync(filePath, JSON.stringify(todos));
  //json.stringify() ==> convert object or array to string
  console.log(todos, "added");
};
const readTodo = () => {
  const todos = checkTodo();
  todos.forEach((todo) => {
    console.log(todo.todo);
  });
};
switch (command) {
  case "add":
    addTodo(value);
    break;
  case "read":
    readTodo();
    break;

  default:
    console.log("invalid command");
}
