// my way

const selfMap = function (fn) {
  const arr = Array.prototype.slice.call(this);
  const mappedArray = new Array();
  for (let i = 0; i < arr.length; i++) {
    mappedArray.push(fn(arr[i]));
  }
  return mappedArray;
};

Array.prototype.selfMap = selfMap;

const arr = [1, 2, 3].selfMap((element) => element * 2);
console.log(arr);

// text book way

// const selfMap = function (fn, context) {
//   let arr = Array.prototype.slice.call(this)
//   let mappedArr = Array()
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr.hasOwnProperty(i)) continue;
//     mappedArr[i] = fn.call(context, arr[i], i, this)
//   }
//   return mappedArr
// }
//
// Array.prototype.selfMap = selfMap;
