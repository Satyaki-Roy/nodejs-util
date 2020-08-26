// my way

const myFilter = function (fn) {
  const arr = Array.prototype.slice.call(this);
  const filteredArray = new Array();
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    if (fn(arr[i])) {
      filteredArray.push(arr[i]);
    }
  }
  return filteredArray;
};

Array.prototype.myFilter = myFilter;

console.log([1, 2, 3, 0, 5, 6].myFilter((element) => element > 2));

// text book way

// const selfFilter = function (fn, context) {
//   let arr = Array.prototype.slice.call(this);
//   let filteredArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr.hasOwnProperty(i)) continue;
//     fn.call(context, arr[i], i, this) && filteredArr.push(arr[i]);
//   }
//   return filteredArr;
// };
//
// Array.prototype.selfFilter = selfFilter;
