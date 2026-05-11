// Game Configuration
const BOARD_SIZE = 100;
const BOARD_COLS = 10;
const SNAKES = {
    17: 4,
    54: 31,
    62: 19,
    87: 36,
    93: 73,
    95: 75,
    98: 79
};

const LADDERS = {
    2: 38,
    7: 14,
    15: 26,
    21: 42,
    28: 84,
    51: 67,
    72: 91,
    78: 98
};

// Game State
let gameState = {
    player1Position: 1,
    player2Position: 1,
    currentPlayer: 1,
    gameOver: false,
    winner: null,
    diceValue: 0
};

// Initialize Game
function initGame() {
    createBoard();
    updateUI();
}

// Create Game Board
function createBoard() {
    const board = document.getElementById('game-board');
    board.innerHTML = '';

    // Create cells from 100 down to 1 (reverse order for proper display)
    const cells = [];
    for (let i = BOARD_SIZE; i >= 1; i--) {
        cells.push(i);
    }

    cells.forEach((cellNumber) => {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.id = `cell-${cellNumber}`;
        cell.textContent = cellNumber;

        // Add snake/ladder indicators
        if (SNAKES[cellNumber]) {
            cell.classList.add('snake');
        } else if (LADDERS[cellNumber]) {
            cell.classList.add('ladder');
        }

        board.appendChild(cell);
    });
}

// Roll Dice Function
function rollDice(player) {
    if (gameState.gameOver) {
        alert('Game Over! ' + gameState.winner + ' Won! Click Reset to play again.');
        return;
    }

    if (gameState.currentPlayer !== player) {
        alert(`It's Player ${gameState.currentPlayer}'s turn!`);
        return;
    }

    // Roll dice (1-6)
    const diceValue = Math.floor(Math.random() * 6) + 1;
    gameState.diceValue = diceValue;

    // Update dice display
    document.getElementById('dice-value').textContent = diceValue;

    // Calculate new position
    if (gameState.currentPlayer === 1) {
        let newPosition = gameState.player1Position + diceValue;
        
        // Check if position exceeds 100
        if (newPosition > BOARD_SIZE) {
            updateMessage(`Player 1 rolled ${diceValue}. Position exceeds 100. Skip turn!`);
            switchPlayer();
            return;
        }

        gameState.player1Position = newPosition;

        // Check for snake or ladder
        const finalPosition = checkSnakeOrLadder(newPosition);
        if (finalPosition !== newPosition) {
            if (SNAKES[newPosition]) {
                updateMessage(`Player 1 rolled ${diceValue}. Hit a snake! Moved from ${newPosition} to ${finalPosition}.`);
            } else {
                updateMessage(`Player 1 rolled ${diceValue}. Climbed a ladder! Moved from ${newPosition} to ${finalPosition}.`);
            }
            gameState.player1Position = finalPosition;
        } else {
            updateMessage(`Player 1 rolled ${diceValue}. Moved to position ${newPosition}.`);
        }

        document.getElementById('player1-position').textContent = `Position: ${gameState.player1Position}`;

        // Check for win
        if (gameState.player1Position === BOARD_SIZE) {
            gameState.gameOver = true;
            gameState.winner = 'Player 1 (Red)';
            updateMessage('🎉 Player 1 (Red) Won the Game! 🎉');
            disableButtons();
            return;
        }
    } else {
        let newPosition = gameState.player2Position + diceValue;
        
        // Check if position exceeds 100
        if (newPosition > BOARD_SIZE) {
            updateMessage(`Player 2 rolled ${diceValue}. Position exceeds 100. Skip turn!`);
            switchPlayer();
            return;
        }

        gameState.player2Position = newPosition;

        // Check for snake or ladder
        const finalPosition = checkSnakeOrLadder(newPosition);
        if (finalPosition !== newPosition) {
            if (SNAKES[newPosition]) {
                updateMessage(`Player 2 rolled ${diceValue}. Hit a snake! Moved from ${newPosition} to ${finalPosition}.`);
            } else {
                updateMessage(`Player 2 rolled ${diceValue}. Climbed a ladder! Moved from ${newPosition} to ${finalPosition}.`);
            }
            gameState.player2Position = finalPosition;
        } else {
            updateMessage(`Player 2 rolled ${diceValue}. Moved to position ${newPosition}.`);
        }

        document.getElementById('player2-position').textContent = `Position: ${gameState.player2Position}`;

        // Check for win
        if (gameState.player2Position === BOARD_SIZE) {
            gameState.gameOver = true;
            gameState.winner = 'Player 2 (Blue)';
            updateMessage('🎉 Player 2 (Blue) Won the Game! 🎉');
            disableButtons();
            return;
        }
    }

    // Update board display
    updateBoardDisplay();

    // Switch player
    switchPlayer();
}

// Check for Snake or Ladder
function checkSnakeOrLadder(position) {
    if (SNAKES[position]) {
        return SNAKES[position];
    } else if (LADDERS[position]) {
        return LADDERS[position];
    }
    return position;
}

// Switch Current Player
function switchPlayer() {
    gameState.currentPlayer = gameState.currentPlayer === 1 ? 2 : 1;
    updateButtonStates();
}

// Update Message
function updateMessage(message) {
    document.getElementById('message').textContent = message;
}

// Update UI
function updateUI() {
    updateBoardDisplay();
    updateButtonStates();
    document.getElementById('player1-position').textContent = `Position: ${gameState.player1Position}`;
    document.getElementById('player2-position').textContent = `Position: ${gameState.player2Position}`;
    updateMessage(`Game Started! Player ${gameState.currentPlayer}'s turn`);
}

// Update Board Display
function updateBoardDisplay() {
    // Clear all player indicators
    document.querySelectorAll('.cell').forEach(cell => {
        cell.classList.remove('player1', 'player2', 'both');
    });

    // Add player positions
    if (gameState.player1Position === gameState.player2Position) {
        const cell = document.getElementById(`cell-${gameState.player1Position}`);
        if (cell) {
            cell.classList.add('both');
        }
    } else {
        const cell1 = document.getElementById(`cell-${gameState.player1Position}`);
        if (cell1) {
            cell1.classList.add('player1');
        }

        const cell2 = document.getElementById(`cell-${gameState.player2Position}`);
        if (cell2) {
            cell2.classList.add('player2');
        }
    }
}

// Update Button States
function updateButtonStates() {
    const player1Btn = document.getElementById('player1-btn');
    const player2Btn = document.getElementById('player2-btn');

    if (gameState.gameOver) {
        player1Btn.disabled = true;
        player2Btn.disabled = true;
    } else {
        player1Btn.disabled = gameState.currentPlayer !== 1;
        player2Btn.disabled = gameState.currentPlayer !== 2;
    }
}

// Disable Buttons
function disableButtons() {
    document.getElementById('player1-btn').disabled = true;
    document.getElementById('player2-btn').disabled = true;
}

// Reset Game
function resetGame() {
    gameState = {
        player1Position: 1,
        player2Position: 1,
        currentPlayer: 1,
        gameOver: false,
        winner: null,
        diceValue: 0
    };

    document.getElementById('dice-value').textContent = '-';
    initGame();
}

// Initialize game on page load
document.addEventListener('DOMContentLoaded', initGame);
