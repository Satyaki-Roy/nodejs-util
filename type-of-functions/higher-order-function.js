const {logToConsole} = require("../utils/logToConsole");

const arr = [1, 2, 3, 4, 5, 6];

const myMap = function (fn) {
  const newArr = [];
  return function (arr) {
    for (const element of arr) {
      newArr.push(fn(element));
    }
    return newArr;
  };
};

const doubleArrFunction = myMap((element) => element * 2);
const doubleArr = doubleArrFunction(arr);
logToConsole({doubleArr});
