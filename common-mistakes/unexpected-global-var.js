function sayHello() {
  message = `Hello`;
  console.log(message);
}

sayHello();

// unexpected global variable
console.log(message);
