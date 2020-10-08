const err = new Error("error");

function foo() {
  throw err;
}

try {
  foo();
} catch (e) {
  console.log(e);
}

console.log("****************************");

try {
  foo();
} catch (e) {
  if (e instanceof Error) {
    console.log({
      name: e.name,
      message: e.message,
    });
  }
}

console.log("****************************");

// custom error class
class CustomError extends Error {
  constructor(foo = "bar", ...params) {
    super(...params);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
    this.name = "CustomError";
    this.foo = foo;
    this.date = new Date();
  }
}

try {
  throw new CustomError("baz");
} catch (e) {
  if (e instanceof CustomError) {
    console.error(`${e.name} - ${e.foo}`);
  }
}
