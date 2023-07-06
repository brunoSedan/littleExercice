const dice = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
let nbrInt = 0;
let nbrIntRemove = -1;
let setIntnbr = 100;

const dicedisplay = setInterval(() => {
  let display = "display" + nbrInt;
  let displayRemove = "display" + nbrIntRemove;
  nbrInt++;
  nbrIntRemove++;
  if (nbrInt >= 7) {
    nbrInt = 1;
  }
  if (nbrIntRemove >= 7) {
    nbrIntRemove = 1;
  }
  dice.classList.add(display);
  dice.classList.remove(displayRemove);
}, 200);

setTimeout(() => {
  clearInterval(dicedisplay);
}, 5000);

// const dicedisplay2 = setTimeout(() => {
//   let display = "display" + nbrInt;
//   let displayRemove = "display" + nbrIntRemove;
//   nbrInt++;
//   nbrIntRemove++;
//   if (nbrInt >= 7) {
//     nbrInt = 1;
//   }
//   if (nbrIntRemove >= 7) {
//     nbrIntRemove = 1;
//   }
//   dice2.classList.add(display);
//   dice2.classList.remove(displayRemove);
// }, 1000);
// dicedisplay();
function afficher(n) {
  console.log(n);
  let temps = Math.floor(n / 7);
  setTimeout(function () {
    afficher(n + 1);
  }, temps * 1000);
}
afficher(1);
