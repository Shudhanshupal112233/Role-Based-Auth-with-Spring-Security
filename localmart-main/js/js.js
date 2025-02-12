document.addEventListener("DOMContentLoaded", () => {
    const methods = {
        strength: ["Deadlifts", "Bench Press", "Squats", "Overhead Press", "Pull-Ups"],
        muscle: ["Bicep Curls", "Tricep Dips", "Leg Press", "Chest Fly", "Lat Pulldown"],
        cardio: ["Running", "Cycling", "Jump Rope", "Rowing", "Stair Climbing"],
        flexibility: ["Yoga Poses", "Hamstring Stretch", "Shoulder Rolls", "Cat-Cow Pose", "Lunges"],
        hiit: ["Burpees", "Mountain Climbers", "Jump Squats", "High Knees", "Push-Up Plank Jumps"],
    };

    const modal = document.getElementById("exercise-modal");
    const modalTitle = document.getElementById("modal-title");
    const exerciseList = document.getElementById("exercise-list");
    const closeModal = document.getElementById("close-modal");

    document.querySelectorAll(".method").forEach((methodDiv) => {
        methodDiv.addEventListener("click", () => {
            const method = methodDiv.dataset.method;
            modalTitle.textContent = methodDiv.querySelector("h3").textContent;
            exerciseList.innerHTML = methods[method]
                .map((exercise) => `<li>${exercise}</li>`)
                .join("");
            modal.style.display = "flex";
        });
    });

    closeModal.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
