const { logToConsole } = require("../utils/logToConsole");

function caching(fn) {
  const cache = Object.create(null);

  return function cachedFn(attr) {
    if (!cache[attr]) {
      cache[attr] = fn(attr);
    }

    return cache[attr];
  };
}

function printNumber(num) {
  return num;
}

const printNumberCache = caching(printNumber);

logToConsole({ number: printNumberCache(2) });
logToConsole({ number: printNumberCache(3) });

logToConsole({ number: printNumberCache(2) });
logToConsole({ number: printNumberCache(3) });
