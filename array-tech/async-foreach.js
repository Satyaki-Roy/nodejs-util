const arr = [1, 2, 3, 4, 5];

// arr.forEach((element) => {
//   console.log(element);
// });

Array.prototype.asyncForEach = function (fn) {
  const arr = Array.prototype.slice.call(this);
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      fn(arr[i]);
    }, i * 1000);
  }
};

arr.asyncForEach((element) => {
  console.log(element);
});
