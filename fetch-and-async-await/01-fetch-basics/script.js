//fetch a JSON file
fetch("./movies.json")
  .then((resposte) => resposte.json())
  .then((data) => console.log(data));

//fetching a text file
fetch("./test.txt")
  .then((resposte) => resposte.text())
  .then((data) => console.log(data));

//fetching from API
// fetch("https://api.github.com/users/bradtraversy/repos")
//   .then((resposte) => resposte.json())
//   .then((data) => (document.querySelector("h1").textContent = data.login));

fetch("https://api.github.com/users/bradtraversy")
  .then((response) => response.json())
  .then((data) => (document.querySelector("h1").textContent = data.login));
