// JavaScript for Additional Features Page
document.addEventListener('DOMContentLoaded', function () {
    console.log('Additional Features Page JS loaded!');
  
    // Add hover effects to cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = '0 10px 20px rgba(44, 116, 179, 0.5)';
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'none';
      });
    });
  
    // Simulate button clicks
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        alert(`🚀 Feature coming soon! Stay tuned.`);
      });
    });
  
    // Typewriter Effect for Heading
    const heading = document.querySelector('.additional-heading');
    if (heading) {
      const text = heading.innerText;
      heading.innerText = '';
      let i = 0;
      const typewriter = setInterval(() => {
        if (i < text.length) {
          heading.innerText += text.charAt(i);
          i++;
        } else {
          clearInterval(typewriter);
        }
      }, 100); // Adjust speed here
    }
  
    // Countdown Timer for Upcoming Features
    const countdownElement = document.createElement('div');
    countdownElement.className = 'countdown';
    countdownElement.innerHTML = `
      <h3>🚀 Launching in:</h3>
      <div class="timer">
        <span id="days">00</span>d :
        <span id="hours">00</span>h :
        <span id="minutes">00</span>m :
        <span id="seconds">00</span>s
      </div>
    `;
    document.querySelector('.content').appendChild(countdownElement);
  
    const countdownDate = new Date('2023-12-31T00:00:00').getTime(); // Set your launch date here
    const countdown = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('days').innerText = days;
      document.getElementById('hours').innerText = hours;
      document.getElementById('minutes').innerText = minutes;
      document.getElementById('seconds').innerText = seconds;
  
      if (distance < 0) {
        clearInterval(countdown);
        countdownElement.innerHTML = '<h3>🎉 Feature Launched!</h3>';
      }
    }, 1000);
  
    // Particle.js Interaction
    particlesJS.load('particles-js', 'particles.json', function () {
      console.log('Particles.js loaded!');
    });
  });