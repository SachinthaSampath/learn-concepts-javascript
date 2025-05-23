// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   setWidth(width) {
//     this.width = width;
//   }
//   setHeight(height) {
//     this.height = height;
//   }
//   area() {
//     return this.width * this.height;
//   }
// }

// class Square extends Rectangle {
//   setWidth(width) {
//     this.width = width;
//     this.height = width;
//   }
//   setHeight(height) {
//     this.width = height;
//     this.height = height;
//   }
// }

// function increaseRectangleWidth(rectangle) {
//   rectangle.setWidth(rectangle.width + 1);
// }

// const rectangle1 = new Rectangle(10, 2);
// const square = new Square(5, 5);

// console.log(`Rectangle area: ${rectangle1.area()}`);
// console.log(`Square area: ${square.area()}`);

// increaseRectangleWidth(rectangle1);
// increaseRectangleWidth(square);

// console.log(`Rectangle area: ${rectangle1.area()}`);
// console.log(`Square area: ${square.area()}`);

// class Bird {
//   fly() {
//     console.log("I can fly");
//   }
// }

// class Duck extends Bird {
//   quack() {
//     console.log("Quack");
//   }
// }

// class Penguin extends Bird {
//   fly() {
//     throw new Error("Penguins can't fly");
//   }
//   swi m() {
//     console.log("I can swim");
//   }
// }

// function makeBirdFly(bird) {
//   bird.fly();
// }

// const duck = new Duck();
// const penguin = new Penguin();

// makeBirdFly(duck); // I can fly
// makeBirdFly(penguin); // Error: Penguins can't fly

class FlyingBird {
  fly() {
    console.log("I can fly");
  }
}

class SwimmingBird {
  swim() {
    console.log("I can swim");
  }
}

class Duck extends FlyingBird {
  quack() {
    console.log("I can quack");
  }
}

class Penguin extends SwimmingBird {}

function makeSwimmingBirdSwim(bird) {
  bird.swim();
}

function makeFlyingBirdFly(bird) {
  bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck); // I can fly
makeSwimmingBirdSwim(penguin); // I can swim
