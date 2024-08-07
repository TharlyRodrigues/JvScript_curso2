// const xhr = new XMLHttpRequest();

// xhr.open("GET", "./movies.json");

// xhr.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     const data = JSON.parse(this.responseText);

//     data.forEach((movie) => {
//       const li = document.createElement("li");
//       li.innerHTML = `<strong>${movie.title}</strong> - ${movie.year}`;
//       document.querySelector("#results").appendChild(li);
//     });
//   }
// };

// xhr.send();

const xhr = new XMLHttpRequest();

xhr.open("get", "https://api.github.com/users/bradtraversy/repos");

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const data = JSON.parse(this.responseText);

    data.forEach((repo) => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${repo.name}</strong> - ${repo.description}`;

      document.querySelector("#results").appendChild(li);
    });
  }
};

xhr.send();
