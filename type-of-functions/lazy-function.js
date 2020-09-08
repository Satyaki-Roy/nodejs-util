const { logToConsole } = require("../utils/logToConsole");

// without lazy loading
let fooFirstExecutedDate = null;
function foo() {
  if (fooFirstExecutedDate !== null) {
    return fooFirstExecutedDate;
  } else {
    fooFirstExecutedDate = new Date();
    return fooFirstExecutedDate;
  }
}

// with lazy loading
let lazyFoo = function () {
  const t = new Date();

  lazyFoo = function() {
    return t;
  }

  return lazyFoo();
};

// logging things to console
logToConsole({ foo: foo() });
logToConsole({ lazyFoo: lazyFoo() });
for (let i = 0; i < 1000000; i++) {
  //will pass some time
}
logToConsole({ fooAfterSometime: foo() });
logToConsole({ lazyFooAfterSometime: lazyFoo() });
