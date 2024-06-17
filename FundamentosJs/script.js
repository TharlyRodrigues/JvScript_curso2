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
*/

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
