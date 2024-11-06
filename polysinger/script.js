document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabsContent = document.querySelectorAll('.tabs-content');

    tabButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const tabId = this.getAttribute('data-tab');
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            tabsContent.forEach(content => content.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    const technologyCards = document.querySelectorAll('.technology-card');

    technologyCards.forEach(function(card) {
        card.addEventListener('click', function(event) {
            if(event.target.closest('.learn-more')) {
                return;
            }
            const href = card.getAttribute('data-href');
            if(href) {
                window.open(href, '_blank');
            }
        });
    });
});
