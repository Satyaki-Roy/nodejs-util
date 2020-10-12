// the function itself
function getData(callback, errorCallback) {
  try {
    // Do some network/api stuff...
    const result = "result";
    callback(result);
  } catch (e) {
    errorCallback(e);
  }
}

// Here is how you would use it:
getData(
  (result) => console.log(result),
  (error) => console.error(error)
);

// Here is how to create a Promise-based function from it:

const getDataPromise = (callback, errorCallback) => {
  return new Promise((resolve, reject) => {
    try {
      const result = "result";
      resolve(callback(result));
    } catch (e) {
      reject(errorCallback(e));
    }
  });
};

getDataPromise(
  (result) => result,
  (error) => error
)
  .then((r) => console.log(r))
  .catch((e) => console.log(e));

// Here is easier way to create a Promise-based function from it:

function getDataAsync() {
  return new Promise((resolve, reject) => {
    getData(resolve, reject);
  });
}

getDataAsync()
  .then((result) => console.log(result))
  .catch((error) => console.error(error));

(async function main() {
  const result = await getDataAsync();
  console.log(result);
})();
