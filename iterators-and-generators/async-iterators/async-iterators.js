const createStore = require("./fake-store");

const store = createStore();

const customers = {
  [Symbol.iterator]: function () {
    let i = 0;
    return {
      next() {
        i++;
        const customer = store.get("customer", i);
        if (!customer) return { done: true };
        customer.food = store.get("food", i);
        return {
          value: customer,
          done: false,
        };
      },
    };
  },
};

// other things need bable soo we will learn later

for (const customer of customers) {
  console.log(customer);
}
