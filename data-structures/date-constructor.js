const { logToConsole } = require("../utils/logToConsole");

// creating my date object
const myDate = new Date();
logToConsole({ myDate });

// static method
logToConsole({ now: Date.now() });
logToConsole({ now: Date.parse(myDate) });
logToConsole({ exactDateAndTime: new Date(1993, 10, 1, 15, 25, 59, 225) });
