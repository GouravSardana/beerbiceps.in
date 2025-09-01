// Simple page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Email button click tracking
    const emailButton = document.querySelector('.email-button');
    if (emailButton) {
        emailButton.addEventListener('click', function() {
            // Track email click for analytics
            if (typeof gtag !== 'undefined') {
                gtag('event', 'click', {
                    'event_category': 'engagement',
                    'event_label': 'email_button_click'
                });
            }
        });
    }

    // Simple fade-in animation for the letter
    const letterContainer = document.querySelector('.letter-container');
    if (letterContainer) {
        letterContainer.style.opacity = '0';
        letterContainer.style.transform = 'translateY(20px)';
        letterContainer.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        setTimeout(() => {
            letterContainer.style.opacity = '1';
            letterContainer.style.transform = 'translateY(0)';
        }, 100);
    }
});
