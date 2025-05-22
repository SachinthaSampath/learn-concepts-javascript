class Calculator {
  constructor() {
    this.value = 0;
    this.history = [];
  }

  executeCommand(command) {
    this.value = command.execute(this.value);
    this.history.push(command);
  }

  undo() {
    const commandLast = this.history.pop();
    if (commandLast) {
      this.value = commandLast.undo(this.value);
    }
  }
}

class AddCommand {
  constructor(valueToAdd) {
    this.valueToAdd = valueToAdd;
  }

  execute(currentValue) {
    return currentValue + this.valueToAdd;
  }

  undo(currentValue) {
    return currentValue - this.valueToAdd;
  }
}

class SubtractCommand {
  constructor(valueToSubtract) {
    this.valueToSubtract = valueToSubtract;
  }

  execute(currentValue) {
    return currentValue - this.valueToSubtract;
  }

  undo(currentValue) {
    return currentValue + this.valueToSubtract;
  }
}

class MultiplyCommand {
  constructor(valueToMultiply) {
    this.valueToMultiply = valueToMultiply;
  }

  execute(currentValue) {
    return currentValue * this.valueToMultiply;
  }

  undo(currentValue) {
    return currentValue / this.valueToMultiply;
  }
}

class DivideCommand {
  constructor(valueToDivide) {
    this.valueToDivide = valueToDivide;
  }

  execute(currentValue) {
    if (this.valueToDivide === 0) {
      throw new Error("Cannot divide by zero");
    }
    return currentValue / this.valueToDivide;
  }

  undo(currentValue) {
    return currentValue * this.valueToDivide;
  }
}

const calculator = new Calculator();
calculator.executeCommand(new AddCommand(10));
calculator.executeCommand(new MultiplyCommand(5));
console.log(calculator.value);

calculator.undo();
calculator.undo();
console.log(calculator.value);

// combine commands

class AddThenMultiplyCommand {
  constructor(valueToAdd, valueToMultiply) {
    this.addCommand = new AddCommand(valueToAdd);
    this.multiplyCommand = new MultiplyCommand(valueToMultiply);
  }

  execute(currentValue) {
    const newValue = this.addCommand.execute(currentValue);
    return this.multiplyCommand.execute(newValue);
  }
  undo(currentValue) {
    const newValue = this.multiplyCommand.undo(currentValue);
    return this.addCommand.undo(newValue);
  }
}

const calculator2 = new Calculator();
calculator2.executeCommand(new AddThenMultiplyCommand(10, 5));
console.log(calculator2.value);
calculator2.undo();
console.log(calculator2.value);
