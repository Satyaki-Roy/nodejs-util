const house = {
  price: 1000000,
  currency: "USD",
  address: {
    city: "New York",
    street: "Main street",
    postal_code: "1234 AB",
    state: {
      name: "New York",
      abbreviation: "N.Y.",
    },
  },
  owner: {
    name: "John Doe",
  },
  // owner: null,
};

//using chaining operator (requires nodejs 14.x.x)
const city = house?.address?.city;
console.log(city);

// console.log(house.currency);
// console.log(house.price);

// owner property has been removed hence this will throw an error
// console.log(house.owner.name);

// using ternary operator
// const owner = house.owner ? house.owner.name : null;
// console.log(owner);

// using nullish coalescing operator (requires nodejs 14.x.x)
// const owner = house.owner.name ?? null;
// console.log(owner);

// using && operator to check if the property exists or not
// const state =
//   house.address && house.address.state ? house.address.state.name : null;
// console.log(state);

// You can also use the optional chaining operator to check for properties in a dynamic way.
// In order to do this, you have to use the bracket notation:
// const someProperty = obj?.['property-' + propertyName]

// You can use the chaining operator when attempting to call a method that may not exist.
// This is what it looks like:
// const result = someObject.customMethod?.();
