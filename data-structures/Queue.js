function Queue() {
  this.collection = [];

  this.print = function () {
    return this.collection;
  };

  this.enqueue = function (value) {
    this.collection.push(value);
  };

  this.dequeue = function () {
    return this.collection.shift();
  };

  this.isEmpty = function () {
    return this.collection.length === 0;
  };

  this.front = function () {
    if (this.isEmpty()) return "empty collection";
    return this.collection[0];
  };

  this.size = function () {
    return this.collection.length;
  }
}
