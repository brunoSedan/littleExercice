//***************-----------------VARIABLES---------------***************** */
//**---------Display************ */
const throwResult = document.getElementById("dice-throw");
const AnalyseCtn = document.getElementById("dice-result");
const nextCtn = document.getElementById("dice-continuer");
const handData = [];
const counterCtn = document.getElementById("dice-counter");
//**---------BTN------------- */
const playBtn = document.getElementById("first");
const secondBtn = document.getElementById("second");
const passBtn = document.getElementById("pass");
const replayBtn = document.getElementById("replay");
secondBtn.style.display = "none";
passBtn.style.display = "none";
replayBtn.style.display = "none";

/////////////*********------Dice----*----*********/////////////
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const allDice = document.querySelectorAll(".dice");

/////////////////************---------Mooving Variable----------****************/////////////
let nbChoice;
let counterSave = 0;
let counterNbr = 0;
let diceFive = 0;
let diceOne = 0;
let diceBingo = 0;
let rest = 0;
let diceCount = 0;
let nb = 0;
playGame();

//*****************-------------------FONCTION-------------------****************////////
/**-------Play Game Function------------- */

function playGame() {
  // resetDice();secondBtn.style.display = "none";
  passBtn.style.display = "none";
  replayBtn.style.display = "none";
  playBtn.style.display = "block";
  playBtn.addEventListener("click", (e) => {
    nb++;

    if (nb == 1) {
      allDice.forEach((dice) => {
        for (i = 0; i <= 6; i++) {
          dice.classList.remove("display" + i);
        }
        dice.classList.remove("rest", "selected");
        dice.classList.add("dice");
      });
      DiceRandom();
      handData.push(nbDice1, nbDice2, nbDice3, nbDice4, nbDice5);
      diceDisplay();
      searchBingo();
      searchRest();
      replay();
      counter();
      pass();
    }
    playBtn.style.display = "none";
    // console.log(nb);
  });
}

function pass() {
  passBtn.addEventListener("click", (e) => {
    console.log(counterSave);
    /**Joueur suivant joue */
  });
}

function reset() {
  replayBtn.addEventListener("click", (e) => {
    playGame();
    counterSave = counterNbr;
    nb = 0;
    console.log(counterSave);
  });
}

//***------Second Lancer */
function secondThrow() {
  secondBtn.style.display = "block";
  passBtn.style.display = "block";
  secondBtn.addEventListener("click", (e) => {
    nb++;
    if (nb == 1) {
      throwResult.textContent = "";
      AnalyseCtn.textContent = "";
      allDice.forEach((dice) => {
        if (!dice.classList.contains("rest")) {
          for (i = 0; i < 7; i++) {
            dice.classList.remove("display" + i);
          }
          dice.value = random(1, 6);
          dice.classList.add("display" + dice.value);
        }
        if (dice.classList.contains("rest")) {
          dice.classList.remove("selected");
          dice.classList.remove("dice");
        }
      });
      secondBtn.style.display = "none";
      searchRest();
      searchBingo();
      replay();
      counter();
      pass();
    }
    // replay();
  });
}

/**------------Fonction Counter-------------***/

function counter() {
  diceOne = 0;
  diceFive = 0;
  allDice.forEach((dice) => {
    if (dice.value == 1) {
      diceOne++;
    }
    if (dice.value == 5) {
      diceFive++;
    }
    counterNbr = diceFive * 50 + diceOne * 100 + counterSave;
    counterCtn.textContent = counterNbr;
  });
}

/**---------Fonction Retirage */
function replay() {
  allDice.forEach((dice) => {
    if (dice.classList.contains("selected")) {
      diceCount++;
    }
    if (dice.classList.contains("rest")) {
      rest++;
    }
  });
  if (rest == 5) {
    diceCount = 5;
  }

  switch (diceCount) {
    case 0:
      nextCtn.textContent = "vous avez perdu";
      counterNbr == 0;
      counterCtn.textContent = counterNbr;
      diceCount = 0;
      rest = 0;
      break;
    case 5:
      nextCtn.textContent = "vous avez tout gagné";
      diceCount = 0;
      rest = 0;
      replayBtn.style.display = "block";
      reset();

      break;
    default:
      nextCtn.textContent = "vous pouvez rejouer des des";
      secondThrow();
      nb--;
      rest = 0;
      diceCount = 0;
      diceBingo = 0;
      break;
  }
}

/**--------------FONCTION EACH POSIBILITIE---------------**/

function searchBingo() {
  allDice.forEach((dice) => {
    if (dice.value == 5) {
      diceBingo++;
    }
  });
  if (diceBingo == 5) {
    AnalyseCtn.textContent = "bingo!!!";
  }
}

function searchRest() {
  allDice.forEach((dice) => {
    if (
      dice.classList.contains("dice") &&
      (dice.value == 5 || dice.value == 1)
    ) {
      dice.classList.add("selected", "rest");
    }
  });
}

//*********Fonction DICE********* */
/** Fonction Aleatoire */
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is inclusive and the minimum is inclusive
}
/*-----Math Random---------- */
function DiceRandom() {
  nbDice1 = random(1, 6);
  nbDice2 = random(1, 6);
  nbDice3 = random(1, 6);
  nbDice4 = random(1, 6);
  nbDice5 = random(1, 6);
}
// function DiceRandom() {
//   nbDice1 = 5;
//   nbDice2 = 1;
//   nbDice3 = 5;
//   nbDice4 = 5;
//   nbDice5 = 5;
// }
function diceDisplay() {
  dice1.value = nbDice1;
  dice1.classList.add("display" + nbDice1);
  dice2.value = nbDice2;
  dice2.classList.add("display" + nbDice2);
  dice3.value = nbDice3;
  dice3.classList.add("display" + nbDice3);
  dice4.value = nbDice4;
  dice4.classList.add("display" + nbDice4);
  dice5.value = nbDice5;
  dice5.classList.add("display" + nbDice5);
}

// function searchLtlSuite() {
//   const DataLtlSuite = handData.sort();
//   const ltlSuite = [1, 2, 3, 4, 5];
//   if (ltlSuite.toString() == DataLtlSuite.toString()) {
//     return true;
//   }
// }

// function searchBgSuite() {
//   const DataBgSuite = handData.sort();
//   const BgSuite = [2, 3, 4, 5, 6];
//   if (BgSuite.toString() == DataBgSuite.toString()) {
//     return true;
//   }
// }

// function searchBrelan() {
//   for (i = 0; i <= handData.length; i++) {
//     const newData = handData.filter((el) => el === i);
//     if (newData.length >= 3 && !(newData.length == 5 && newData[1] == 5)) {
//       nbChoice = newData[1];
//       return true;
//     }
//   }
// }
