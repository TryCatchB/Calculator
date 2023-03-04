const renderResult = (text) => {
  output.textContent = text;
};

const verifyPressedButtonToOperationsIfTrueRenderSignOperation = (
  pressedButton
) => {
  if (operations.includes(pressedButton)) {
    signOperation = pressedButton;
    renderResult(signOperation);
  }
};

const appropriateFirstNumberAndSecondNumberValue = (pressedButton) => {
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
};

const performingOperations = (pressedButton) => {
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
