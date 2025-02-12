// Popup BMI Calculator
const bmiButton = document.getElementById('bmi-button');
const popupOverlay = document.querySelector('.popup-overlay');
const popupClose = document.getElementById('close-popup');
const bmiForm = document.getElementById('bmi-form');
const resultElement = document.getElementById('bmi-result');

// Open Popup
bmiButton.addEventListener('click', () => {
  popupOverlay.style.display = 'block';
});

// Close Popup
popupClose.addEventListener('click', () => {
  popupOverlay.style.display = 'none';
});

// BMI Calculator Logic
bmiForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    resultElement.textContent = "Please enter valid positive numbers for weight and height.";
    resultElement.style.color = "red";
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters ** 2)).toFixed(2);
  let category = "";

  if (bmi < 18.5) {
    category = "Underweight";
    resultElement.style.color = "orange";
  } else if (bmi >= 18.5 && bmi < 24.9) {
    category = "Normal weight";
    resultElement.style.color = "green";
  } else if (bmi >= 25 && bmi < 29.9) {
    category = "Overweight";
    resultElement.style.color = "orange";
  } else {
    category = "Obesity";
    resultElement.style.color = "red";
  }

  resultElement.textContent = `Your BMI is ${bmi} (${category}).`;
});
