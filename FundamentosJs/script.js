/*
// console.log(100);

let primeiroNome = "tharly";
let segundoNome = "Rodrigues";

console.log(primeiroNome, segundoNome);

let ano = "1995";

console.log(ano);


// strings

const PrimeiroNome = "Tharly";

// number

const idade = 29;
const ano = 1995;

//Boolean
const hasKids = true;

// undefined
// let score;
const score = undefined;

// Null
const aptNumber = null;
const output = aptNumber;

console.log(PrimeiroNome, typeof PrimeiroNome);


// value are stored on the stack

const name = "tharly";
const age = "29";

// reference value are stored on the heap

const person = {
  name: "tharly",
  age: "29",
};

let newName = name;
newName = "Johnathan";

let newPerson = person;
newPerson.name = "bradley";
console.log(person, newPerson);
console.log(name, newName);


// type conversion

let amount = "99.5";

// change string to number
// amount = parseInt(amount);
// amount = Number(amount);
// amount = +amount;

// change number to string

// amount = amount.toString();
// amount = String(amount);

// change string to decimal

// amount = parseInt(amount);

// change number to boolean

amount = Boolean(amount);

console.log(amount, typeof amount);


// operators

let x;
x = 5 + 5;
x = 5 - 5;
x = 5 / 5;
x = 5 * 5;
x = 7 % 5;

// concatenation
x = "hello" + " " + "wold";

// exponent

// x = 2 ** 3;

// increment
x = 1;
x++;

// decrement
// x = x - 1;
x--;

// assignment operators

// x = 10;
// x -= 5;
// x *= 5;
// x /= 5;
// x %= 5;
x **= 5;


// comparison operators
x = 2 == 2;
x = 2 === "2";
x = 2 != "2";
x = 2 !== 2;

x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;

console.log(x);


// type coercion

let x;
x = 5 + "5";
x = 5 + Number("5");

x = 5 * "5";

x = 5 + null;

x = Number(null);
x = Number(true);
x = Number(false);

x = 5 + true;
x = 5 + false;

x = 5 + undefined;

console.log(x, typeof x);


// workings with strings
let x;
const name = "tharly";
const age = "29";

x = "hello, may name is " + name + "and I am " + age + " years old ";

// template literals

x = `hello my name is ${name} and i am ${age} years old`;

// strings properties and methods

const s = new String("hello world");
x = typeof s;

// monstra a quantidade de caracteres
x = s.length;
// acessando value e key

x = s[0];
x = s.__proto__;
x = s.toUpperCase();
x = s.toLowerCase();
x = s.charAt(0);
x = s.indexOf("d");
x = s.substring(4);

x = s.slice(0, 5);

x = "       hello world";
x = x.trim();

// substituir uma string
x = s.replace("world", "john");

// verificar se uma string e true ou false
x = s.includes("hello");

// dividir em caracteres

x = s.split("");
console.log(x);


// desafio

const myString = "develope";

let myNewString;
// 1

myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);

// 2
myNewString = myString[0].toUpperCase() + myString.substring(1);

// 3
myNewString = `${myString[0].toUpperCase()}${myString.substring(1)}`;

console.log(myNewString);


const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.push(0);
arr.unshift(6);
console.log(arr);

// challenge 2

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// solução 1

const arr3 = arr1.slice(0, 4).concat(arr2);

// solução
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);
arr4.push(11);
arr4.reverse();
console.log(arr4);

let x;
const person = {
  name: "tharly rodrigues",
  age: 30,
  isAdmin: true,
  address: {
    street: "rua jose Bonifácio, 1044",
    city: "Altos",
    state: "PI",
  },
  hobbies: ["musica", "esporte"],
};

x = person.name;
x = person["age"];
x = person.address.street;
x = person.hobbies[0];

// alterar propriedades do objeto
person.name = "thiago rodrigues";
person["isAdmin"] = false;

delete person.age;

person.hasChildren = true;

person.greet = function () {
  console.log(`hello, my name is ${this.name}`);
};

person.greet();

const person2 = {
  "first name": "brad",
  "last name": "Traversy",
};

x = person2["first name"];
console.log(x);


// trabalhando com números

let x;

const num = new Number(5.4567);
x = num.toString();

x = num.toString().length;

x = num.toFixed(2);

x = num.toPrecision(2);

x = num.toExponential(2);

x = num.toLocaleString("en-US");

x = num.valueOf();

x = Number.MAX_VALUE;

x = Number.MIN_VALUE;

console.log(x);


let x;

x = Math.sqrt(9);

x = Math.abs(-5);

x = Math.round(4.2);

x = Math.ceil(4.2);

x = Math.floor(4.9);

x = Math.pow(2, 3);

x = Math.max(4, 5, 6);

x = Math.min(4, 5, 3);

x = Math.random();

x = Math.floor(Math.random() * 10 + 1);

console.log(x);


// desafio 2

const x = Math.floor(Math.random() * 100 + 1);
const y = Math.floor(Math.random() * 50 + 1);
const sum = x + y;
const outSum = `${x} + ${y} =  ${sum}`;

console.log(outSum);
console.log(x, y);


let d;

d = new Date();

d = d.toString();

d = new Date(2021, 0, 12, 12, 30, 0);
d = new Date("2021-07-12T12:30:00");
d = new Date("2021/07/12 12:30:00");
d = new Date("2021/07/12 12:30:00");

d = Date.now();

d = new Date();
d = d.getTime();
d = d.valueOf();

d = new Date(16669962049745);

d = Math.floor(Date.now() / 1000);
d = console.log(d);


let x;

let d = new Date();

x = d.toString();
x = d.getTime();
x = d.valueOf();

x = d.getFullYear();

x = d.getMonth();

x = d.getMonth() + 1;

x = d.getDate();

x = d.getDay();

x = d.getHours();
x = d.getMinutes();
x = d.getSeconds();
x = d.getMilliseconds();

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;

// api para chama a date
x = Intl.DateTimeFormat("pt-BR").format(d);

console.log(x);


// array literal
const Numbers = [12, 45, 33, 29, 39, 102];

const midex = [12, "hello", true, null];

// array constructor
const fruits = new Array("apple", "grape", "orange");

x = Numbers[0];
x = Numbers[0] + Numbers[3];

x = `my favorite fruit is an ${fruits[2]}`;

// mostra a quantidade de itens do array
x = Numbers.length;

fruits[2] = "pear";

// fruits.length = 2;

fruits[3] = "strawberry";

fruits[fruits.length] = "blueberry";
fruits[fruits.length] = "peach";

x = fruits;
console.log(x);

let x;
const arr = [34, 55, 95, 20, 15];

// arr.push(100);
// arr.pop();
// arr.unshift(99);
// arr.reverse();

x = arr.includes(200);

x = arr.indexOf(340);

x = arr.slice(1, 4);

// x = arr.splice(1, 4);

// x = arr.splice(3, 1);

x = arr.splice(1, 4).reverse().toString().charAt(0);

console.log(x);


let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];

// fruits.push(berries);
// x = fruits[3][1];

const allfruits = [fruits, berries];

x = allfruits[1][0];

x = fruits.concat(berries);

// spread Operator(...)
x = [...fruits, ...berries];

// flatten array

const arr = [1, 2, [3, 4], 5, [6, 7], 8];
x = arr.flat();

// static methods on array object

x = Array.isArray("hello");

x = Array.from("123456");

const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);


// desafio com array
let x;
const arr = [1, 2, 3, 4, 5, 6];

arr.unshift(0);
arr.reverse();

// x = arr.toString();

console.log(arr);

// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];

// const arr3 = arr1.slice(0, 4).concat(arr2);
// console.log(arr3);

//  desafio 4
// Saída: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Concatena as duas arrays e cria um Set para garantir valores únicos, depois converte de volta para array
// const arr3 = [...new Set(arr1.concat(arr2))];

const arr3 = [...new Set(arr1.concat(arr2))];

const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);
console.log(arr4);

let x;

const person = {
  name: "tharly rodrigues",
  age: 29,
  isAdmin: true,
  address: {
    street: "rua jose bonifacio 1044",
    city: "são paulo",
    state: "SP",
  },
  hobbies: ["music", "sports"],
};

x = person.name;
x = person["age"];
x = person.address.state;
x = person.hobbies[0];

person.name = "thiago rodrigues";

person["isAdmin"] = false;

delete person.age;

person.hasChildren = true;

x = person;

person.greet = function () {
  console.log(`hello, my name is ${this.name}`);
};
console.log(x);


let x;

const todo = new Object();

todo.id = 1;
todo.name = "tharly rodrigues";
todo.completed = false;

x = todo;

const person = {
  address: {
    coords: {
      lat: 42.9384,
      lng: -71.3232,
    },
  },
};

x = person.address.coords.lat;

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// const obj3 = { obj1, obj2 };
// const obj3 = { ...obj1, ...obj2 };
const obj4 = Object.assign({}, obj1, obj2);

const todos = [
  { id: 1, name: "buy MIlk" },
  { id: 2, name: "Thiago MIlk" },
  { id: 3, name: "Tharly MIlk" },
];

x = todos[0].name;

x = Object.keys(todo);
x = Object.keys(todo).length;

x = Object.values(todo);

x = Object.entries(todo);

x = todo.hasOwnProperty("age");

console.log(x);


const firstName = "john";
const lastName = "Doe";
const age = "30";

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// destructuring

const todo = {
  id: 1,
  title: "Take out trash",
  user: {
    name: "Tharly",
  },
};

const { id: todoId, title, user } = todo;
console.log(todoId);

// destructure array

const Numbers = [33, 67, 33, 49];
const [first, second, ...rest] = Numbers;

console.log(first, second, rest);


const post = {
  id: 1,
  title: "post one",
  body: "this is the boy",
};

// convert to json string

const str = JSON.stringify(post);

// parse json

const obj = JSON.parse(str);

const posts = [
  {
    id: 1,
    title: "post one",
    body: "this is the boy",
  },

  {
    id: 2,
    title: "post two",
    body: "this is the boy",
  },
];

const str2 = JSON.stringify(posts);
console.log(str2);


// desafio 3

const library = [
  {
    id: "1",
    title: "the road ahead",
    author: "bill gates",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    id: "2",
    title: "steve jobs",
    author: "walter isaacson",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    id: "3",
    title: "mockingjay",
    author: "suzanne collins",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

// console.log(library);

const { title: firstBook } = library[0];

console.log(firstBook);

const libraryJson = JSON.stringify(library);
console.log(libraryJson);


function sayHello() {
  console.log("hello world");
}

sayHello();

function sumNumbers(num1, num2) {
  console.log(num1 + num2);
}

sumNumbers(5, 10);

function subtract(num1, num2) {
  return num1 - num2;

  // console.log("after the return");
}

const result = subtract(10, 2);
console.log(result, subtract(15, 8));

function registerUser(user = "bot ") {
  return user + "is registered";
}

console.log(registerUser());

function sum2(...Numbers) {
  return Numbers;
}
console.log(sum2(1, 2, 3));

function sum(...Numbers) {
  let total = 0;

  for (const num of Numbers) {
    total += num;
  }

  return total;
}
console.log(sum(1, 2, 3, 4, 5));

function sum(...Numbers2) {
  let total2 = 0;

  for (const num of Numbers2) {
    total2 += num;
  }

  return total2;
}

console.log(sum(1, 2));

// objects as params

function loginUser(user) {
  return `The user ${user.name} with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "tharly rodrigues",
};

console.log(loginUser(user));
console.log(
  loginUser({
    id: 2,
    name: "Thiago rodrigues",
  })
);

// array params
function getRandom(...arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


const x = 100;
console.log(x), "in global";

function run() {
  console.log(window.innerHeight);
  console.log(x, "in function");
}

run();
if (true) {
  console.log(x, "in block");
}

function add() {
  const x = 1;
  y = 50;
  console.log(x + y);
}

add();


const x = 100;
const foo = 1;
var bar = 2;

if (true) {
  const y = 100;
  console.log(x + y);
}

// console.log(x + y);
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// console.log(i);
//  diferença de var, let e const

if (true) {
  const a = 500;
  let b = 600;
  var c = 700;
}

console.log(c);

function run() {
  var d = 100;
  console.log(d);
}

run();
// console.log(d);
// Escopo aninhado


// Declaração vs Expressão

function addDollarsing(value) {
  return "$" + value;
}
console.log(addDollarsing(100));

const addPlusSing = function (value) {
  return "+" + value;
};

console.log(addPlusSing(200));


// function add(a, b) {
//   return a + b;
// }

// const add = (a, b) => {
//   return a + b;
// };

const add = (a, b) => a + b;

console.log(add(2, 5));

const double = (a) => a * 50;
console.log(double(10));

// para da return em um object
const creatObj = () => ({
  name: "tharly",
});

console.log(creatObj());

// para funcionar em array

const numbers = [1, 2, 3, 4];

numbers.forEach(function (n) {
  console.log(n);
});

// numbers.forEach(n) => console.log(n);
numbers.forEach((n) => console.log(n));


for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Expressões de função imediatamente invocadas iife

(function () {
  const user = "thiago";
  console.log(user);
  const hello = () => console.log("hello from the IIfe");
  hello();
})();

(function (name) {
  console.log("hello " + name);
})("tharly");

(function () {
  const user = "rodrigues";
  console.log(user);

})();


// Desafios funcionais

// function getCelsius(F) {
//   const celsius = ((F - 32) * 5) / 9;

//   if (celsius <= 0) {
//     console.log("ha temperatura esta baixa");
//   } else {
//     console.log("ha temperatura esta alta");
//   }
//   return celsius;
// }

// console.log(getCelsius(50));

const getCelsius = (F) => {
  const celsius = ((F - 32) * 5) / 9;

  if (celsius <= 0) {
    console.log("ha temperatura esta baixa");
  } else {
    console.log("ha temperatura esta alta");
  }
  return celsius;
};
console.log(getCelsius(50));

// desafio 2
// function minMax(...numbers) {
//   return numbers.join(", ");
// }

// console.log(minMax(...[1, 2, 3, 4, 5, 6]));

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5, 6]));

// desafio 3 IFI

((length, width) => {
  const area = length * width;
  const outPut = `the area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
  console.log(outPut);
})(10, 5);

*/

// entendo funções
const x = 100;
const y = 50;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);
console.log(sum1, sum2);
