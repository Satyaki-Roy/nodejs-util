const myFlat = function (depth = 1) {
  const arr = Array.prototype.slice.call(this);
  let finalArray = [...arr];
  let i = 0;

  const flatten = (arr) => {
    let flattenedArray = new Array();

    for (let i = 0; i < arr.length; i++) {
      if (!arr.hasOwnProperty(i)) continue;
      if (Array.isArray(arr[i])) {
        flattenedArray = flattenedArray.concat(arr[i]);
      } else {
        flattenedArray.push(arr[i]);
      }
    }

    return flattenedArray;
  };

  while (i < depth) {
    finalArray = flatten(finalArray);
    i++;
  }

  return finalArray;
};

Array.prototype.myFlat = myFlat;

console.log([0, 1, 2, [3, 4], [5, 6]].myFlat(2));

// text book way
// const selfFlat = function (depth = 1) {
//   let arr = Array.prototype.slice.call(this);
//   if (depth === 0) return arr;
//   return arr.reduce((pre, cur) => {
//     if (Array.isArray(cur)) {
//       return [...pre, ...selfFlat.call(cur, depth - 1)];
//     } else {
//       return [...pre, cur];
//     }
//   }, []);
// };
//
// Array.prototype.selfFlat = selfFlat;
