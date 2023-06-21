/*  Variables */
const distanceInput = document.getElementById("distance");
const hourInput = document.getElementById("hour");
const minuteInput = document.getElementById("minute");
const secondInput = document.getElementById("second");
const submitBtn = document.getElementById("Calcul");
const speedSpan = document.getElementById("speed");
const paceSpan = document.getElementById("pace");
const timeInputs = document.querySelectorAll(".time");
const customInput = document.getElementById("custom");
let newDistance;
let newsecondPace;

/* fonction Bouton Submit*/

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let newChrono =
    parseInt(hourInput.value * 60) +
    parseInt(minuteInput.value) +
    "." +
    secondInput.value;
  /**********  CUSTOM || DISTANCE **********/
  if (distanceInput.style.display == "none") {
    newDistance = customInput.value;
  } else {
    newDistance = distanceInput.value / 1000;
  }
  /********** RESULTAT **********/
  let resultSpeed = (newDistance / (newChrono / 60)).toFixed(2);
  let secondPace = (
    ((newChrono / newDistance).toFixed(2).toString().split(".")[1] * 60) /
    100
  )
    .toFixed(2)
    .toString()
    .split(".")[0];

  let minutePace = (newChrono / newDistance)
    .toFixed(2)
    .toString()
    .split(".")[0];
  console.log(minutePace);
  console.log(secondPace);

  if (secondPace < 10) {
    newsecondPace = "0" + secondPace;
    console.log(newsecondPace);
  } else {
    newsecondPace = secondPace;
  }
  let resultPace = minutePace + "." + newsecondPace;
  // let resultPace = (newChrono / newDistance).toFixed(2);
  if (newChrono == 0 || distanceInput.value == 0) {
    speedSpan.textContent = "0 " + "km/h";
    paceSpan.textContent = " 0" + "min/km";
  } else {
    speedSpan.textContent =
      newDistance +
      "km à " +
      resultSpeed +
      "km/h en " +
      parseInt(newChrono) +
      "min";
    paceSpan.textContent = resultPace + "min/km";
  }
  distanceInput.style.display = "";
  customInput.style.display = "none";
  distanceInput.value = 0;
  inputDefault();
});

/********** DEFAULT FONCTION**********/
const inputDefault = () => {
  for (i = 0; i < timeInputs.length; i++)
    if (timeInputs[i].value > 59) {
      timeInputs[i].style.color = "red";
      speedSpan.textContent = "Veuillez Renseigner un chiffre de 0 à 59";
      paceSpan.textContent = "Et Voilou";
    } else {
      timeInputs[i].style.color = "black";
    }
};

/**********  CUSTOM FONCTION **********/
const customDistance = () => {
  distanceInput.addEventListener("click", (e) => {
    if (distanceInput.value == "custom") {
      distanceInput.style.display = "none";
      customInput.style.display = "";
    }
  });
};

customDistance();
