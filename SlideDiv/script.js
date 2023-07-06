const previousBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");
const allDiv = document.querySelectorAll(".display");
let divCounter = 1;

const divClass = () => {
  let newDive = "div" + divCounter;
  let idDive = document.getElementById(newDive);
  idDive.classList.remove("hidden");
};

const divDisplay = () => {
  if (divCounter > allDiv.length) {
    divCounter = 1;
  } else if (divCounter < 1) {
    divCounter = allDiv.length;
  }
  allDiv.forEach((div) => div.classList.add("hidden"));
  divClass();
};

previousBtn.addEventListener("click", () => {
  divCounter--;
  divDisplay();
});
nextBtn.addEventListener("click", () => {
  divCounter++;
  divDisplay();
});
