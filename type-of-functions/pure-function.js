const { logToConsole } = require("../utils/logToConsole");

// example 1
function circleArea(radius) {
  return radius * radius * 3.14;
}
logToConsole({ area: circleArea(2) });

// example 2
// 1. We are using IIFE and Closure together
// 2. As the output is different everytime, this is not a pure function.
let counter = (function () {
  let initValue = 0;
  return function () {
    initValue++;
    return initValue;
  };
})();

logToConsole({ counter: counter() });
logToConsole({ counter: counter() });
logToConsole({ counter: counter() });

// example 3
// 1. This function returns the same result for the same imput
// 2. But it effects the global variable each time, hence this is not a pure function
let maleCounter = 0;

function isMale(user){
  if(user.sex = 'man'){
    maleCounter++;
    return true
  }
  return false
}
