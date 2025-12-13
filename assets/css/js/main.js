// Day/Night Mode Toggle
const toggleBtn = document.querySelector('.toggle-btn');
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('day-mode');
    document.body.classList.toggle('night-mode');
});

// Update Footer Year
const yearSpan = document.getElementById('year');
yearSpan.textContent = new Date().getFullYear();