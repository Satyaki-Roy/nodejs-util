const myPromise = new Promise((resolve, reject) => {
  resolve("Hello Resolve");
  reject("Hello Reject");
});

myPromise
  .then((r) => {
    console.log("This is resolved");
    console.log(r);
  })
  .catch((e) => {
    console.log("This is rejected");
    console.log(e);
  });
