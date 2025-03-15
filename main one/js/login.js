// Initialize Particle.js
particlesJS("particles-js", {
    particles: {
      number: {
        value: 80, // Number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#2C74B3", // Blue color for particles
      },
      shape: {
        type: "circle", // Shape of particles
      },
      opacity: {
        value: 0.5, // Opacity of particles
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 3, // Size of particles
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true, // Connect particles with lines
        distance: 150,
        color: "#2C74B3", // Blue color for connecting lines
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true, // Animate particles
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true, // Interact on hover
          mode: "repulse",
        },
        onclick: {
          enable: true, // Interact on click
          mode: "push",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
  
  // JavaScript for Login Page
  document.addEventListener('DOMContentLoaded', function () {
    console.log('Login Page JS loaded!');
  
    const loginForm = document.getElementById('login-form');
  
    // Form submission
    if (loginForm) {
      loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // Get form values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
  
        // Basic validation
        if (!email || !password) {
          alert('Please fill in all fields.');
          return;
        }
  
        // Simulate login (replace with actual backend logic)
        console.log('Logging in with:', { email, password });
        alert('Login successful! Redirecting to Dashboard...');
        window.location.href = 'dashboard.html'; // Redirect to dashboard
      });
    }
  });