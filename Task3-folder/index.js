const cells = document.querySelectorAll('.cell');
const statusDisplay = document.getElementById('status');
const resetButton = document.getElementById('reset');
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', '']; // Represents the 3x3 grid
let gameActive = true;

const winningConditions = [
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Diagonal from top-left to bottom-right
    [2, 4, 6]  // Diagonal from top-right to bottom-left
];

// Handle player turns and update the cell
function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedIndex = clickedCell.getAttribute('data-index');

    // If the cell is already filled or the game is over, ignore the click
    if (gameState[clickedIndex] !== '' || !gameActive) {
        return;
    }

    // Update the clicked cell and change the current player
    gameState[clickedIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;

    // Check if the current player won the game
    checkResult();
}

function checkResult() {
    let roundWon = false;

    // Check if any of the winning conditions are met
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        statusDisplay.textContent = `Player ${currentPlayer} Wins!`;
        gameActive = false;
        return;
    }

    // Check for a tie (all cells are filled and no winner)
    const roundDraw = !gameState.includes('');
    if (roundDraw) {
        statusDisplay.textContent = "It's a Draw!";
        gameActive = false;
        return;
    }

    // Switch to the next player
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
}

// Reset the game
function resetGame() {
    currentPlayer = 'X';
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    statusDisplay.textContent = `Player ${currentPlayer}'s turn`;

    cells.forEach(cell => {
        cell.textContent = '';
    });
}

// Attach event listeners to each cell and the reset button
cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);

// Initialize the game
statusDisplay.textContent = `Player ${currentPlayer}'s turn`;
