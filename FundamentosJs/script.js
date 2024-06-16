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
*/

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
