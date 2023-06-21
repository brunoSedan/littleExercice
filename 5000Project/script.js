// const hand = {
//   dice1: 4,
//   dice2: 5,
//   dice3: 5,
//   dice4: 2,
//   dice5: 5,
// };
const handData = [4, 3, 3, 4, 4];
let n;

// console.log(handData[1]);

function ResearchData() {
  for (i = 0; i < handData.length; i++) {
    const newHand = handData.filter((el) => el === i);
    if (newHand.length == 3) {
      console.log("il y a brelan");
      console.log(newHand[1]);
    } else if (newHand.length == 4) {
      console.log("mais un carré");
    } else if (newHand.length == 5) {
      console.log("c'est un bingo");
    }
  }
}

ResearchData();
