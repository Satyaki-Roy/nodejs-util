// the promise gets executed as soon as we create them (not lazy)
// const somePromise = new Promise((resolve, reject) => {
//   reject("error happened");
// });

// the promise doesn't gets executed as soon as we create them (lazy)
const createSomePromise = () => {
  return new Promise((resolve, reject) => {
    reject("error happened");
  });
};

createSomePromise()
  .then((r) => {
    console.log(r);
  })
  .catch((e) => {
    console.log(e);
  });
