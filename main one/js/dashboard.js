// Initialize Particle.js
particlesJS("particles-js", {
    particles: {
      number: { value: 80 },
      color: { value: "#2C74B3" },
      shape: { type: "circle" },
      opacity: { value: 0.5 },
      size: { value: 3 },
      line_linked: { enable: true, distance: 150, color: "#2C74B3", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 6 }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "repulse" },
        onclick: { enable: true, mode: "push" },
        resize: true
      }
    },
    retina_detect: true
  });
  
  // JavaScript for Dashboard Page
  document.addEventListener('DOMContentLoaded', function () {
    console.log('Dashboard Page JS loaded!');
  
    // Example: Add a hover effect to the frames
    const frames = document.querySelectorAll('.frame');
    frames.forEach(frame => {
      frame.addEventListener('mouseenter', () => {
        frame.style.transform = 'scale(1.05)';
        frame.style.boxShadow = '0 0 20px rgba(44, 116, 179, 0.5)';
      });
      frame.addEventListener('mouseleave', () => {
        frame.style.transform = 'scale(1)';
        frame.style.boxShadow = 'none';
      });
    });
  });