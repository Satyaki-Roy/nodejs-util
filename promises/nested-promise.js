const somePreviousPromise = new Promise((resolve, reject) => {
  resolve("somePreviousPromise is resolved");
  // reject("somePreviousPromise is rejected");
});

// incorrect way
// const createdPromiseIncorrect = new Promise((resolve, reject) => {
//   somePreviousPromise
//     .then((result) => {
//       // do something with the result
//       resolve(result);
//     })
//     .catch((e) => {
//       reject(e);
//     });
// });

// createdPromiseIncorrect.then((r) => console.log(r)).catch();

// correct way
const createdPromiseCorrect = new Promise((resolve, reject) => {
  somePreviousPromise
    .then((result) => {
      resolve(result);
    })
    .catch((e) => {
      reject(e);
    });
});

createdPromiseCorrect
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log(e);
  });
