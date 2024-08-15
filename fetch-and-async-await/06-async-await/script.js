const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      name: "tharly ",
      age: 20,
    }),
      1000;
  });
});

// promise.then((data) => console.log(data));

async function getPromise() {
  const response = await promise;
  console.log(response);
}

// getPromise();

async function getUser() {
  const res = await fetch("http://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}

// getUser();

const getPost = async () => {
  const res = await fetch("http://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
};

getPost();
