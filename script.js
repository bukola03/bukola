const numberDisplay = document.getElementById("numberDisplay");
const addButton = document.getElementById("addButton");
const plusTwoButton = document.getElementById("plusTwoButton");
const plusFourButton = document.getElementById("plusFourButton");
const saveButton = document.getElementById("saveButton");
const savedNumbers = document.getElementById("savedNumbers");

const secondNumberDisplay = document.getElementById("secondNumberDisplay");
const secondAddButton = document.getElementById("secondAddButton");
const secondPlusTwoButton = document.getElementById("secondPlusTwoButton");
const secondPlusFourButton = document.getElementById("secondPlusFourButton");
secondSaveButton = document.getElementById("secondSaveButton");
const secondSavedNumbers = document.getElementById("secondSavedNumbers");

let currentNumber = 0;

addButton.addEventListener("click", () => {
  currentNumber += 1;
  numberDisplay.textContent = currentNumber;
});

plusTwoButton.addEventListener("click", () => {
  currentNumber += 2;
  numberDisplay.textContent = currentNumber;
});

plusFourButton.addEventListener("click", () => {
  currentNumber += 4;
  numberDisplay.textContent = currentNumber;
});

saveButton.addEventListener("click", () => {
  if (currentNumber !== 0) {
    if (savedNumbers.textContent === "") {
      savedNumbers.textContent = currentNumber;
    } else {
      savedNumbers.textContent += ` - ${currentNumber}`;
    }
    currentNumber = 0;
    numberDisplay.textContent = currentNumber;
  }
});

let secondCurrentNumber = 0;

secondAddButton.addEventListener("click", () => {
  secondCurrentNumber += 1;
  secondNumberDisplay.textContent = secondCurrentNumber;
});

secondPlusTwoButton.addEventListener("click", () => {
  secondCurrentNumber += 2;
  secondNumberDisplay.textContent = secondCurrentNumber;
});

secondPlusFourButton.addEventListener("click", () => {
  secondCurrentNumber += 4;
  secondNumberDisplay.textContent = secondCurrentNumber;
});

secondSaveButton.addEventListener("click", () => {
  if (secondCurrentNumber !== 0) {
    if (secondSavedNumbers.textContent === "") {
      secondSavedNumbers.textContent = secondCurrentNumber;
    } else {
      secondSavedNumbers.textContent += ` - ${secondCurrentNumber}`;
    }
    secondCurrentNumber = 0;
    secondNumberDisplay.textContent = secondCurrentNumber;
  }
});
