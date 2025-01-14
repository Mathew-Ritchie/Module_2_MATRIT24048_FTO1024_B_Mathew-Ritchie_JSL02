const welcomeMessage = () => {
  const today = new Date().toDateString();
  document.getElementById(
    "welcomeMessage"
  ).textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
  const workoutInput = document.querySelector("#workoutInput").value;
  const workoutList = document.querySelector("#workoutList");
  const newWorkout = document.createElement("li");
  newWorkout.textContent = workoutInput;
  workoutList.appendChild(newWorkout);
};

document
  .querySelector("#submitWorkout")
  .addEventListener("click", displayWorkoutRoutine);

// ⚠️⚠️⚠️ Lesson 3: Creating and Removing Elements ⚠️⚠️⚠️
// Function to add new fitness goals and remove completed ones
// NOW LET'S DEBUG TO PREVENT DUPLICATE GOALS FROM BEING SUBMITTED 🚀

const addNewGoal = () => {
  const goalInput = document.querySelector("#goalInput");
  const goalList = document.querySelector("#goalList");
  console.log(goalInput, goalList);
  const goalInputNew = goalInput.value.trim(); // declaring a variuable thats targeting the actual value of the goal in the input field
  console.log(goalInputNew);
  let duplicate = false; //declaring a variable and giving it a value

  for (let i = 0; i < goalList.children.length; i++) {
    // this is a loop in which the function will loop through the already added goals (children) which are in the goalList
    if (goalList.children[i].textContent.trim() === goalInputNew) {
      //if statement saying that if the new input goal is equal to ant of those in the list of children then the statment is true.
      duplicate = true;
      console.log(duplicate);
    }
  }

  if (duplicate) {
    alert("This goal has already been added!!!"); //this is the alert that will be displayed if there is a duplicate
    console.log(alert);
  } else {
    //if there is no duplicate, code runs to create a li element with the new goal input as the text. The is appended to the ul element.
    const newGoal = document.createElement("li");
    newGoal.textContent = goalInputNew;
    goalList.appendChild(newGoal);
    goalInput.value = ""; //finally the input is cleared for the next goal.
  }
};

document.querySelector("#submitGoal").addEventListener("click", addNewGoal); //event listener that runs function addNewGoal.

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
  waterIntake += change;
  document.querySelector(
    "#waterIntakeDisplay"
  ).textContent = `${waterIntake} glasses 💦`;
};

document
  .querySelector("#increaseWater")
  .addEventListener("click", () => updateWaterIntake(1));
document
  .querySelector("#decreaseWater")
  .addEventListener("click", () => updateWaterIntake(-1));

const updateProgressCharts = () => {
  document.querySelector("#workoutProgress").textContent =
    "Updated workout progress...";
  document.querySelector("#calorieIntakeProgress").textContent =
    "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
  document.body.classList.toggle("dark-theme");
};

document.querySelector("#themeToggle").addEventListener("click", toggleTheme);

const submitMealPlan = (event) => {
  event.preventDefault();
  alert("Meal plan submitted successfully! 🍴");
};

document
  .querySelector("#mealPlanForm")
  .addEventListener("submit", submitMealPlan);
