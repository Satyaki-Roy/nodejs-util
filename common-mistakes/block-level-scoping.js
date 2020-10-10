function justLog(inside) {
  if (inside) {
    var message = `this is a message`;
    console.log(`Inside block:`, message);
  }
  // message variable is accessible outside the block as var is function scoped
  console.log(`Outside block:`, message);
}

justLog(true);
