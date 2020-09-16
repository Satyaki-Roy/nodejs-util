const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const myMap = function (fn, _this) {
  const arr = Array.prototype.slice.call(this);
  const newArray = new Array();
  let index = 0;
  for (const currentValue of arr) {
    newArray.push(fn.call(_this, currentValue, index, arr));
    index++;
  }
  return newArray;
};

Array.prototype.myMap = myMap;

console.log(
  arr1.myMap(function (c, i, a) {
    console.log({
      c,
      i,
      a,
    });
    console.log(this);
    return c * 2;
  }, arr2)
);

// console.log(
//   arr1.map(function (c, i, a) {
//     console.log({
//       c,
//       i,
//       a,
//     });
//     console.log(this);
//     return c * 2;
//   }, arr2)
// );

// satyaki@shaw:~/CodePractice/NodeJs/nodejs-util$ node revison/my-map-method-for-arrays.js
// { c: 1, i: 0, a: [ 1, 2, 3 ] }
// [ 4, 5, 6 ]
// { c: 2, i: 1, a: [ 1, 2, 3 ] }
// [ 4, 5, 6 ]
// { c: 3, i: 2, a: [ 1, 2, 3 ] }
// [ 4, 5, 6 ]
//   [ 2, 4, 6 ]

// console.log(
//   Array.prototype.map.apply(arr2, [
//     (c, i, a) => {
//       console.log({
//         c,
//         i,
//         a,
//       });
//       return c * 2;
//     },
//   ])
// );
