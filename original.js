class Calculator {
  constructor() {
    this.value = 0;
  }
  add(valueToAdd) {
    this.value += valueToAdd;
  }
  subtract(valueToSubtract) {
    this.value -= valueToSubtract;
  }
  multiply(valueToMultiply) {
    this.value *= valueToMultiply;
  }
  divide(valueToDivide) {
    if (valueToDivide === 0) {
      throw new Error("Cannot divide by zero");
    }
    this.value /= valueToDivide;
  }
}

const calculator = new Calculator();
calculator.add(10);
console.log(calculator.value); 

calculator.divide(2);
console.log(calculator.value);