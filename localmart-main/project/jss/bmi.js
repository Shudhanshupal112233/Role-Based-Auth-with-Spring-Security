// Select elements
const bmiButton = document.getElementById('bmi-button');
const popupOverlay = document.getElementById('popup-overlay');
const closePopupButton = document.getElementById('close-popup');
const bmiForm = document.getElementById('bmi-form');
const bmiResult = document.getElementById('bmi-result');

// Show popup on button click
bmiButton.addEventListener('click', () => {
    popupOverlay.classList.add('show');
});

// Close popup on button click
closePopupButton.addEventListener('click', () => {
    popupOverlay.classList.remove('show');
});

// Close popup when clicking outside the popup box
popupOverlay.addEventListener('click', (event) => {
    if (event.target === popupOverlay) {
        popupOverlay.classList.remove('show');
    }
});

// Calculate BMI
bmiForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (weight > 0 && height > 0) {
        const heightInMeters = height / 100; // Convert cm to meters
        const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

        let category = '';
        if (bmi < 18.5) category = 'Underweight';
        else if (bmi < 24.9) category = 'Normal weight';
        else if (bmi < 29.9) category = 'Overweight';
        else category = 'Obesity';

        bmiResult.textContent = `Your BMI is ${bmi} (${category}).`;
        bmiResult.style.color = bmi < 18.5 || bmi > 24.9 ? '#ff5722' : '#4caf50';
    } else {
        bmiResult.textContent = 'Please enter valid numbers!';
        bmiResult.style.color = '#ff5722';
    }
});
