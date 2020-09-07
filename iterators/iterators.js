const arr = [1, "str", null, undefined, true, [1], { k: "v" }];

// using foreach
console.log("...forEach...");
arr.forEach((e) => console.log(typeof e));

// using for...in loop will output the element as string
console.log("...for...in...");
for (let e in arr) {
  console.log(typeof e);
}

// using for...of loop will output the element
// as it is without coercion (this is the best practice)
console.log("...for...of...");
for (let e of arr) {
  console.log(typeof e);
}

// iterator
console.log("...iterator...")
const  iterator = arr[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
