const trainerData = {
    alex: {
        name: "JJ",
        details: "Alex specializes in strength training and weightlifting. With over 10 years of experience, he helps clients achieve their strength goals safely and effectively."
    },
    jessica: {
        name: "Kirti",
        details: "Jessica is a yoga and flexibility expert. She combines traditional yoga techniques with modern practices to enhance overall flexibility and relaxation."
    },
    mark: {
        name: "Aditya",
        details: "Mark is an experienced HIIT and cardio coach. His high-energy sessions are designed for maximum calorie burn and cardiovascular health."
    }
};


const modal = document.getElementById('trainer-modal');
const modalTitle = document.getElementById('trainer-name');
const modalDetails = document.getElementById('trainer-details');
const closeModalBtn = document.getElementById('close-modal');


document.querySelectorAll('.more-info-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const trainerKey = e.target.closest('.trainer-card').dataset.trainer;
        const trainer = trainerData[trainerKey];
        modalTitle.textContent = trainer.name;
        modalDetails.textContent = trainer.details;
        modal.style.display = 'flex';
    });
});


closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
