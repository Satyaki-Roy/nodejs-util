// infinite generator
function* infinite() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const generator = infinite();

console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.return("Done with the generator").value);
console.log(generator.next().value); // will give undefined as output
