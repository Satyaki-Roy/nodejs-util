"use strict";

const Game = {
  level: 1,
  start: function () {
    console.log(`Start level ` + this.level);
  },
  finish: function () {
    // // this will through undefined
    // setTimeout(function () {
    //   console.log(`Finish level ` + this.level);
    // }, 5);
    // use arrow function as it wont have its own this binding
    setTimeout(() => {
      console.log(`Finish level ` + this.level);
    }, 5);
  },
};

Game.start();
Game.finish();
