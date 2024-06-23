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
*/
