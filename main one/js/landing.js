// JavaScript for Landing Page
document.addEventListener('DOMContentLoaded', function () {
    console.log('Landing Page JS loaded!');
  
    // Example: Add a hover effect to the "Get Started" button
    const getStartedBtn = document.querySelector('.btn.neon-button');
    if (getStartedBtn) {
      getStartedBtn.addEventListener('mouseenter', () => {
        getStartedBtn.style.transform = 'scale(1.1)';
      });
      getStartedBtn.addEventListener('mouseleave', () => {
        getStartedBtn.style.transform = 'scale(1)';
      });
    }
  });