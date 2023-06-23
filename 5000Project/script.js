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
      DiceRandom();
      handData.push(nbDice1, nbDice2, nbDice3, nbDice4, nbDice5);
      dice1.textContent = nbDice1;
      dice1.classList.add("dice" + nbDice1);
      dice2.textContent = nbDice2;
      dice2.classList.add("dice" + nbDice2);
      dice3.textContent = nbDice3;
      dice3.classList.add("dice" + nbDice3);
      dice4.textContent = nbDice4;
      dice4.classList.add("dice" + nbDice4);
      dice5.textContent = nbDice5;
      dice5.classList.add("dice" + nbDice5);
      analyse();
      replay();
    }
  });
}

//** ----Fonction Dice Display Reset----- */
function resetDice() {
  allDice.forEach((dice) => {
    dice.textContent = "";
    dice.classList.remove("selected", "bingo", "suite", "rest", "brelan");
    // for (i = 0; i <= 5; i++) {
    //   dice.classList.remove("dice" + i);
    // }
  });
}
//***------Second Lancer */
function secondThrow() {
  secondBtn.addEventListener("click", (e) => {
    if (nb == 1) {
      nb++;
      throwResult.textContent = "";
      AnalyseCtn.textContent = "";
      allDice.forEach((dice) => {
        if (!dice.classList.contains("selected")) {
          dice.textContent = random(1, 6);
        }
      });
      analyse();
    }
    // replay();
    console.log(nb);
  });
}

/**---------Fonction Retirage */
function replay() {
  allDice.forEach((dice) => {
    if (dice.classList.contains("selected")) {
      diceCount++;
    }
  });
  switch (diceCount) {
    case 0:
      nextCtn.textContent = "vous avez perdu";
      diceCount = 0;
      break;
    case 5:
      nextCtn.textContent = "vous avez tout gagné";
      diceCount = 0;
      return playGame();
      break;
    default:
      nextCtn.textContent = "vous pouvez rejouer des des";
      secondThrow();
      diceCount = 0;
      break;
  }
}
/**--------- FONCTION ANALYSE ----------*/

function analyse() {
  if (searchBingo()) {
    AnalyseCtn.textContent = `C'est un bingo!`;
    allDice.forEach((dice) => {
      dice.classList.add("bingo", "selected");
    });
  } else if (searchBgSuite()) {
    AnalyseCtn.textContent = `Une Chance une grande suite!`;
    allDice.forEach((dice) => {
      dice.classList.add("suite", "selected");
    });
  } else if (searchLtlSuite()) {
    AnalyseCtn.textContent = `Une Chance Petite suite!`;
    allDice.forEach((dice) => {
      dice.classList.add("suite", "selected");
    });
  } else if (searchBrelan()) {
    newData = handData.filter((number) => number != nbChoice);
    AnalyseCtn.textContent = `Un petit brelan de ${nbChoice}!`;
    searchRest(newData);
    allDice.forEach((dice) => {
      if (dice.textContent == nbChoice) {
        dice.classList.add("brelan", "selected"); //***SOuligner juste 3 nbCHoice *!!!!/
      }
    });
  } else if ((newData = handData)) {
    searchRest(newData);
  }
}

/**--------------FONCTION EACH POSIBILITIE---------------**/

function searchLtlSuite() {
  const DataLtlSuite = handData.sort();
  const ltlSuite = [1, 2, 3, 4, 5];
  if (ltlSuite.toString() == DataLtlSuite.toString()) {
    return true;
  }
}

function searchBgSuite() {
  const DataBgSuite = handData.sort();
  const BgSuite = [2, 3, 4, 5, 6];
  if (BgSuite.toString() == DataBgSuite.toString()) {
    return true;
  }
}

function searchBrelan() {
  for (i = 0; i <= handData.length; i++) {
    const newData = handData.filter((el) => el === i);
    if (newData.length >= 3 && !(newData.length == 5 && newData[1] == 5)) {
      nbChoice = newData[1];
      return true;
    }
  }
}

function searchBingo() {
  const newData = handData.sort().filter((el) => el === 5);
  if (newData.length == 5) {
    return true;
  }
}

function searchRest(newData) {
  fiveData = newData.filter((number) => number == 5);
  oneData = newData.filter((number) => number == 1);
  if (fiveData.length > 0 || oneData.length > 0) {
    AnalyseCtn.textContent += `Vous avez des 5 ou des 1`;
    allDice.forEach((dice) => {
      if (dice.textContent == 1 || dice.textContent == 5) {
        dice.classList.add("rest", "selected");
      }
    });
  }
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
//   nbDice2 = 5;
//   nbDice3 = 5;
//   nbDice4 = 5;
//   nbDice5 = 5;
// }
