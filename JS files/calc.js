let firstNumber = "";
let secondNumber = "";
let signOperation = "";
let finish = false;

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const operations = ["-", "+", "X", "/"];

const clearAll = () => {
  firstNumber = "";
  secondNumber = "";
  signOperation = "";
  finish = false;
  renderResult(0);
};

const output = document.querySelector(".calc-screen p");

document.querySelector(".ac").onclick = clearAll;

document.querySelector(".buttons").onclick = (event) => {
  if (!event.target.classList.contains("btn")) return;
  if (event.target.classList.contains("ac")) return;

  const pressedButton = event.target.textContent;

  if (digit.includes(pressedButton)) {
    if (secondNumber === "" && signOperation === "") {
      firstNumber += pressedButton;
      renderResult(firstNumber);
    } else if (firstNumber !== "" && secondNumber !== "" && finish) {
      secondNumber = pressedButton;
      finish = false;
      renderResult(secondNumber);
    } else {
      secondNumber += pressedButton;
      renderResult(secondNumber);
    }
    return;
  }

  if (operations.includes(pressedButton)) {
    signOperation = pressedButton;
    renderResult(signOperation);
    return;
  }

  if (pressedButton === "=") {
    if (secondNumber === "") secondNumber = firstNumber;
    switch (signOperation) {
      case "+":
        firstNumber = sum(firstNumber, secondNumber);
        break;
      case "-":
        firstNumber = subtract(firstNumber, secondNumber);
        break;
      case "X":
        firstNumber = multiply(firstNumber, secondNumber);
        break;
      case "/":
        if (secondNumber === "0") {
          output.textContent = "Mistake";
          firstNumber = "";
          secondNumber = "";
          signOperation = "";
          return;
        }
        division(firstNumber, secondNumber);
        break;
    }
    finish = true;
    renderResult(firstNumber);
  }
};

const renderResult = (text) => {
  output.textContent = text;
};
