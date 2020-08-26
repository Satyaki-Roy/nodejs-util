const myReduce = function (fn) {
  const arr = Array.prototype.slice.call(this);
  let finalValue;
  for (let i = 0; i < arr.length - 1; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    if (finalValue === undefined) {
      finalValue = arr[i];
    }
    finalValue = fn(finalValue, arr[i + 1]);
  }
  return finalValue;
};

Array.prototype.myReduce = myReduce;

console.log(
  [1, 7, 3, 4, 5, 7, 6, 8].myReduce((a, c) => {
    console.log(a, c);
    return a + c;
  })
);

// text book way
// const selfReduce = function (fn, initialValue) {
//   let arr = Array.prototype.slice.call(this);
//   let res;
//   let startIndex;
//   if (initialValue === undefined) {
//     for (let i = 0; i < arr.length; i++) {
//       if (!arr.hasOwnProperty(i)) continue;
//       startIndex = i;
//       res = arr[i];
//       break;
//     }
//   } else {
//     res = initialValue;
//   }
//
//   for (let i = ++startIndex || 0; i < arr.length; i++) {
//     if (!arr.hasOwnProperty(i)) continue;
//     res = fn.call(null, res, arr[i], i, this);
//   }
//   return res;
// };
//
// Array.prototype.selfReduce = selfReduce;
