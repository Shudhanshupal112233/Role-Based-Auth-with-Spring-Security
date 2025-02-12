// nutrition.js

const tips = [
    "Stay hydrated by drinking at least 8 glasses of water daily.",
    "Incorporate more whole foods like fruits, vegetables, and lean proteins.",
    "Avoid processed foods and sugary drinks to maintain energy levels.",
    "Eat smaller, balanced meals throughout the day to boost metabolism.",
    "Include healthy fats like avocados, nuts, and olive oil in your diet."
];

const mealPlans = {
    vegetarian: {
        weightLoss: [
            "Breakfast: Oats with almond milk, chia seeds, and berries",
            "Lunch: Grilled tofu with quinoa and veggies",
            "Dinner: Vegetable stir-fry with brown rice"
        ],
        muscleGain: [
            "Breakfast: Cottage cheese with banana and almonds",
            "Lunch: Lentil curry with brown rice",
            "Dinner: Vegan protein smoothie with spinach, pea protein, and almond milk"
        ],
        wellness: [
            "Breakfast: Smoothie with spinach, banana, and chia seeds",
            "Lunch: Chickpea salad with olive oil and lemon dressing",
            "Dinner: Veggie burger with whole wheat bun and avocado"
        ],
        detox: [
            "Breakfast: Green smoothie with kale, cucumber, and ginger",
            "Lunch: Avocado toast with tomato and spinach",
            "Dinner: Zucchini noodles with tomato basil sauce"
        ]
    },
    nonVegetarian: {
        weightLoss: [
            "Breakfast: Scrambled eggs with avocado and whole wheat toast",
            "Lunch: Grilled chicken breast with steamed vegetables",
            "Dinner: Salmon with sweet potatoes and green beans"
        ],
        muscleGain: [
            "Breakfast: Omelet with spinach and mushrooms",
            "Lunch: Grilled turkey with quinoa and steamed broccoli",
            "Dinner: Grilled chicken with sweet potato and kale"
        ],
        wellness: [
            "Breakfast: Greek yogurt with honey, oats, and walnuts",
            "Lunch: Grilled chicken salad with mixed greens",
            "Dinner: Baked trout with quinoa and roasted veggies"
        ],
        detox: [
            "Breakfast: Egg white scramble with spinach",
            "Lunch: Grilled shrimp with avocado and quinoa",
            "Dinner: Baked salmon with steamed asparagus"
        ]
    }
};

// Show random nutrition tip
document.getElementById('getTip').addEventListener('click', () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById('nutritionTip').textContent = randomTip;
});

// Show popup with meal plan details
const showPopup = (planType, dietType) => {
    const planDetails = mealPlans[dietType][planType];
    const popupTitle = document.getElementById('popupTitle');
    const popupDetails = document.getElementById('popupDetails');

    popupTitle.textContent = `${planType.charAt(0).toUpperCase() + planType.slice(1)} Diet`;

    // Clear previous meal plan and add new one
    popupDetails.innerHTML = '';
    planDetails.forEach(meal => {
        const li = document.createElement('li');
        li.textContent = meal;
        popupDetails.appendChild(li);
    });

    document.getElementById('popupModal').style.display = "block";
};

// Close the popup
document.getElementById('closePopup').addEventListener('click', () => {
    document.getElementById('popupModal').style.display = "none";
});

// Update meal plans based on diet selection
const updateDietPlans = () => {
    const dietType = document.getElementById('dietType').value;
    const mealPlansGrid = document.getElementById('mealPlansGrid');
    mealPlansGrid.innerHTML = '';

    // Inject meal plans based on selected diet type
    Object.keys(mealPlans[dietType]).forEach(planType => {
        const planDiv = document.createElement('div');
        planDiv.classList.add('plan');
        planDiv.innerHTML = `
            <h3>${planType.charAt(0).toUpperCase() + planType.slice(1)}</h3>
            <p>Recommended meals for ${planType} diet</p>
        `;
        planDiv.addEventListener('click', () => showPopup(planType, dietType));
        mealPlansGrid.appendChild(planDiv);
    });
};

// Initialize page with vegetarian plans
updateDietPlans();
