function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters
  
    if (weight > 0 && height > 0) {
      const bmi = (weight / (height * height)).toFixed(2);
      let category = "";
  
      if (bmi < 18.5) {
        category = "Underweight";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        category = "Normal weight";
      } else if (bmi >= 25 && bmi <= 29.9) {
        category = "Overweight";
      } else {
        category = "Obese";
      }
  
      document.getElementById('bmiResult').innerHTML = `Your BMI: ${bmi} (${category})`;
    } else {
      document.getElementById('bmiResult').innerHTML = "Please enter valid weight and height.";
    }
  }
  