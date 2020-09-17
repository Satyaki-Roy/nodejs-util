function foo(a, b) {
  console.log(b);
  return {
    foo: function (c) {
      return foo(c, a);
    },
  };
}

let res = foo(0);
res.foo(1);
res.foo(2);
res.foo(3);
