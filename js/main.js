/*Eye Tac Toe Game created by
Ben Nachmanson, Christian Rouhana,
Jeff Bailie
Feb 23 2020
CrimsonCode2020 */

/* array of winning combos to help determine win state */
const winningCombos = [
  [2, 5, 8], [0, 4, 8], [0, 1, 2], 
  [3, 4, 5], [6, 7, 8], [0, 3, 6], 
  [1, 4, 7], [2, 4, 6]
];

let board;
let turn = "X";
let win;

const squares = Array.from(document.querySelectorAll("#board div"));

/* event listeners to detect userinput */
document.getElementById("board").addEventListener("click", handleTurn);
const messages = document.querySelector("h2");
document.getElementById("reset-button").addEventListener("click", init);

/* init function for reset */
function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  render();
}

/* Checks for win state */
function getWinner() {
  let winner = null;
  winningCombos.forEach(function(combo, index) {
    if (
      board[combo[0]] &&
      board[combo[0]] === board[combo[1]] &&
      board[combo[0]] === board[combo[2]]
    )
      winner = board[combo[0]];
  });
  return winner ? winner : board.includes("") ? null : "T";
}

/* handles switching between X and O */
function handleTurn() {
  let i = squares.findIndex(function(square) {
    return square === event.target;
  });
  if (board[i] === "" && win != "X" && win != "O") {
    board[i] = turn;
    turn = turn === "X" ? "O" : "X";
  }
  win = getWinner();
  render();
}

/* Draws changes in board */
function render() {
  board.forEach(function(mark, index) {
    squares[index].textContent = mark;
  });
  messages.textContent =
    win === "T" ? `Tie!` : win ? `${win} wins!` : `${turn}'s turn`;
}

init();
