class Calculator {
  constructor() {
    this.value = 0;
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


const calculator = new Calculator();
calculator.executeCommand(new AddCommand(10));
console.log(calculator.value); 
calculator.executeCommand(new AddCommand(5));
calculator.executeCommand(new AddCommand(52));
calculator.executeCommand(new AddCommand(533));
console.log(calculator.value);