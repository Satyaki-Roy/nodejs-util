const { logToConsole } = require("../utils/logToConsole");

function sum(a, b, c) {
  return a + b + c;
}

function currying(fn) {
  return function (a) {
    return function (b) {
      return function (c) {
        return fn(a, b, c);
      };
    };
  };
}

// normal currying
const sumCurrying = currying(sum);
const result = sumCurrying(1)(2)(3);
logToConsole({ result });

// generalized currying
function _sum(a, b, c) {
  return a + b + c;
}

function _currying(fn) {
  if (fn.length <= 1) return fn;

  const generator = (...args) => {
    if (fn.length === args.length) {
      return fn(...args);
    } else {
      return (...args2) => {
        return generator(...args, ...args2);
      };
    }
  };

  return generator;
}

const _sumCurrying = _currying(sum);
const _result = _sumCurrying(1)(2)(3);
logToConsole({ _result });
