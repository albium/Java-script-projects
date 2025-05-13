let num = 0;
let randomNumber = document.getElementById("button-number");

function numCalc() {
  num = Math.floor(Math.random() * 6) + 1;
  randomNumber.textContent = num;
  console.log(num);
}
randomNumber.addEventListener("click", numCalc);
