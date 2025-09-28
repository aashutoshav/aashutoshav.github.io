// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';

    // Apply the saved theme
    if (currentTheme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeIcon.className = 'fas fa-sun';
    } else {
        body.setAttribute('data-theme', 'light');
        themeIcon.className = 'fas fa-moon';
    }

    // Theme toggle event listener
    themeToggle.addEventListener('click', function () {
        const currentTheme = body.getAttribute('data-theme');

        if (currentTheme === 'dark') {
            // Switch to light mode
            body.setAttribute('data-theme', 'light');
            themeIcon.className = 'fas fa-moon';
            localStorage.setItem('theme', 'light');
        } else {
            // Switch to dark mode
            body.setAttribute('data-theme', 'dark');
            themeIcon.className = 'fas fa-sun';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});