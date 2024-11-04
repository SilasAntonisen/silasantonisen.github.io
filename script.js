document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const moonIcon = darkModeToggle.querySelector('i');
    const toggleSummaryBtn = document.getElementById('toggleSummary');
    const paperSummary = document.getElementById('paperSummary');
    const toggleSummaryIcon = toggleSummaryBtn.querySelector('i');
    const toggleSummaryText = toggleSummaryBtn.querySelector('span');

    // Initialize dark mode
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    body.classList.toggle('dark-mode', isDarkMode);
    updateDarkModeIcon(isDarkMode);

    // Dark mode toggle
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', isDarkMode);
        updateDarkModeIcon(isDarkMode);
    });

    // Toggle paper summary
    toggleSummaryBtn.addEventListener('click', () => {
        paperSummary.classList.toggle('hidden');
        const isExpanded = !paperSummary.classList.contains('hidden');
        toggleSummaryIcon.setAttribute('name', isExpanded ? 'chevron-up' : 'chevron-down');
        toggleSummaryText.textContent = isExpanded ? 'Hide Summary' : 'Show Summary';
    });

    // Update dark mode icon
    function updateDarkModeIcon(isDarkMode) {
        moonIcon.setAttribute('name', isDarkMode ? 'sun' : 'moon');
    }

    // Initialize Lucide icons
    lucide.createIcons();
});