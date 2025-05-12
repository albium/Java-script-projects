////////////////////FIRST VERSION///////////

// let num = (document.getElementById("output").textContent = 0);

// function numDecrease() {
//   num--;
//   document.getElementById("output").textContent = num;
// }

// function numIncrease() {
//   num++;
//   document.getElementById("output").textContent = num;
// }

// function Reset() {
//   num = 0;
//   document.getElementById("output").textContent = num;
// }

/////////////SECOND VERSION//////////////////
// let num = 0;
// // globally sets num for 0
// document.getElementById("output").textContent = num;
// // targets output div and inputs a number in it which in
// // our case it is a 0
// function numDecrease() {
//   // define a
//   num--;
//   document.getElementById("output").textContent = num;
// }

// function numIncrease() {
//   num++;
//   document.getElementById("output").textContent = num;
// }
// function Reset() {
//   num = 0;
//   document.getElementById("output").textContent = num;
// }
// // THIS ONE IS BETTER FOR Readability

// function toggleTheme() {
//   document.body.classList.toggle("light-mode");
// }

////////////THIRD VERSION//////////
// let num = 0;
// const output = document.getElementById("output");

// // Set initial number
// output.textContent = num;

// // Define functionality
// function numDecrease() {
//   num--;
//   output.textContent = num;
// }

// function numIncrease() {
//   num++;
//   output.textContent = num;
// }

// function Reset() {
//   num = 0;
//   output.textContent = num;
// }

// function toggleTheme() {
//   document.body.classList.toggle("light-mode");
// }

// // Attach event listeners safely
// document.getElementById("decreaseBtn").addEventListener("click", numDecrease);
// document.getElementById("resetBtn").addEventListener("click", Reset);
// document.getElementById("increaseBtn").addEventListener("click", numIncrease);
// document
//   .getElementById("themeToggleBtn")
//   .addEventListener("click", toggleTheme);

//////////////////Forth Version////////////
let num = 0;

// Store references to DOM elements
const output = document.getElementById("output");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Set initial number
output.textContent = num;

// Define functionality
function numDecrease() {
  num--;
  output.textContent = num;
}

function numIncrease() {
  num++;
  output.textContent = num;
}

function reset() {
  num = 0;
  output.textContent = num;
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");
}

// Attach event listeners
decreaseBtn.addEventListener("click", numDecrease);
resetBtn.addEventListener("click", reset);
increaseBtn.addEventListener("click", numIncrease);
themeToggleBtn.addEventListener("click", toggleTheme);
