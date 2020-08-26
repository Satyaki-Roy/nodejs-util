// my way
const mySome = function (fn) {
  const arr = Array.prototype.slice.call(this);
  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue;
    if (fn(arr[i])) {
      return true;
    }
  }
  return false;
};

Array.prototype.mySome = mySome;

console.log([1, 7, 3, 4, 5, 71, 6, 8].mySome((element) => element % 7 === 0));

// text book way

// const selfSome = function (fn, context) {
//   let arr = Array.prototype.slice.call(this);
//   if (!arr.length) return false;
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr.hasOwnProperty(i)) continue;
//     let res = fn.call(context, arr[i], i, this);
//     if (res) return true;
//   }
//   return false;
// };
//
// Array.prototype.selfSome = selfSome;
