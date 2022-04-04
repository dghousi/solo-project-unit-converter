let defaultNumber = 20

document.getElementById('calcNumber').textContent = defaultNumber

const input = document.querySelector('input')

input.addEventListener('input', convert)

function convert() {
  let newValue = input.value
  defaultNumber = newValue != 0 ? newValue : defaultNumber

  document.getElementById('calcNumber').textContent = defaultNumber

  let calcFeet = (document.getElementById(
    'calcFeetEl',
  ).textContent = `${defaultNumber} meters = ${(
    defaultNumber * 3.28084
  ).toFixed(3)} feet`)
  let calcMeter = (document.getElementById(
    'calcMeterEl',
  ).textContent = `${defaultNumber} feet = ${(defaultNumber * 0.3048).toFixed(
    3,
  )} meters`)
  let calcLiter = (document.getElementById(
    'calcLitersEl',
  ).textContent = `${defaultNumber} liters = ${(
    defaultNumber * 0.2641722
  ).toFixed(3)} gallons`)
  let calcGallon = (document.getElementById(
    'calcGallonsEl',
  ).textContent = `${defaultNumber} gallons = ${(
    defaultNumber * 3.785411784
  ).toFixed(3)} liters`)
  let calcKilos = (document.getElementById(
    'calcKilosEl',
  ).textContent = `${defaultNumber} kilos = ${(defaultNumber * 2.20462).toFixed(
    3,
  )} pounds`)
  let calcPounds = (document.getElementById(
    'calcPoundsEl',
  ).textContent = `${defaultNumber} pounds = ${(
    defaultNumber * 0.453592
  ).toFixed(3)} kilos`)
}

convert()
