const { logToConsole } = require("../utils/logToConsole");

const _set = new Set();
const _weakSet = new WeakSet();
(function () {
  const a = { x: 1 };
  const b = { y: 2 };
  _set.add(a);
  _weakSet.add(b);
})();

// things are not Garbage Collected as sets are strong pointer
logToConsole({ _set });
// things are Garbage Collected as weak sets are weak pointer
logToConsole({ _weakSet });

// adding a primitive values (other than objects)
// allowed
_set.add("Hello");
// not allowed
_weakSet.add("Hello");
