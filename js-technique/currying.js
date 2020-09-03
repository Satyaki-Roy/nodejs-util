// add(1,2,3) into add(1)(2)(3) or add(1)(2)(3)()

let mySum = 0;

function add(num) {
  if (num === undefined) {
    return mySum;
  } else {
    mySum += num;
    return add;
  }
}

const total = add(1)(2);
console.log(total());

///////////////////////////////////////////////////////////

// another way
function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

console.log(curriedSum(1)(2)); // 3
