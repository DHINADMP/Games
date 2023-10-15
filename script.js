const board = document.getElementById("board");

const message = document.getElementById("message");

const cells = [];

let currentPlayer = "X";

let gameOver = false;

// Create the Tic Tac Toe grid

for (let i = 0; i < 3; i++) {

  for (let j = 0; j < 3; j++) {

    const cell = document.createElement("div");

    cell.classList.add("cell");

    cell.dataset.row = i;

    cell.dataset.col = j;

    cell.addEventListener("click", handleClick);

    cells.push(cell);

    board.appendChild(cell);

  }

}

function checkWinner() {

  const winPatterns = [

    [0, 1, 2],

    [3, 4, 5],

    [6, 7, 8],

    [0, 3, 6],

    [1, 4, 7],

    [2, 5, 8],

    [0, 4, 8],

    [2, 4, 6],

  ];

  for (const pattern of winPatterns) {

    const [a, b, c] = pattern;

    if (