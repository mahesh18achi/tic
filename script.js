let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(index) {
  if (board[index] === '' && gameActive) {
    board[index] = currentPlayer;
    renderBoard();
    checkWinner();
    togglePlayer();
  }
}

function togglePlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      displayWinner(board[a]);
      gameActive = false;
      return;
    }
  }

  if (!board.includes('') && gameActive) {
    displayDraw();
    gameActive = false;
  }
}

function displayWinner(winner) {
  document.getElementById('message').textContent = `Player ${winner} wins!`;
}

function displayDraw() {
  document.getElementById('message').textContent = 'It\'s a draw!';
}

function renderBoard() {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell, index) => {
    cell.textContent = board[index];
  });
}

function resetGame() {
  currentPlayer = 'X';
  board = ['', '', '', '', '', '', '', '', ''];
  gameActive = true;
  document.getElementById('message').textContent = '';
  renderBoard();
}
