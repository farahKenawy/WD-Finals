document.addEventListener('DOMContentLoaded', function () {
    // Animate progress bars
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const percentage = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
            bar.style.width = percentage;
        }, 500);
    });

    // Toggle display of information card
    const infoToggle = document.querySelector('.info-container h2');
    const infoCard = document.querySelector('.info-card');
    infoToggle.addEventListener('click', () => {
        infoCard.classList.toggle('show');
    });
});
