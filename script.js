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

    // Meme section animations
    const memeSection = document.querySelector('.meme-section');
    if (memeSection) {
        memeSection.style.opacity = '0';
        memeSection.style.transform = 'scale(0.9)';
        memeSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        
        setTimeout(() => {
            memeSection.style.opacity = '1';
            memeSection.style.transform = 'scale(1)';
        }, 800);
    }

    // Add click effect to meme image
    const memeImage = document.querySelector('.meme-image');
    if (memeImage) {
        memeImage.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    }

    // Add some fun text effects
    const challengeText = document.querySelector('.challenge-text');
    if (challengeText) {
        challengeText.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        challengeText.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
});
