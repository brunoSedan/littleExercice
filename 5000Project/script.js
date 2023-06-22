const playBtn = document.querySelector(".play");
const throwResult = document.querySelector(".dice-throw");
const AnalyseCtn = document.querySelector(".dice-result");
let nbChoice;
const handData = [];
// let dice1;

let nb = 0;
playGame();

/**-------Play Game Function------------- */

function playGame() {
  playBtn.addEventListener("click", (e) => {
    nb++;
    DiceRandom();
    if (nb == 1) handData.push(dice1, dice2, dice3, dice4, dice5);
    console.log(handData);
    throwResult.innerHTML = `<button id="dice1"  class="dice${dice1}"  >${dice1}</button>
    <button id="dice2" class="dice${dice2}" >${dice2}</button>
    <button id="dice3" class="dice${dice3}" >${dice3}</button>
    <button id="dice4" class="dice${dice4}" >${dice4}</button>
    <button id="dice5" class="dice${dice5}" >${dice5}</button>`;
    playBtn.style.display = "none";
    analyse();
    // for (i = 1; i <= 6; i++) {
    // let dice = "dice" + [i];
    // if ((dice = nbChoice)) {
    // console.log("yes");
    // }
    // }
    // console.log(nbChoice);

    // diceUnSelected();
  });
}
// Math.ceil(Math.random() * 6);
/*-----Math Random---------- */
function DiceRandom() {
  dice1 = 3;
  dice2 = 3;
  dice3 = 3;
  dice4 = 1;
  dice5 = 2;
}
/**-------FONCTION INNER HTML --------------------*/
function resultDisplay() {}

/**--------- FONCTION ANALYSE ----------*/

function analyse() {
  if (searchBingo()) {
    console.log("bingo");
  } else if (searchBgSuite()) {
    console.log("bgSuite");
  } else if (searchLtlSuite()) {
    console.log("ltlsuite");
  } else if (searchBrelan()) {
    newData = handData.filter((number) => number != nbChoice);
    searchRest(newData);

    // dice[nbChoice].style.color = "red";
  } else if ((newData = handData)) {
    searchRest(newData);
  } else {
    console.log("loose");
  }
}

/**--------------FONCTION EACH CASE---------------**/

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

function searchBrelan(newdata) {
  for (i = 0; i <= handData.length; i++) {
    const newData = handData.filter((el) => el === i);
    if (newData.length >= 3 && !(newData.length == 5 && newData[1] == 5)) {
      console.log("il y a brelan de " + newData[1]);
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
    console.log(" il y a des 5 ou des 1");
  }
}
