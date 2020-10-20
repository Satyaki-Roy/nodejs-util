class Foo {
  constructor(greetingMsg, byeMsg) {
    this.greetingMsg = greetingMsg;
    this.byeMsg = byeMsg;
  }

  greeting() {
    console.log(this.greetingMsg);
  }
}

const addMethod = {
  bye() {
    console.log(this.byeMsg);
  },
};

Object.assign(Foo.prototype, addMethod);

const instance = new Foo("Hello Sir", "Bye Sir");
instance.greeting();
instance.bye();
