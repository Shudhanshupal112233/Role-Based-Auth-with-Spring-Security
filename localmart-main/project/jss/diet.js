document.addEventListener('DOMContentLoaded', function () {
    // Handle training program selection
    const programButtons = document.querySelectorAll('.training-programs button');
    const dietSelect = document.getElementById('diet-select');
    const dietContent = document.getElementById('diet-content');
    const dietTitle = document.getElementById('diet-title');

    programButtons.forEach(button => {
        button.addEventListener('click', function () {
            const program = this.dataset.program;
            const dietPreference = dietSelect.value;
            updateDietContent(program, dietPreference);
        });
    });

    // Handle diet preference change
    dietSelect.addEventListener('change', function () {
        const dietPreference = this.value;
        const selectedProgram = document.querySelector('.training-programs button.active');
        const program = selectedProgram ? selectedProgram.dataset.program : 'fatLoss';
        updateDietContent(program, dietPreference);
    });

    function updateDietContent(program, dietPreference) {
        let content = '';
        let heading = '';

        // Define meal plans for each program and diet preference
        switch (program) {
            case 'fat-loss':
                heading = 'Fat Loss Diet Plan';
                content = getDietContent(dietPreference, [
                    { meal: 'Breakfast', foods: getIndianFood('breakfast', dietPreference) },
                    { meal: 'Lunch', foods: getIndianFood('lunch', dietPreference) },
                    { meal: 'Pre-Workout', foods: getIndianFood('preworkout', dietPreference) },
                    { meal: 'Post-Workout', foods: getIndianFood('postworkout', dietPreference) },
                    { meal: 'Dinner', foods: getIndianFood('dinner', dietPreference) }
                ]);
                break;
            case 'intermittent-fasting':
                heading = 'Intermittent Fasting Diet Plan';
                content = getDietContent(dietPreference, [
                    { meal: 'First Meal (12 PM)', foods: getIndianFood('lunch', dietPreference) },
                    { meal: 'Snack (3 PM)', foods: getIndianFood('preworkout', dietPreference) },
                    { meal: 'Dinner (7 PM)', foods: getIndianFood('dinner', dietPreference) }
                ]);
                break;
            case 'caloric-surplus':
                heading = 'Caloric Surplus Diet Plan';
                content = getDietContent(dietPreference, [
                    { meal: 'Breakfast', foods: getIndianFood('breakfast', dietPreference) },
                    { meal: 'Snack', foods: getIndianFood('preworkout', dietPreference) },
                    { meal: 'Lunch', foods: getIndianFood('lunch', dietPreference) },
                    { meal: 'Post-Workout', foods: getIndianFood('postworkout', dietPreference) },
                    { meal: 'Dinner', foods: getIndianFood('dinner', dietPreference) },
                    { meal: 'Late Snack', foods: getIndianFood('postworkout', dietPreference) }
                ]);
                break;
            case 'caloric-deficit':
                heading = 'Caloric Deficit Diet Plan';
                content = getDietContent(dietPreference, [
                    { meal: 'Breakfast', foods: getIndianFood('breakfast', dietPreference) },
                    { meal: 'Lunch', foods: getIndianFood('lunch', dietPreference) },
                    { meal: 'Pre-Workout', foods: getIndianFood('preworkout', dietPreference) },
                    { meal: 'Dinner', foods: getIndianFood('dinner', dietPreference) }
                ]);
                break;
            case 'cutting':
                heading = 'Cutting Diet Plan';
                content = getDietContent(dietPreference, [
                    { meal: 'Breakfast', foods: getIndianFood('breakfast', dietPreference) },
                    { meal: 'Lunch', foods: getIndianFood('lunch', dietPreference) },
                    { meal: 'Pre-Workout', foods: getIndianFood('preworkout', dietPreference) },
                    { meal: 'Post-Workout', foods: getIndianFood('postworkout', dietPreference) },
                    { meal: 'Dinner', foods: getIndianFood('dinner', dietPreference) }
                ]);
                break;
            case 'gaining':
                heading = 'Gaining Diet Plan';
                content = getDietContent(dietPreference, [
                    { meal: 'Breakfast', foods: getIndianFood('breakfast', dietPreference) },
                    { meal: 'Snack', foods: getIndianFood('preworkout', dietPreference) },
                    { meal: 'Lunch', foods: getIndianFood('lunch', dietPreference) },
                    { meal: 'Post-Workout', foods: getIndianFood('postworkout', dietPreference) },
                    { meal: 'Dinner', foods: getIndianFood('dinner', dietPreference) },
                    { meal: 'Late Snack', foods: getIndianFood('postworkout', dietPreference) }
                ]);
                break;
            default:
                heading = 'Default Diet Plan';
                content = 'Please select a valid program to view the diet plan.';
        }

        dietTitle.textContent = heading;
        dietContent.innerHTML = content;
    }

    // Function to generate content for each meal
    function getDietContent(dietPreference, meals) {
        let content = `<h3>Diet Preference: ${dietPreference.charAt(0).toUpperCase() + dietPreference.slice(1)}</h3>`;
        content += '<ul>';
        meals.forEach(meal => {
            content += `<li><strong>${meal.meal}:</strong><ul>`;
            meal.foods.forEach(food => {
                content += `<li>${food.name} - ${food.nutrition}</li>`;
            });
            content += `</ul></li>`;
        });
        content += '</ul>';
        return content;
    }

    // Function to get Indian foods based on meal type and diet preference
    function getIndianFood(mealType, dietPreference) {
        const foods = {
            breakfast: [
                { name: 'Idli with Sambar', nutrition: 'Calories: 200, Protein: 6g, Carbs: 36g, Fats: 2g' },
                { name: 'Sprouts Salad', nutrition: 'Calories: 180, Protein: 10g, Carbs: 30g, Fats: 1g' },
                { name: 'Oats Porridge', nutrition: 'Calories: 150, Protein: 6g, Carbs: 25g, Fats: 3g' }
            ],
            lunch: [
                { name: 'Dal and Brown Rice', nutrition: 'Calories: 350, Protein: 15g, Carbs: 55g, Fats: 5g' },
                { name: 'Grilled Chicken Salad', nutrition: 'Calories: 220, Protein: 25g, Carbs: 10g, Fats: 8g' },
                { name: 'Mixed Veg Sabzi with Chapati', nutrition: 'Calories: 300, Protein: 10g, Carbs: 45g, Fats: 5g' }
            ],
            preworkout: [
                { name: 'Banana', nutrition: 'Calories: 90, Protein: 1g, Carbs: 23g, Fats: 0g' },
                { name: 'Almond Butter Toast', nutrition: 'Calories: 200, Protein: 6g, Carbs: 18g, Fats: 12g' }
            ],
            postworkout: [
                { name: 'Protein Shake', nutrition: 'Calories: 150, Protein: 25g, Carbs: 2g, Fats: 3g' },
                { name: 'Boiled Eggs', nutrition: 'Calories: 150, Protein: 13g, Carbs: 1g, Fats: 10g' }
            ],
            dinner: [
                { name: 'Grilled Paneer and Vegetables', nutrition: 'Calories: 300, Protein: 18g, Carbs: 10g, Fats: 15g' },
                { name: 'Vegetable Soup', nutrition: 'Calories: 120, Protein: 5g, Carbs: 15g, Fats: 2g' }
            ]
        };

        // Filter food based on diet preference
        if (dietPreference === 'non-vegetarian') {
            return foods[mealType].filter(item => !item.name.includes('Paneer'));
        } else if (dietPreference === 'vegan') {
            return foods[mealType].filter(item => !item.name.includes('Eggs') && !item.name.includes('Paneer'));
        }
        return foods[mealType];
    }
});
