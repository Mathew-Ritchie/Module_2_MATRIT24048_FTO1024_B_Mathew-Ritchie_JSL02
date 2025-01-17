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

//JSL02 - start////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const addNewGoal = () => {
  const goalInput = document.querySelector("#goalInput");
  const goalList = document.querySelector("#goalList");
  //console.log(goalInput, goalList);
  const goalInputNew = goalInput.value.trim(); // declaring a variuable thats targeting the actual value of the goal
  // in the input field and not the actual html element. trim() is used
  //to cut away any white space before or after the input value.
  //console.log(goalInputNew);
  let duplicate = false; //declaring a duplicate variable and giving it a boolean value of false.

  for (let i = 0; i < goalList.children.length; i++) {
    // this is a loop in which the function will loop through the already added goals (children) which are in the goalList element.
    if (goalList.children[i].textContent.trim() === goalInputNew) {
      //if statement saying that if the text content of any of the goal list children is equal to the new input value, then the duplicate variable will have the value of true.
      duplicate = true;
      //console.log(duplicate);
    }
  }

  if (duplicate) {
    //if duplicate is true
    goalInput.value = ""; //input will clear automatically.
    alert("This goal has already been added!!!"); //alert displayed if there is a duplicate
    //console.log(alert);
  } else {
    //if there is no duplicate, code runs to create a li element with the new goal input as the text. This is appended to the ul element as the last child.
    const newGoal = document.createElement("li");
    newGoal.textContent = goalInputNew;
    goalList.appendChild(newGoal);
    goalInput.value = ""; //input will clear automatically.
  }
};

document.querySelector("#submitGoal").addEventListener("click", addNewGoal);

//JSL02 - End////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
