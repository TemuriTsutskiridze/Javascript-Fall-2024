// 1. დაამატეთ ობიექტში  ფუნქცია სახელად  sayHello რომელიც დაპრინტავს ობიექტში სახელის value-ს.
/*
let person = {
  name: "Temo",
};

person.sayHello = function () {
  console.log(this.name);
};

person.sayHello();
*/
// 2. წაშალეთ ასაკის property.

/*
const person = {
  name: "Temo",
  age: 20,
};

delete person.age;

console.log(person);
*/

// 3. დაადგინეთ, აქვს თუ არა ობიექტს gender ფროფერთი. თუ არ აქვს, მაშინ შექმენით მეთოდი რომელიც იმავე ობიექტს gender ფროფერთის შეუქმნის.

/*
const person = {
  name: "Temo",
};

if (!person.hasOwnProperty("gender")) {
  person.addGender = function (gender) {
    this.gender = gender;
  };
  person.addGender("Male");
}

console.log(person);
*/

// 4. გვაქვს სახელების მასივი. შექმენით ობიექტი, სადაც key-value წყვილებად იქნება სახელები და მათი რაოდენობები მასივში.

/*
const names = [
  "Temo",
  "Giorgi",
  "Nika",
  "Temo",
  "Giorgi",
  "Nika",
  "Temo",
  "Giorgi",
  "Nika",
  "Beqa",
];


// const namesObject = (names) => {
//   let nameCounter = {};
//   for (let name of names) {
//     if (nameCounter[name]) {
//       nameCounter[name]++;
//     } else {
//       nameCounter[name] = 1;
//     }
//   }

//   return nameCounter;
// };


const namesObject = (names) =>
  names.reduce((nameCounter, name) => {
    if (nameCounter[name]) {
      nameCounter[name]++;
    } else {
      nameCounter[name] = 1;
    }
    return nameCounter;
  }, {});

console.log(namesObject(names));
*/
// 5. Object Transformation: Write a function that takes an array of objects and transforms them into a single object. The transformation should use a specific property of each object as the key and another property as the value. For example, given the array [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }], and using the id property as the key and the name property as the value, the function should return { 1: 'Alice', 2: 'Bob' }.

/*
// const tranformObject = (arr) => {
//   let obj = {};

//   for (let item of arr) {
//     obj[item.id] = item.name;
//   }

//   return obj;
// };

const tranformObject = (arr) =>
  arr.reduce((obj, item) => {
    obj[item.id] = item.name;
    return obj;
  }, {});

console.log(
  tranformObject([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ])
);
*/

// 6. Object Prototype Extension: Write a function that extends an object's prototype with additional methods. The additional methods should perform specific operations on the object's properties. For example, extend the Array prototype with a method called sum() that calculates the sum of all elements in the array.

/*
let arr = [1, 2, 3, 4, 5];

Array.prototype.sum = function () {
  //   let sum = 0;
  //   for (let item of this) {
  //     sum += item;
  //   }
  //   return sum;
  return this.reduce((sum, item) => sum + item, 0);
};
let arr1 = [1, 2, 3, 4, 5, 1000];
console.log(arr1.sum());
*/

// 7. Implement a Todo System Using JavaScript Prototypes

/*
Requirements:

1. Todo Object:

- Create a Todo constructor function using prototypes.
- Each todo should have the following properties:
    - id: A unique identifier for each todo (you can generate this using a counter or timestamp).
    - title: The title/description of the todo.
    - completed: A boolean value indicating whether the todo is completed (false by default).
- The Todo constructor should have a method toggleComplete to mark a todo as completed or not.





2. TodoManager Object:

- Create a TodoManager constructor function using prototypes.
- This object should maintain an array of todos in a property called todos.
- The TodoManager should have the following methods:
    - addTodo(title): Adds a new todo with the specified title to the todos array.
    - removeTodo(id): Removes a todo by its id.
    - completeTodo(id): Marks the todo as completed by its id using the toggleComplete method of the Todo.
    - filterTodos(status): Filters todos based on the completion status. The possible values of status should be:
        - 'all': Show all todos.
        - 'completed': Show only completed todos.
        - 'incomplete': Show only incomplete todos.
    - getTodos(): Returns the list of all todos.



3. Extra Challenge (Optional):

- Extend the functionality to allow searching todos by title.
- Implement sorting the todos by the date they were created (you can add a createdAt property to the Todo object).
- Add a clearCompleted method to remove all completed todos.    
*/

// 1.

function Todo(id, title) {
  this.id = id;
  this.title = title;
  this.completed = false;
  this.createdAt = new Date();
}

Todo.prototype.toggleComplete = function () {
  this.completed = !this.completed;
};

const todo1 = new Todo(1, "Buy Milk");
const todo2 = new Todo(2, "Buy Bread");

console.log(todo1);
todo1.toggleComplete();
console.log(todo1);

// 2.

function TodoManager() {
  this.todos = [];
}

TodoManager.prototype.addTodo = function (id, title) {
  let newTodo = new Todo(id, title);
  this.todos.push(newTodo);
};

TodoManager.prototype.removeTodo = function (id) {
  this.todos = this.todos.filter((todo) => todo.id !== id);
};

TodoManager.prototype.completeTodo = function (id) {
  let todo = this.todos.find((todo) => todo.id === id);
  todo.toggleComplete();
};

TodoManager.prototype.filterTodos = function (status) {
  switch (status) {
    case "all":
      return this.todos;
    case "completed":
      return this.todos.filter((todo) => todo.completed);
    case "incomplete":
      return this.todos.filter((todo) => !todo.completed);
    default:
      return [];
  }
};

TodoManager.prototype.getTodos = function () {
  return this.todos;
};

TodoManager.prototype.searchTodos = function (title) {
  const lowerTitle = title.toLowerCase();
  return (
    this.todos.find((todo) => todo.title.toLowerCase() === lowerTitle) ||
    "Todo not found"
  );
};

TodoManager.prototype.sortTodos = function (order) {
  return this.todos.sort((a, b) => {
    if (order === "asc") {
      return a.createdAt - b.createdAt;
    } else if (order === "desc") {
      return b.createdAt - a.createdAt;
    }
  });
};

TodoManager.prototype.clearCompleted = function () {
  this.todos = this.todos.filter((todo) => !todo.completed);
  return this.todos;
};

const todoManager = new TodoManager();
console.log(todoManager);
todoManager.addTodo(3, "Buy Milk");
todoManager.addTodo(4, "Buy Bread");
todoManager.addTodo(5, "Buy Egg");
todoManager.addTodo(6, "Buy Meat");

console.log(todoManager.todos);

todoManager.removeTodo(todo1.id);

console.log(todoManager.todos);
todoManager.completeTodo(6);

console.log(todoManager.todos);

console.log(todoManager.filterTodos("all"));

// 3.

console.log(todoManager.searchTodos("fewfwk"));

console.log(todoManager.sortTodos("asc"));

console.log(todoManager.clearCompleted());
