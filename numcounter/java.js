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
let num = 0;
// globally sets num for 0
document.getElementById("output").textContent = num;
// targets output div and inputs a number in it which in
// our case it is a 0
function numDecrease() {
  // define a
  num--;
  document.getElementById("output").textContent = num;
  alert(num);
}

function numIncrease() {
  num++;
  document.getElementById("output").textContent = num;
}
function Reset() {
  num = 0;
  document.getElementById("output").textContent = num;
}
// THIS ONE IS BETTER FOR Readability
