// function toggle(e) {
//   e.target.classList.toggle("danger");
// }
// document.querySelector("button").addEventListener("click", toggle);

const posts = [
  { title: "post one", body: "thi is post one" },
  { title: "post two", body: "thi is post two" },
];

// function creatPost(post, cb) {
//   setTimeout(() => {
//     posts.push(post);
//     cb();
//   }, 2000);
// }

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (post) {
//       const div = document.createElement("div");
//       div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//       document.querySelector("#posts").appendChild(div);
//     });
//   }, 1000);
// }

// creatPost({ title: "post Three", body: "thi is post three" }, getPosts);

function creatPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 2000);
}
function getPosts1() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement("div");
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector("#posts").appendChild(div);
    });
  }, 1000);
}

creatPost({ title: "post three", body: "thi is post three" }, getPosts1);
