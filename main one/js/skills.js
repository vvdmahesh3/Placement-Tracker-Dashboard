// JavaScript for Skill Tracker Page
document.addEventListener('DOMContentLoaded', function () {
    console.log('Skill Tracker Page JS loaded!');
  
    // Example: Add functionality to the "Edit" and "Delete" buttons
    const editButtons = document.querySelectorAll('.btn:not(.delete)');
    const deleteButtons = document.querySelectorAll('.btn.delete');
  
    editButtons.forEach(button => {
      button.addEventListener('click', () => {
        alert('Edit functionality will be added soon!');
      });
    });
  
    deleteButtons.forEach(button => {
      button.addEventListener('click', () => {
        if (confirm('Are you sure you want to delete this skill?')) {
          alert('Skill deleted!');
          // Add logic to remove the skill from the table
        }
      });
    });
  });