// JavaScript for Profile Page
document.addEventListener('DOMContentLoaded', function () {
    console.log('Profile Page JS loaded!');
  
    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
      profileForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        // Get form values
        const name = profileForm.querySelector('#name').value;
        const email = profileForm.querySelector('#email').value;
        const phone = profileForm.querySelector('#phone').value;
  
        // Basic validation
        if (!name || !email || !phone) {
          alert('Please fill in all fields.');
          return;
        }
  
        // Simulate profile update (replace with actual backend logic)
        console.log('Updating profile with:', { name, email, phone });
        alert('Profile updated successfully! 🎉');
      });
    }
  });