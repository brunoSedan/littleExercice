//***************-----------------VARIABLES---------------***************** */
//**---------Display************ */
const playBtn = document.getElementById("first");
const secondBtn = document.getElementById("second");
const throwResult = document.getElementById("dice-throw");
const AnalyseCtn = document.getElementById("dice-result");
const nextCtn = document.getElementById("dice-continuer");
const handData = [];
/////////////*********------Dice----*----*********/////////////
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const dice3 = document.getElementById("dice3");
const dice4 = document.getElementById("dice4");
const dice5 = document.getElementById("dice5");
const allDice = document.querySelectorAll(".dice");

/////////////////************---------Mooving Variable----------****************/////////////
let nbChoice;
let diceFive = 0;
let rest = 0;
let diceCount = 0;
let nb = 0;
playGame();

//*****************-------------------FONCTION-------------------****************////////
/**-------Play Game Function------------- */

function playGame() {
  // resetDice();
  playBtn.addEventListener("click", (e) => {
    nb++;

    if (nb == 1) {
      allDice.forEach((dice) => {
        dice.classList.remove("display0");
      });
      DiceRandom();
      handData.push(nbDice1, nbDice2, nbDice3, nbDice4, nbDice5);
      diceDisplay();
      searchBingo();
      searchRest();
      replay();
    }
    playBtn.style.display = "none";
    // console.log(nb);
  });
}

//** ----Fonction Dice Display Reset----- */
// function resetDice() {
//   allDice.forEach((dice) => {
//     dice.textContent = "";
//     dice.classList.remove("selected", "bingo", "suite", "rest", "brelan");
//     // for (i = 0; i <= 5; i++) {
//     //   dice.classList.remove("dice" + i);
//     // }
//   });
// }
//***------Second Lancer */
function secondThrow() {
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
      searchRest();
      searchBingo();
      replay();
    }
    // replay();
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

  console.log(rest);
  switch (diceCount) {
    case 0:
      nextCtn.textContent = "vous avez perdu";
      diceCount = 0;
      rest = 0;
      break;
    case 5:
      nextCtn.textContent = "vous avez tout gagné";
      diceCount = 0;
      return playGame();
      break;
    default:
      nextCtn.textContent = "vous pouvez rejouer des des";
      secondThrow();
      nb--;
      rest = 0;
      diceCount = 0;
      break;
  }
}

/**--------------FONCTION EACH POSIBILITIE---------------**/

function searchBingo() {
  allDice.forEach((dice) => {
    if ((dice.value = 5)) {
      diceFive++;
    }
    if (diceFive == 5) {
      AnalyseCtn.textContent = "bingo!!!";
    }
  });
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

// function searchRest(newData) {
//   fiveData = newData.filter((number) => number == 5);
//   oneData = newData.filter((number) => number == 1);
//   if (fiveData.length > 0 || oneData.length > 0) {
//     AnalyseCtn.textContent += `Vous avez des 5 ou des 1`;
//     allDice.forEach((dice) => {
//       if (dice.value == 1 || dice.value == 5) {
//         dice.classList.add("rest", "selected");
//       }
//     });
//   }
// }
//*********Fonction DICE********* */
/** Fonction Aleatoire */
function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  //The maximum is inclusive and the minimum is inclusive
}
/*-----Math Random---------- */
// function DiceRandom() {
//   nbDice1 = random(1, 6);
//   nbDice2 = random(1, 6);
//   nbDice3 = random(1, 6);
//   nbDice4 = random(1, 6);
//   nbDice5 = random(1, 6);
// }
function DiceRandom() {
  nbDice1 = 5;
  nbDice2 = 5;
  nbDice3 = 5;
  nbDice4 = 5;
  nbDice5 = 5;
}
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
