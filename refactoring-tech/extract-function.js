const menu = {
  name: "Lunch Menu",
  dishes: ["Dal", "Wheat", "Veggies"],
};

/*
 * BEFORE
 * */

(function printMenuBefore(menu) {
  console.log("****************");
  console.log(`***${menu.name}***`);
  console.log("****************");

  for (let e of menu.dishes) {
    console.log(e);
  }
})(menu);

/*
 * AFTER
 * */

(function printMenuBefore(menu) {
  printMenuName(menu.name);

  for (let e of menu.dishes) {
    console.log(e);
  }

  function printMenuName(name) {
    console.log("****************");
    console.log(`***${name}***`);
    console.log("****************");
  }
})(menu);
