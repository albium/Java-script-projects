// Array of destination country names
let destinations = [
  "France",
  "ElSalvador",
  "Brazil",
  "Peru",
  "Honduras",
  "Mexico",
];

// Get references to the button and title elements in the HTML
let button = document.getElementById("button");
let title = document.getElementById("title");

// Function that runs when the button is clicked
function nextStop() {
  // Generate a random number between 0 and the length of the destinations array
  let num = Math.floor(Math.random() * destinations.length);

  // Use that random number to pick a country from the array
  let selected = destinations[num];

  // Update the text content of the title with the selected country
  title.textContent = selected;

  // Dictionary (object) that maps each country name to a background image path
  const backgrounds = {
    France: "url('images/France.jpg')",
    ElSalvador: "url(images/ElSalvador.jpg)",
    Brazil: "url('images/Brazil.jpg')",
    Peru: "url('images/Peru.jpg')",
    Honduras: "url('images/Honduras.jpg')",
    Mexico: "url('images/Mexico.jpg')",
  };

  // Change the background image of the body to match the selected country
  // If for some reason the selected country is not found, it will default to "none"
  document.body.style.backgroundImage = backgrounds[selected] || "none";
  console.log("Selected:", selected);
  console.log("Background image path:", backgrounds[selected]);
}

// Add a click event listener to the button so it calls nextStop when clicked
button.addEventListener("click", nextStop);
