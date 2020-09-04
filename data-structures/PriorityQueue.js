function PriorityQueue() {
  this.collection = [];

  this.print = function () {
    return this.collection;
  };

  this.enqueue = function (value) {
    if (this.isEmpty()) {
      this.collection.push(value);
    } else {
      var added = false;
      for (var i = 0; i < this.collection.length; i++) {
        if (value[1] < this.collection[i][1]) {
          this.collection.splice(i, 0, value);
          added = true;
          break;
        }
      }
      if (!added) {
        this.collection.push(value);
      }
    }
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
  };
}
