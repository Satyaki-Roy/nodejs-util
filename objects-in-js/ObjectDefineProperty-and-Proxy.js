const obj = Object.create(null);

Object.defineProperty(obj, "i", {
  writable: true,
  enumerable: true,
  value: 1,
});

Object.defineProperty(obj, "a", {
  get() {
    const currentValue = this.i;
    this.i++;
    return currentValue;
  },
});

console.log(obj.a, obj.a, obj.a);

//////////////////////////////using proxy//////////////////////////////

const objProxy = new Proxy(
  { a: 1 },
  {
    get(target, p, receiver) {
      if (p === "a") {
        const currentValue = target[p];
        target[p]++;
        return currentValue;
      }
      return target[p];
    },
  }
);

console.log(objProxy.a, objProxy.a, objProxy.a);
