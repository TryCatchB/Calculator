let firstNumber = "";
let secondNumber = "";
let signOperation = "";
let finish = false;
const output = document.querySelector(".calc-screen p");

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operations = ["-", "+", "X", "/"];

document.querySelector(".ac").onclick = clearAll;
document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("ac")) return;

  const pressedButton = event.target.textContent;

  appropriateValueForFirstNumberAndSecondNumber(pressedButton);

  appropriateSignOperation(pressedButton);

  performingOperations(pressedButton);
};
