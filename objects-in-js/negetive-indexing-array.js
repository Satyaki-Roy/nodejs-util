function negativeArray(array) {
  return new Proxy(array, {
    get: function (item, propKey) {
      if (propKey < 0) {
        propKey = negativeArr.length + +propKey;
      }
      return item[propKey];
    },
  });
}

const arr = [1, 2, 3];
const negativeArr = negativeArray(arr);

console.log(negativeArr[0]);
console.log(negativeArr[1]);
console.log(negativeArr[2]);
console.log(negativeArr[-1]);
console.log(negativeArr[-2]);
console.log(negativeArr[-3]);
console.log(negativeArr[3]);
console.log(negativeArr[-4]);
