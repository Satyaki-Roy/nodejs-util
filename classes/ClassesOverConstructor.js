const { logToConsole } = require("../utils/logToConsole");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Employee extends Person {
  constructor(employeeCode) {
    super(name, age);
    this.employeeCode = employeeCode;
  }
}

////////////Using Getters and Setters//////////////

class Rectangle {
  constructor(length, width) {
    this._length = length;
    this._width = width;
  }
  get area() {
    return this._length * this._width;
  }
  get length() {
    return this._length;
  }
  set length(length) {
    if (length <= 0) {
      throw new Error("Length must be bigger than 0");
    }
    this._length = length;
  }
  get width() {
    return this._width;
  }
  set width(width) {
    if (width <= 0) {
      throw new Error("Width must be bigger than 0");
    }
    this._width = width;
  }
}

let rectangle = new Rectangle(2, 4);
logToConsole({ length: rectangle._length });
logToConsole({ width: rectangle._width });
logToConsole({ area: rectangle.area });

rectangle.length = 4;
rectangle.width = 8;
logToConsole({ length: rectangle._length });
logToConsole({ width: rectangle._width });
logToConsole({ area: rectangle.area });
