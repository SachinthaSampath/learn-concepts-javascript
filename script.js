import { logMessage } from "./logger.js";

class CalorieTracker {
  constructor(maxCalories) {
    this.maxCalories = maxCalories;
    this.currentCalories = 0;
  }
  trackCalories(calorieCount) {
    this.currentCalories += calorieCount;
    if (this.currentCalories > this.maxCalories) {
      logMessage("You have exceeded your daily calorie limit!");
    }
  }
}

const calorieTracker = new CalorieTracker(2000);
calorieTracker.trackCalories(500);
calorieTracker.trackCalories(1600);
calorieTracker.trackCalories(100);
calorieTracker.trackCalories(100);
