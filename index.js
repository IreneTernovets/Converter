/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const INPUT_EL = document.getElementById("input-value");
const CONVERT_BTN = document.getElementById("convert-btn");
const LENGTH_EL = document.getElementById("length-box");
const VOLUME_EL = document.getElementById("volume-box");
const MASS_EL = document.getElementById("mass-box");

let inputValue;

CONVERT_BTN.addEventListener("click", function () {
  inputValue = INPUT_EL.value.trim();

  if (inputValue === "") {
    alert("Please enter a number.");
    INPUT_EL.value = "";
  } else if (isNaN(inputValue)) {
    alert("Invalid input. Please enter a valid number.");
    INPUT_EL.value = "";
  } else if (parseFloat(inputValue) <= 0) {
    alert("Invalid input. Please enter a positive number.");
    INPUT_EL.value = "";
  } else {
    LENGTH_EL.textContent = `${inputValue} meters = ${(
      inputValue * 3.281
    ).toFixed(3)} feet  |  ${inputValue} feet = ${(inputValue / 3.281).toFixed(
      3
    )} meters`;

    VOLUME_EL.textContent = `${inputValue} liters = ${(
      inputValue * 0.264
    ).toFixed(3)} gallons  |  ${inputValue} gallons = ${(
      inputValue / 0.264
    ).toFixed(3)} liters`;

    MASS_EL.textContent = `${inputValue} kilos = ${(inputValue * 2.204).toFixed(
      3
    )} pounds  |  ${inputValue} pounds = ${(inputValue / 2.204).toFixed(
      3
    )} kilos`;

    INPUT_EL.value = "";
  }
});
