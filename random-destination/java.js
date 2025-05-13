let destinations = [
  "France",
  "El Salvador",
  "Brazil",
  "Honduras",
  "Mexico",
  "Peru",
];

let num = 0;
let button = document.getElementById("button");
let title = document.getElementById("title");

function nextStop() {
  num = Math.floor(Math.random() * 6) + 1;
  title.textContent = destinations[num - 1];
}

button.addEventListener("click", nextStop);
