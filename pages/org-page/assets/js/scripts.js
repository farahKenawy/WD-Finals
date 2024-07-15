document.addEventListener('DOMContentLoaded', function () {
    const logos = document.querySelectorAll('.org-logo');

    logos.forEach(logo => {
        logo.addEventListener('mouseover', () => {
            const orgId = logo.getAttribute('data-org');
            const card = document.getElementById(orgId);
            const logoRect = logo.getBoundingClientRect();
            const cardRect = card.getBoundingClientRect();

            card.style.top = `${logoRect.bottom + 10}px`;
            card.style.left = `${logoRect.left + (logoRect.width - cardRect.width) / 2}px`;
            card.classList.add('show');
        });

        logo.addEventListener('mouseout', () => {
            const orgId = logo.getAttribute('data-org');
            const card = document.getElementById(orgId);

            card.classList.remove('show');
        });
    });
});
