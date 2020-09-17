const person = {
  name: "Satyaki",
  age: 27,
};

function personProxy(person) {
  return new Proxy(person, {
    set(target, p, value, receiver) {
      if (p === "age") {
        if (!Number.isInteger(value) || value < 0 || value > 150) {
          throw new TypeError("age should be an integer between 0 and 150");
        }
        target[p] = value;
      }
      target[p] = value;
    },
  });
}

const personProxyObj = personProxy(person);

// personProxyObj.age = "28"; // throws an exception
personProxyObj.age = 28;
personProxyObj.name = "Deep";
console.log(personProxyObj);
