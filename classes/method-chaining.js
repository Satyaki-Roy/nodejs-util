const { logToConsole } = require("../utils/logToConsole");

class Car {
  setWheels(wheels) {
    this.wheels = wheels;
    return this;
  }

  setEngineCC(engineCC) {
    this.engineCC = engineCC;
    return this;
  }
}

const sportsCar = new Car().setWheels(4).setEngineCC(1200);

logToConsole({ sportsCar });
