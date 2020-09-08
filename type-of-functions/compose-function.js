const { logToConsole } = require("../utils/logToConsole");

// normal way
const toUpperCase = function (x) {
  return x.toUpperCase();
};

const hello = function (x) {
  return "HELLO, " + x;
};

const greet = function (x) {
  return hello(toUpperCase(x));
};

logToConsole({ greet: greet("sir") });

// composing function
const compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};

const _greet = compose(hello, toUpperCase)

logToConsole({ _greet: _greet("sir") });
