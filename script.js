let input = 20;

let convNumber = document.getElementById("conv-number");
convNumber.value = input;

convNumber.addEventListener("keydown", function (e) {
  console.log("enter was pressed");
  input = convNumber.value;
  if (e.key === "Enter") {
    calcLength();
    calcVolume();
    calcMass();
  }
});

let lengthEl = document.getElementById("length-conv");
let volumeEl = document.getElementById("volume-conv");
let massEl = document.getElementById("mass-conv");

console.log(lengthEl);

const kiloToPound = 2.20462262;
const poundToKilo = 0.45359237;

const litersToGallons = 0.264172052;
const gallonsToLitres = 3.78541178;

const meterToFeet = 3.2808399;
const feetToMeter = 0.3048;

// using template literals to directly format the strings
function calcLength() {
  lengthEl.textContent = `${input} meters = ${
    input * meterToFeet
  } feet | ${input} feet = ${feetToMeter} meters`;
}

function calcVolume() {
  volumeEl.textContent = `${input} liters = ${
    input * litersToGallons
  } gallons | ${input} gallons = ${input * gallonsToLitres} liters`;
}

function calcMass() {
  massEl.textContent = `${input} kilos = ${
    input * kiloToPound
  } pounds | ${input} pounds = ${input * poundToKilo} kilos`;
}

// Calling all the calculator functions to initialize the values according to input
calcLength();
calcVolume();
calcMass();
