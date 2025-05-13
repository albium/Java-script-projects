// Start by initializing a variable to store the random number
let num = 0;

// Get a reference to the button and output elements from the HTML
let button = document.getElementById("button-number");
let output = document.getElementById("output");

// Array of dice face emojis, representing 1 to 6
const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

// Function that runs when the button is clicked
function numCalc() {
  // Generate a random number from 1 to 6
  num = Math.floor(Math.random() * 6) + 1;

  // Display the corresponding dice emoji (subtract 1 because arrays are 0-indexed)
  button.textContent = diceFaces[num - 1];

  // Print the number to the browser console (useful for debugging)
  console.log("Rolled:", num);
}

// Add an event listener to the button to run the function when clicked
button.addEventListener("click", numCalc);
