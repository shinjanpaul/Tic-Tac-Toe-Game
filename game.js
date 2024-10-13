let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let msgcontn = document.querySelector(".msg-container");
let msg = document.querySelector(".win");
let turnO = true; 

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

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            if (turnO) {
                box.innerText = "O";
                turnO = false; 
            } else {
                box.innerText = "X";
                turnO = true; 
            }
            checkWinner();
        }
    });
});


const checkWinner = () => {
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (
            boxes[a].innerText !== "" && 
            boxes[a].innerText === boxes[b].innerText &&
            boxes[a].innerText === boxes[c].innerText
        ) {
            console.log(`Player ${boxes[a].innerText} wins!`);
            showWinner(boxes[a].innerText);
            return;
        }
    }
};

const showWinner = (winner) => {
    msgcontn.style.display = "block"; 
    msg.innerText = `Player ${winner} wins!`;
};

const resetGame = () => {
    boxes.forEach((box) => {
        box.innerText = ""; 
    });
    turnO = true;
    msgcontn.style.display = "none";
    msg.innerText = ""; 
    gameOver = false; 
};

resetBtn.addEventListener("click", resetGame);
