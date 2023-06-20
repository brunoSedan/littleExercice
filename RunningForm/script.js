const distanceInput = document.getElementById("distance");
const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const secondInput = document.getElementById("second");
const submitBtn = document.getElementById("Calcul");
const speedSpan = document.getElementById("speed");
const paceSpan = document.getElementById("pace");
const timeInputs = document.querySelectorAll(".time");
/* fonction Bouton*/

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newChrono =
    parseInt(hourInput.value * 60) +
    parseInt(minuteInput.value) +
    "." +
    secondInput.value;

  let newDistance = distanceInput.value / 1000;
  let resultSpeed = (newDistance / (newChrono / 60)).toFixed(2);
  let resultPace = (newChrono / newDistance).toFixed(2);

  speedSpan.textContent = resultSpeed + "km/h";
  paceSpan.textContent = resultPace + "min/km";

  inputDefault();
});

const inputDefault = () => {
  for (i = 0; i < timeInputs.length; i++)
    if (timeInputs[i].value > 59) {
      timeInputs[i].style.color = "red";
      speedSpan.textContent = "Veuillez Renseigner un chiffre de 0 à 59";
      paceSpan.textContent = "-1";
    } else {
      timeInputs[i].style.color = "black";
    }
};
