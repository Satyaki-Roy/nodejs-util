const birthOfDragon = () => {
  const arr = ["Fire Dragon", "Ice dragon", "Electro Dragon", "Thunder Dragon"];
  return arr[Math.floor(Math.random() * 4)];
};

const dragonArmy = {
  [Symbol.iterator]: () => {
    return {
      next() {
        if (Math.random() > 0.75) {
          return { done: true };
        }
        return {
          value: birthOfDragon(),
          done: false,
        };
      },
    };
  },
};

for (const dragon of dragonArmy) {
  console.log(dragon);
}
