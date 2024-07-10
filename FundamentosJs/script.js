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


if (true) {
  console.log("thi is true");
}

if (false) {
  console.log("this is NOT true");
}

const x = 10;
const y = 5;
if (x > y) {
  console.log(`${x} is greater than ${y}`);
}
if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
}

if (x === y) {
  console.log(`${x} is equal to ${y}`);
} else {
  console.log(`${x} is NOT equal to ${y}`);
}

if (x !== y) {
  const z = 20;
  console.log(`${z} is 20`);
}

// shorthand if

if (x >= y) {
  console.log(`${x} is greater than or equal to ${y}`);
  console.log("this is treu");
} else console.log("this is NOT false");


const d = new Date(10, 30, 2022, 9, 0, 0);
const hrs = d.getHours();

if (hrs) {
  console.log("good morning");
} else if (hrs < 18) {
  console.log("good afternoon");
} else console.log("good Night");

// nested if

if (hrs < 12) {
  console.log("good morning");

  if (hrs === 6) {
    console.log("wake up");
  }
} else if (hrs < 18) {
  console.log("good afternoon");
} else {
  console.log("good Night");
  if (hrs >= 20) {
    console.log("zzzz");
  }
}

if (hrs >= 7 && hrs < 15) {
  console.log("It is work time ");
}

if (hrs === 6 || hrs === 20) {
  console.log("brush your time ");
}

const d = new Date(2022, 1, 10, 8, 0, 0);
const month = d.getMonth();
const hrs = d.getHours;

switch (month) {
  case 1:
    console.log("Jar");
    break;
  case 2:
    console.log("Fer");
    break;
  case 3:
    console.log("Mar");
  default:
    console.log("não é Jar,Fer,Mar");
}

switch (true) {
  case hrs < 12:
    console.log("bom dia");
    break;
  case hrs < 18:
    console.log("boa tarde");
    break;
  default:
    console.log("boa noite");
}


function calculator(num1, num2, operator) {
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      result = "Invalid Operator";
  }
  console.log(result);
  return result;
}

calculator(200, 10, "+");


// const email = "teste@test.com";
// if (email) {
//   console.log("You passed in an email");
// }

const x = null;

if (x) {
  console.log("this is truthy");
} else {
  console.log("this is falsy");
}
console.log(Boolean(x));



// truthy and false caveats

const children = 3;

if (!isNaN(children)) {
  console.log(`you have ${children} children`);
} else {
  console.log("please enter number of children");
}

// checagem de array

const post = ["post one"];

if (post.length > 0) {
  console.log("list post");
} else {
  console.log("Not post");
}

// checagem de objetos

const user = {
  name: "tharly",
  age: 29,
};

if (Object.keys(user).length > 0) {
  console.log("list user");
} else {
  console.log("not user");
}

// operadores
console.log(10 < 20 && 30 > 15 && 40 > 30); // todos tem q ser vdd
console.log(10 > 20 || 30 > 15); // apenas um vdd

// exemplos &&

let a;

a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && " " && 0 && 20;

console.log(a);

const post1 = [];
post1.length > 0 && console.log(post1[0]);

// exemplos de ||

let b;

b = 10 || 20;
b = 0 || 20;
b = 0 || null || "" || undefined;

console.log(b);

// exemplos ? - returns

let c;

c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = "" ?? 30;
console.log(c);


let a = 0;

// if (!a) {
//   a = 10;
// }

// a = a || 10;

a ||= 10;

console.log(a);

let b = 10;

if (b) {
  b = 20;
}

b = b & 20;

b &= 20;
console.log(b);

let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;
c ??= 20;
console.log(c);


// exercício de fixação

const age = 20;

if (age >= 18) {
  console.log("voce e maior de idade");
} else {
  console.log("voce nao é de maior ");
}

// formula 02

age >= 18 ? console.log("maior") : console.log("menor");

//  exe2

const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? "maior" : "menor";
console.log(canVote);
console.log(canVote2);

// exe3
const auth = true;

// const redirect = auth
//   ? (alert("seja bem vindo ao dashboard"), "/dashboard")
//   : (alert("access Denied"), "login");

// console.log(redirect);

// exe4

auth && console.log("seja bem vindo ao dashboard");


// for loops entendendo loops

// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   statement;

for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log("meu numero e 7");
  } else {
    console.log("number " + i);
  }
}

// nested for loops

