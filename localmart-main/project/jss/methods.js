document.addEventListener("DOMContentLoaded", () => {
    // Exercise data for all training methods
    const exercises = {
        strength: {
            bro: [
                "Deadlifts",
                "Squats",
                "Overhead Press",
                "Bench Press",
                "Pull-Ups",
            ],
            ppl: [
                "Barbell Row",
                "Squats",
                "Deadlifts",
                "Chest Press",
                "Leg Press",
            ],
        },
        muscle: {
            bro: [
                "Bicep Curls",
                "Tricep Dips",
                "Incline Dumbbell Press",
                "Lateral Raises",
                "Hamstring Curls",
            ],
            ppl: [
                "Chest Fly",
                "Tricep Kickbacks",
                "Leg Extensions",
                "Shoulder Press",
                "Cable Crossovers",
            ],
        },
        cardio: {
            bro: [
                "Treadmill Running",
                "Cycling",
                "Rowing Machine",
                "Jump Rope",
                "Stair Climber",
            ],
            ppl: [
                "Sprints",
                "Long Distance Running",
                "Cycling Intervals",
                "Swimming",
                "Jump Rope Intervals",
            ],
        },
        hiit: {
            bro: [
                "Burpees",
                "Mountain Climbers",
                "Jump Squats",
                "High Knees",
                "Kettlebell Swings",
            ],
            ppl: [
                "Jump Lunges",
                "Skater Jumps",
                "Burpees",
                "Box Jumps",
                "Sprinting",
            ],
        },
        flexibility: {
            bro: [
                "Downward Dog Stretch",
                "Seated Forward Bend",
                "Child's Pose",
                "Hip Flexor Stretch",
                "Cat-Cow Pose",
            ],
            ppl: [
                "Lunge Stretch",
                "Standing Quad Stretch",
                "Hamstring Stretch",
                "Shoulder Stretch",
                "Spinal Twist",
            ],
        },
    };

    const modal = document.getElementById("exercise-modal");
    const modalTitle = document.getElementById("modal-title");
    const exerciseList = document.getElementById("exercise-list");
    const closeModal = document.getElementById("close-modal");

    // Open modal and display exercises based on training method and split
    document.querySelectorAll(".method").forEach((methodDiv) => {
        methodDiv.addEventListener("click", () => {
            const method = methodDiv.dataset.method;
            modalTitle.textContent = methodDiv.querySelector("h3").textContent;
            exerciseList.innerHTML = ""; // Clear previous exercises
            exerciseList.innerHTML = "<li>Select a workout split.</li>"; // Default message
            modal.style.display = "flex";

            // Show Bro Split and Push-Pull-Legs buttons
            const splitContainer = document.getElementById("split-container");
            splitContainer.style.display = "block";
            splitContainer.setAttribute("data-method", method); // Store the current method in the container
        });
    });

    // Load exercises for selected workout split
    document.querySelectorAll(".split-button").forEach((button) => {
        button.addEventListener("click", () => {
            const method = document.getElementById("split-container").getAttribute("data-method");
            const split = button.dataset.split;

            // Display exercises based on selected split
            const selectedExercises = exercises[method][split];
            exerciseList.innerHTML = selectedExercises
                .map((exercise) => `<li>${exercise}</li>`)
                .join("");
        });
    });

    // Close modal
    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // Close modal on outside click
    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
