let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let msg_container = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");
let turnX = true;
let count = 0;

let winner = [
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
    if (turnX) {
      box.innerText = "X";
      turnX = false;
    } else {
      box.innerText = "O";
      turnX = true;
    }
    box.disabled = true;
    count++;
    checkwinner();
  });
});

let isDraw = () => {
  msg.innerText = `It's a Draw`;
  msg_container.classList.remove("hide");
  disableBoxes();
};

let disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};
let showWinner = (theWinner) => {
  msg.innerText = `${theWinner} Won`;
  msg_container.classList.remove("hide");
  disableBoxes();
};
let checkwinner = () => {
  for (let pattern of winner) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showWinner(pos1val);
        let isWinner = checkwinner();
      } else if (count === 9) {
        isDraw();
      }
    }
  }
};

let resetgame = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
  msg_container.classList.add("hide");
  turnX = true;
};
reset.addEventListener("click", resetgame);
