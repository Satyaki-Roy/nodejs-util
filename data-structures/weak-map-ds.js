const { logToConsole } = require("../utils/logToConsole");

const _map = new Map();
const _weakMap = new WeakMap();
(function () {
  const a = { x: 1 };
  const b = { y: 2 };
  _map.set(a, "obj a");
  _weakMap.set(b, "obj b");
})();

// things are not Garbage Collected as sets are strong pointer
logToConsole({ _map });
// things are Garbage Collected as weak sets are weak pointer
logToConsole({ _weakMap });

// adding a primitive values (other than objects)
// allowed
_map.set("Hello", "Hello");
// not allowed
_weakMap.set("Hello", "Hello");
