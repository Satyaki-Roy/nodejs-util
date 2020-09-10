const birthOfDragon = () => {
  const arr = ["Fire Dragon", "Ice dragon", "Electro Dragon", "Thunder Dragon"];
  return arr[Math.floor(Math.random() * 4)];
};

// generators are syntactic sugar in iterators
function* dragonArmy() {
  yield birthOfDragon();
  yield birthOfDragon();
  return undefined
}

// creating a handle for the iterator
const iterator = dragonArmy();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
