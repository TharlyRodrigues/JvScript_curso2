// fetch("http://httpstat.us/200")
//   .then((response) => {
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   });

//test with response.ok

// fetch("http://httpstat.us/404")
//   .then((response) => {
//     if (!response.ok) {
//       throw new erro("Request Failed");
//     }
//     return response;
//   })
//   .then(() => {
//     console.log("success");
//   })
//   .catch((erro) => console.log(erro));

//check for specific cod

fetch("http://httpstat.us/200")
  .then((response) => {
    if (!response.status === 404) {
      throw new Error("Not Found");
    } else if (response.status === 500) {
      throw new Error("Server error");
    } else if (response.status !== 200) {
      throw new Error("Request Failed");
    }
    return response;
  })
  .then(() => {
    console.log("success");
  })
  .catch((error) => console.log(error));