for (let i = 0; i <= 10; i++) {
  console.log("number " + i);
  for (let j = 0; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}


// loops em array

const names = ["tharly", "Thiago", "tamires", "kaduu"];

for (let i = 0; i < names.length; i++) {
  if (i === 2) {
    console.log(names[i] + " is the best");
  } else {
    console.log(names[i]);
  }
}


// for (let i = 0; i <= 20; i++) {
//   if (i === 15) {
//     console.log("breaking");
//     break;
//   }
//   console.log(i);
// }

for (let i = 0; i <= 20; i++) {
  if (i === 13) {
    console.log("continue 13...");
    continue;
  }
  console.log(i);
}


let i = 1;

// while (i <= 20) {
//   console.log("number " + i);
//   i++;
// }

// const arr = [10, 20, 30, 40];

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// while (i <= 5) {
//   console.log("números" + i);
//   let j = 1;
//   while (j <= 5) {
//     console.log(`${i} * ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

do {
  console.log("number" + i);
  i++;
} while (i <= 20);


// for loop

// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }

// loop while

let j = 1;

while (j <= 100) {
  if (j % 3 === 0 && j % 5 === 0) {
    console.log("FizzBuzz");
  } else if (j % 3 === 0) {
    console.log("fizz");
  } else if (j % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(j);
  }
  j++;
}


const items = ["books", "table", "chair", "kite"];

const users = [
  {
    name: "tharly",
  },
  { name: "tamires" },
  { name: "thiago" },
];

// for (let i = 0; i < items.length; i++) {
//   console.log(items[i]);
// }

// for (const item of items) {
//   console.log(item);
// }

for (const user of users) {
  console.log(user.name);
}


// loops over strings

const str = "hello world";

for (const letter of str) {
  console.log(letter);
}

// loops map

const map = new Map();
map.set("name", "tharly ");
map.set("age", "29");

for (const [key, value] of map) {
  console.log(key, value);
}


const colorObj = {
  color1: "red",
  color2: "blue",
  color3: "pink",
  color4: "green",
};

for (const key in colorObj) {
  console.log(key, colorObj[key]);
}

const colorArr = ["red", "blue", "green"];

for (const key in colorArr) {
  console.log(colorArr[key]);
}



const socials = ["facebook", "instagram", "twitter", "LinkedIn"];

// socials.forEach(function (items) {
//   console.log(items);
// });

// socials.forEach((items) => {
//   console.log(items);
// });

// socials.forEach((item, index, arr) => console.log(`${item} - ${index}`, arr));
//
function logSocials(socials) {
  console.log(socials);
}

// socials.forEach(logSocials);

const socialObj = [
  { name: "twitter", url: "https://twitter.com" },
  { name: "facebook", url: "https://facebook.com" },
  { name: "instagram", url: "https://instagram.com" },
  { name: "linkedIn", url: "https://linkedIn.com" },
];

socialObj.forEach((item) => console.log(item.url));


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const eveNumbers = numbers.filter(function (number) {
//   return number % 2 === 0;
// });

// const eveNumbers = numbers.filter((number) => number % 2 === 0);

// console.log(eveNumbers);

let eveNumbers = [];

numbers.forEach((number) => {
  if (number % 2 === 0) {
    eveNumbers.push(number);
  }
});

console.log(eveNumbers);


const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Technology", start: 1989, end: 2010 },
  { name: "Company Five", category: "Finance", start: 2009, end: 2014 },
  { name: "Company Six", category: "Retail", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

// Exemplo de como iterar sobre as empresas e imprimir informações sobre cada uma

const retaiCompanies = companies.filter(
  (company) => company.category === "Retail"
);

console.log(retaiCompanies);

// anos 1980 / 20005

const earlyCompanies = companies.filter(
  (company) => (company.start >= 1980) & (company.start <= 2005)
);

console.log(earlyCompanies);

const longCompanies = companies.filter(
  (company) => (company.end = company.start >= 10)
);

console.log(longCompanies);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubleNumbers = numbers.map((number) => number * 2);

// console.log(doubleNumbers);

const doubleNumbers2 = [];

numbers.forEach((number) => {
  doubleNumbers2.push(number * 2);
});

// console.log(doubleNumbers2);

const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Technology", start: 1989, end: 2010 },
  { name: "Company Five", category: "Finance", start: 2009, end: 2014 },
  { name: "Company Six", category: "Retail", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
];

const companyNames = companies.map((company) => company.name);

// console.log(companyNames);

// const company2 = [];

// companies.forEach((company) => {
//   company2.push(company.name);
// });

// console.log(company2);

// criação de uma array para o nome e categoria

const companyInfo = companies.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});

// console.log(companyInfo);

// criação de um array com o anos das companias

const companyYears = companies.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + " years",
  };
});

// console.log(companyYears);

const squareAndDouble = numbers
  .map((number) => Math.sqrt(number))
  .map((sqrt) => sqrt * 2);

// console.log(squareAndDouble);

const numbersDouble = numbers
  .filter((number) => number % 2 === 0)
  .map((number) => number * 2);

console.log(numbersDouble);

*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const sum = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log(sum);

const sum1 = numbers.reduce((acc, curr) => acc + curr, 0);

console.log(sum1);

const sum3 = () => {
  let acc = 0;

  for (const cur of numbers) {
    acc += cur;
  }
  return acc;
};

console.log(sum3());

const cart = [
  { id: 1, name: "product 1", price: 130 },
  { id: 2, name: "product 2", price: 150 },
  { id: 3, name: "product 3", price: 175 },
];

const total = cart.reduce((acc, product) => acc + product.price, 0);

console.log(total);
