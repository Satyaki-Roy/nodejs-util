const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(
  arr.reduce((i, c) => {
    console.log({ i, c });
    return i + c;
  }, 9)
);
