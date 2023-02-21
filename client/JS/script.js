// create a grid of 3 rows and 3 columns with a button in each cell
// when you click a game button in a grid make it cycle x, o, blank.
// determine if there is a winner and who the winner is.
// instead of using .innerHTML consider using .textContent which

////////////////////////////////////////////////////
///////////////--------------------/////////////////
//////////////||PLAYERS MOVE/CLICK||////////////////
///////////////--------------------/////////////////
////////////////////////////////////////////////////
let ticTacToeXOBlank = ["X", "O", ""]; //ran into errors because "" / " "
let currentSymbol = 0;
let gameButtons = document.getElementsByClassName("grid-button");
playerX = ticTacToeXOBlank[0];
playerO = ticTacToeXOBlank[1];
// // This function makes each click regardless of where iterate the array
const buttonGameClicked = (event) => {
  event.target.innerHTML = ticTacToeXOBlank[currentSymbol];
  currentSymbol++;
  if (currentSymbol >= ticTacToeXOBlank.length) {
    currentSymbol = 0;
  }
  //Call checkWinner function for O and X otherwise display nothing
  let scoreText = document.getElementById("score-text");
  let xWins = () => {
    scoreText.innerHTML = "X is the Winner!";
  }; //X wins
  let oWins = () => {
    scoreText.innerHTML = "O is the Winner!";
  }; //O wins
  let noText = () => {
    scoreText.innerHTML = " ";
  }; //empty string
  if (checkWinner("X")) {
    xWins();
  } else if (checkWinner("O")) {
    oWins();
  } else {
    noText();
  }
};

for (
  let gridCollection = 0;
  gridCollection < gameButtons.length;
  gridCollection++
) {
  gameButtons[gridCollection].addEventListener("click", buttonGameClicked);
}

//This function makes each cell button iterate individually (x, O, blank)
// const buttonGameClicked = (event) => {
//   if (event.target.innerHTML == ticTacToeXOBlank[0]) {
//     event.target.innerHTML = ticTacToeXOBlank[1];
//   } else if (event.target.innerHTML == ticTacToeXOBlank[1]) {
//     event.target.innerHTML = ticTacToeXOBlank[2];
//   } else event.target.innerHTML = ticTacToeXOBlank[0];
//   //Call checkWinner function for O and X otherwise display nothing
//   let scoreText = document.getElementById("score-text");
//   let xWins = () => {
//     scoreText.innerHTML = "X is the Winner!";
//   }; //X wins
//   let oWins = () => {
//     scoreText.innerHTML = "O is the Winner!";
//   }; //O wins
//   let noText = () => {
//     scoreText.innerHTML = " ";
//   }; //empty string
//   if (checkWinner("X")) {
//     xWins();
//   } else if (checkWinner("O")) {
//     oWins();
//   } else {
//     noText();
//   }
// };
// loop over the grid-buttons and add click function to them.
// for (
//   let gridCollection = 0;
//   gridCollection < gameButtons.length;
//   gridCollection++
// ) {
//   gameButtons[gridCollection].addEventListener("click", buttonGameClicked);
// }
////////////////////////////////////////////////////
///////////////--------------------/////////////////
//////////////||CHECK FOR A WINNER||////////////////
///////////////--------------------/////////////////
////////////////////////////////////////////////////
function checkWinner(player) {
  let winMatrix = [
    [
      gameButtons[0].innerHTML,
      gameButtons[1].innerHTML,
      gameButtons[2].innerHTML,
    ],
    [
      gameButtons[3].innerHTML,
      gameButtons[4].innerHTML,
      gameButtons[5].innerHTML,
    ],
    [
      gameButtons[6].innerHTML,
      gameButtons[7].innerHTML,
      gameButtons[8].innerHTML,
    ],
  ];
  //check the rows
  for (let row = 0; row < 3; row++) {
    //
    if (winMatrix[row].every((cell) => cell === player)) {
      return true;
    }
  }
  // checks the columns
  for (let col = 0; col < 3; col++) {
    let column = [winMatrix[0][col], winMatrix[1][col], winMatrix[2][col]];
    if (column.every((cell) => cell === player)) {
      return true;
    }
  }
  //checks the first diagonal
  let diag1 = [winMatrix[0][0], winMatrix[1][1], winMatrix[2][2]];
  if (diag1.every((cell) => cell === player)) {
    return true;
  }
  //checks the second diagonal
  let diag2 = [winMatrix[0][2], winMatrix[1][1], winMatrix[2][0]];
  if (diag2.every((cell) => cell === player)) {
    return true;
  }
  return false;
}
