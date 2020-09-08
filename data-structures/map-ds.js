const { logToConsole } = require("../utils/logToConsole");

// creating a map
const wrongMap = new Map();
const correctMap = new Map();

// wrong way to add elements
wrongMap["wrongKey"] = "wrongValue";
// correct way to add elements
correctMap.set("correctKey", "correctValue");
// logging myMap to console
logToConsole({ wrongMap });
logToConsole({ correctMap });

// checking for wrong key fails
logToConsole({ checkingForWrongKey: wrongMap.has("wrongKey") });
// checking for correct key fails
logToConsole({ checkingForCorrectKey: correctMap.has("correctKey") });

// deletion of wrong key fails
logToConsole({ checkingForWrongKey: wrongMap.delete("wrongKey") });
// deletion of correct key fails
logToConsole({ checkingForCorrectKey: correctMap.delete("correctKey") });

// size check
logToConsole({ sizeOfWrongMap: wrongMap.size });
logToConsole({ sizeOfCorrectMap: correctMap.size });

// creating myMap
const myMap = new Map();
// inserting data
myMap.set("k1", "v1");
myMap.set("k2", "v2");
myMap.set("k3", "v3");
myMap.set("k4", "v4");
myMap.set("k5", "v5");
// using for..of loop
for (const e of myMap) {
  logToConsole({ e });
}
// another way of using iterator
for (const [k, v] of myMap) {
  logToConsole({ k });
  logToConsole({ v });
}
