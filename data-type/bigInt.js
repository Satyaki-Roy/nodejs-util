const { logToConsole } = require("../utils/logToConsole");

/*
BigInt is a built-in object that provides a way to
represent whole numbers larger than 253 - 1,
which is the largest number JavaScript can reliably
represent with the Number primitive and represented
by the Number.MAX_SAFE_INTEGER constant. BigInt can
be used for arbitrarily large integers.
*/
const theBiggestInt = 9007199254740991n;
logToConsole({ theBiggestInt });

const alsoHuge = BigInt(9007199254740991);
logToConsole({ alsoHuge });

const hugeString = BigInt("9007199254740991");
logToConsole({ hugeString });

const hugeHex = BigInt("0xf");
logToConsole({ hugeHex });

const hugeBin = BigInt("0b111");
logToConsole({ hugeBin });
