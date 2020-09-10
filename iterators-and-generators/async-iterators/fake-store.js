module.exports = function createStore() {
  const tables = {
    customer: {
      1: { name: "Satyaki" },
      2: { name: "Goutam" },
      3: { name: "Keya" },
    },
    food: {
      1: ["Cake", "Waffle"],
      2: ["Carrot"],
      3: ["Idli", "Dosa"],
    },
  };

  return {
    get: (table, id) => tables[table][id],
  };
};
