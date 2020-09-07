const { logToConsole } = require("../utils/logToConsole");

/*
The data type symbol is a primitive data type.
The Symbol() function returns a value of type
symbol, has static properties that expose several
members of built-in objects, has static methods
that expose the global symbol registry, and resembles
a built-in object class, but is incomplete as a
constructor because it does not support the
syntax "new Symbol()".

Every symbol value returned from Symbol() is unique.
A symbol value may be used as an identifier for object
properties; this is the data type's primary purpose,
although other use-cases exist, such as enabling opaque
data types, or serving as an implementation-supported
unique identifier in general.
*/

// Creating a symbol
const sym1 = Symbol();
logToConsole({ sym1 });
logToConsole({ typeOf: typeof sym1 });

// Symbols are always unique
const sym2 = Symbol();
const sym3 = Symbol();
logToConsole({ comparingSymbols: sym2 === sym3 });

// symbols are used for adding unique properties
const obj = {
  id: 125963,
  name: "Satyaki Roy",
  interest: "JavaScript",
};
// creating a symbol
const sym4 = Symbol("id");
// adding this symbol as key to the object
obj[sym4] = 498652654;
// log to console
logToConsole({ obj });
logToConsole({ objKeyWithSymbol: obj[sym4] });

// Another way to use symbol as key, without [] it will take it as string
const obj1 = {
  id: 125963,
  name: "Satyaki Roy",
  interest: "JavaScript",
  [Symbol("id")]: 498652654,
};
// log to console
logToConsole({ obj1 });

// using methods in prototype chain
logToConsole({ objectGetOwnPropertyNames: Object.getOwnPropertyNames(obj1) });
logToConsole({
  objectGetOwnPropertySymbols: Object.getOwnPropertySymbols(obj1),
});

// we can create symbols with equal values also
const sym5 = Symbol.for("hello");
const sym6 = Symbol.for("hello");
logToConsole({ equalSymbols: sym5 === sym6 });
