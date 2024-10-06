let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msgcontn = document.querySelector(".msg-container");
let msg = document.querySelector(".win");
let turnO = true; // playerO's turn initially
let gameOver = false; // To track if the game is over

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

// Add event listeners to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // Check if the game is over or the box is already filled
        if (!gameOver && box.innerText === "") {
            if (turnO) {
                box.innerText = "O"; // Assign 'O' to the box
                turnO = false; // Switch turn to 'X'
            } else {
                box.innerText = "X"; // Assign 'X' to the box
                turnO = true; // Switch turn to 'O'
            }
            checkWinner(); // Check if there is a winner after the move
        }
    });
});

// Check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            boxes[a].innerText !== "" && // Check whether the first box is not empty
            boxes[a].innerText === boxes[b].innerText && // Compare the first and second box
            boxes[a].innerText === boxes[c].innerText // Compare the first and third box
        ) {
            console.log(`Player ${boxes[a].innerText} wins!`);
            showWinner(boxes[a].innerText); // Pass the winner to the showWinner function
            gameOver = true; // Mark the game as over
            return;
        }
    }
};

// Show the winner
const showWinner = (winner) => {
    msgcontn.style.display = "block"; // Make the message container visible
    msg.innerText = `Player ${winner} wins!`; // Display the winner
};

// Reset the game
const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = ""; // Clear all box contents
    });
    turnO = true; // Reset the turn to player O
    msgcontn.style.display = "none"; // Hide the winner message
    msg.innerText = ""; // Clear the winner text
    gameOver = false; // Reset the game status
};

// Add click listener to the reset button
resetBtn.addEventListener("click", resetGame);
