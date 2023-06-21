/*Varibale Chrono */
const chronoBtn = document.getElementById("chrono-btn");
const chronoCtn = document.getElementById("chrono-ctn");
let chronoValue;
let interval;

/*Fonction Chrono */
function countDown() {
  const minutes = Math.floor(chronoValue / 60);
  const seconds = chronoValue % 60;
  const sec = seconds < 10 ? "0" + seconds : seconds;
  chronoCtn.textContent = `${minutes} : ${sec}`;
  if (chronoValue > 0) {
    chronoValue--;
  } else {
    chronoCtn.textContent = `00 : 00`;
    clearInterval(interval);
  }
}

/*Bouton Chrono*/
chronoBtn.addEventListener("click", (e) => {
  chronoValue = 361;
  clearInterval(interval);
  interval = setInterval(countDown, 100);
});

/**BoutonExercice un bouton qui se decremente à chaque click  */
