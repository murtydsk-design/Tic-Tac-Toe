let boxes = document.querySelectorAll('.box');
let resetButton = document.querySelector('.reset-button');
let msgContainer = document.querySelector('.msg-container');
let msg = document.getElementById('msg');

let turnO = true;
let count = 0; // 1. Counter initialized

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

const disableboxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableboxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `${winner} wins!`;
  msgContainer.classList.remove("hide");
  disableboxes();
};

const gameDraw = () => {
  msg.innerText = "It's a Draw!";
  msgContainer.classList.remove("hide");
  disableboxes();
};

function checkWin() {
  for (let [a, b, c] of winPatterns) {
    let p1 = boxes[a].innerText;
    let p2 = boxes[b].innerText;
    let p3 = boxes[c].innerText;

    if (p1 && p1 === p2 && p2 === p3) {
      showWinner(p1);
      return true; // Returns true when a win occurs
    }
  }
  return false; // Returns false if no win yet
}

boxes.forEach((box) => {
  box.addEventListener('click', () => {
    if (turnO) {
      box.innerText = 'O';
      turnO = false;
    } else {
      box.innerText = 'X';
      turnO = true;
    }
    box.disabled = true;

    count++; // 2. Increment click count

    let isWinner = checkWin();

    // 3. Draw condition: all 9 boxes filled and no winner
    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const resetGame = () => {
  turnO = true;
  count = 0; // 4. Reset count to 0
  enableboxes();
  msgContainer.classList.add("hide");
};

resetButton.addEventListener('click', resetGame);