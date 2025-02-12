// Track Progress
const logForm = document.getElementById('log-form');
const muscleForm = document.getElementById('muscle-form');
const muscleGrowthList = document.getElementById('muscle-growth-list');

// Activity Chart (Chart.js)
const ctx = document.getElementById('progressChart').getContext('2d');
let activityData = [];
let activityLabels = [];

const progressChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: activityLabels,
        datasets: [
            {
                label: 'Duration (minutes)',
                data: activityData,
                backgroundColor: 'rgba(76, 175, 80, 0.2)',
                borderColor: '#4CAF50',
                borderWidth: 1,
                tension: 0.3,
            },
        ],
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    },
});

// Log Activity
logForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const date = document.getElementById('log-date').value;
    const activity = document.getElementById('activity').value;
    const duration = parseFloat(document.getElementById('duration').value);

    if (date && activity && duration > 0) {
        activityLabels.push(`${activity} (${date})`);
        activityData.push(duration);
        progressChart.update();

        logForm.reset();
        alert('Activity logged successfully!');
    } else {
        alert('Please fill in all fields with valid data.');
    }
});

// Track Muscle Growth
muscleForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const muscleGroup = document.getElementById('muscle-group').value;
    const muscleGrowth = parseFloat(document.getElementById('muscle-growth').value);

    if (muscleGroup && muscleGrowth > 0) {
        const listItem = document.createElement('div');
        listItem.textContent = `💪 ${muscleGroup}: +${muscleGrowth} cm`;
        muscleGrowthList.appendChild(listItem);

        muscleForm.reset();
        alert('Muscle growth tracked successfully!');
    } else {
        alert('Please enter valid data.');
    }
});
