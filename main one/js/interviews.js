// JavaScript for Interview Schedule Page
document.addEventListener('DOMContentLoaded', function () {
  console.log('Interview Schedule Page JS loaded!');

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
      if (confirm('Are you sure you want to delete this interview?')) {
        alert('Interview deleted!');
        // Add logic to remove the interview from the table
      }
    });
  });
});