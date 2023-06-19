const fontArray = ["bell", "bree", "charle", "inter", "merri", "philo"];
const lettres = [...document.querySelectorAll("span")];
const size = ["2rem", "3rem", "4rem", "5rem", "6rem"];

const changeFont = () =>
  setInterval(function () {
    const randomSize = size[Math.floor(Math.random() * size.length)];
    const fontRandom = fontArray[Math.floor(Math.random() * fontArray.length)];
    const randomLettre = lettres[Math.floor(Math.random() * lettres.length)];
    randomLettre.style.fontFamily = fontRandom;
    randomLettre.style.fontSize = randomSize;

    //   titre.style.fontFamily = fontRandom;
  }, 400);

changeFont();
changeFont();
changeFont();
