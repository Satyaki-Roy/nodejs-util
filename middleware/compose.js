// function compose(middleware) {
//   return function () {
//     const f1 = middleware[0];
//     f1(function next() {
//       const f2 = middleware[1];
//       f2(function next() {
//         const f3 = middleware[2];
//         f3();
//       });
//     });
//   };
// }

function compose(middleware) {
  return function () {
    dispatch(0);
    function dispatch(i) {
      if (i === middleware.length - 1) {
        const f = middleware[i];
        f();
        return;
      }
      const f = middleware[i];
      f(function next() {
        dispatch(i + 1);
      });
    }
  };
}

let middleware = [];

middleware.push((next) => {
  console.log(1);
  next();
  console.log(1.1);
});

middleware.push((next) => {
  console.log(2);
  next();
  console.log(2.1);
});

middleware.push(() => {
  console.log(3);
});

let fn = compose(middleware);
fn();

// expected output
// 1
// 2
// 3
// 2.1
// 1.1
