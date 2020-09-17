const location2postcode = {
  "JavaScript Street": 232200,
  "Python Street": 234422,
  "Golang Street": 231142,
};
const postcode2location = {
  "232200": "JavaScript Street",
  "234422": "Python Street",
  "231142": "Golang Street",
};

const person = new Proxy(
  { name: "Satyaki" },
  {
    set(target, p, value, receiver) {
      if (p === "postcode") {
        target["location"] = postcode2location[value];
      } else if (p === "location") {
        target["postcode"] = location2postcode[value];
      }
      target[p] = value;
    },
  }
);

person["postcode"] = 232200;
person["location"] = "JavaScript Street";
console.log(person);
