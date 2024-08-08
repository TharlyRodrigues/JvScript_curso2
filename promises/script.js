//  create promise

const promise = new Promise((resolve, reject) => {
  //Do some async task
  setTimeout(() => {
    console.log("async task complete");
    resolve();
  }, 1000);
});
const getUser = new Promise((resolve, reject) => {
  //Do some async task
  setTimeout(() => {
    let erro = true;
    if (!erro) {
      resolve({ name: "tharly", age: 29 });
    } else {
      reject("erro: something went wrong");
    }
  }, 1000);
});

getUser
  .then((user) => console.log(user))
  .catch((erro) => console.log(erro))
  .finally(() => console.log("the promise has been resolved or rejected"));

console.log("hello from global scope");
