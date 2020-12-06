// Object Date
const today = new Date();
today.getFullYear();

// Object person
const person = {
  age: 25,
};

/**
 * The class has a function that returns the name of the assigned color
 */
class Color {
  name: string;

  constructor(color: string) {
    this.name = color;
  }

  showColor() {
    return `Color => ${this.name}`;
  }
}

const red = new Color("red");
const showRedColor = red.showColor();
console.log(showRedColor);
