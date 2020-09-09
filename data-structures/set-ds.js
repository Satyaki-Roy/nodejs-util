const { logToConsole } = require("../utils/logToConsole");

// creating a new set
const mySet = new Set();

// inserting some values
mySet.add(1);
mySet.add(2);
mySet.add(3);
// adding the same value which will be ignored
mySet.add(3);
// adding NaN is equal to NaN
mySet.add(NaN);
// adding different data types
mySet.add("Hello");
mySet.add(true);
mySet.add({ k: "v" });
mySet.add([7, 8, 9]);

//logging to console
logToConsole({ mySet });

// size of the set
logToConsole({ size: mySet.size });

// checking for an element
logToConsole({ check: mySet.has("Hello") });

// delete a value
logToConsole({ delete: mySet.delete("Hello") });

// clearing everything
mySet.clear();
logToConsole({ mySet });
