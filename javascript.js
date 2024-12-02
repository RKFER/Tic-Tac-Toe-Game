let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGme = document.querySelector("#newGame");
let msg = document.querySelector(".message");
let win = document.querySelector("#msg");

let turnO = true;
let turnX = false;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO === true) {
            box.innerText = "O";
            turnO = false;
            turnX = true;
        }
        else if (turnX === true) {
            box.innerText = "X";
            turnX = false;
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    win.innerText = `Winner Is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};
const resetGame = () => {
    turnO = true;
    enableBoxes();
    msg.classList.add("hide");
}

const newGame = () => {
    turnO = true;
    enableBoxes();
    msg.classList.add("hide");
}
newGme.addEventListener("click", newGame);
resetBtn.addEventListener("click", resetGame);
