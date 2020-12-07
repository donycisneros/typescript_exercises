// Object literal
const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Type alias
type Drink = [string, boolean, number];

// Tuples
const pepsi: Drink = ["brown", true, 40];
const sprite: Drink = ["clear", true, 40];
const tea: Drink = ["brown", false, 0];

// Real world examples
// Hard to understand
const carSpecs: [number, number] = [400, 3354];

// Easy to understand
const carStats = {
  horsepower: 400,
  weight: 3354,
};
