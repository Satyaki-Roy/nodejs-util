// doesn't keep track of changes
/*
let message = "Hello!";
let longMessage = message + " World!";

console.log(longMessage);
message = "Hi!";
console.log(longMessage);
*/

// proxy keeps track of changes
const data = {
  message: "Hello",
  longMessage: `Hello World!`,
};

const handler = {
  set(target, key, value) {
    if (key === "message") {
      target.longMessage = `${value} World!`;
      target[key] = value;
    }
  },
};

const proxy = new Proxy(data, handler);

console.log(data.longMessage);
proxy.message = "Hi";
console.log(data.longMessage);
