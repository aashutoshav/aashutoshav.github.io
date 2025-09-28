// Research page specific functionality
document.addEventListener('DOMContentLoaded', function () {
    // Initialize dropdowns
    initializeDropdowns();

    // Add click handlers for action buttons
    initializeActionButtons();
});

function initializeDropdowns() {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.dropdown-btn');
        const content = dropdown.querySelector('.dropdown-content');

        button.addEventListener('click', function (e) {
            e.stopPropagation();
            // Close other dropdowns
            document.querySelectorAll('.dropdown-content').forEach(otherContent => {
                if (otherContent !== content) {
                    otherContent.style.display = 'none';
                }
            });
            // Toggle current dropdown
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Close dropdowns when clicking outside
    document.addEventListener('click', function () {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            content.style.display = 'none';
        });
    });
}

function initializeActionButtons() {
    const actionButtons = document.querySelectorAll('.action-btn:not(.dropdown-btn)');

    actionButtons.forEach(button => {
        button.addEventListener('click', function () {
            const buttonText = this.textContent.trim();
            console.log(`${buttonText} button clicked`);
            // Add your functionality here - e.g., open PDF, redirect to paper, etc.
        });
    });
}