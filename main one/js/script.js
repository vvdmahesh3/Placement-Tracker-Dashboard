// script.js
import { db } from './firebase.js';
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

// ==================== Firebase Functions ====================

// Add a new application
async function addApplication(company, role, status) {
  try {
    const docRef = await addDoc(collection(db, "applications"), {
      company,
      role,
      status,
    });
    console.log("Document written with ID: ", docRef.id);
    showNotification("Application added successfully!");
  } catch (e) {
    console.error("Error adding document: ", e);
    showNotification("Error adding application. Please try again.", 5000);
  }
}

// Fetch all applications
async function fetchApplications() {
  const querySnapshot = await getDocs(collection(db, "applications"));
  const applications = [];
  querySnapshot.forEach((doc) => {
    applications.push({ id: doc.id, ...doc.data() });
  });
  return applications;
}

// Update an application
async function updateApplication(docId, newData) {
  try {
    const docRef = doc(db, "applications", docId);
    await updateDoc(docRef, newData);
    console.log("Document updated successfully!");
    showNotification("Application updated successfully!");
  } catch (e) {
    console.error("Error updating document: ", e);
    showNotification("Error updating application. Please try again.", 5000);
  }
}

// Delete an application
async function deleteApplication(docId) {
  try {
    await deleteDoc(doc(db, "applications", docId));
    console.log("Document deleted successfully!");
    showNotification("Application deleted successfully!");
  } catch (e) {
    console.error("Error deleting document: ", e);
    showNotification("Error deleting application. Please try again.", 5000);
  }
}

// ==================== UI Functions ====================

// Show a notification
function showNotification(message, duration = 3000) {
  const notification = document.getElementById('notification');
  if (notification) {
    notification.textContent = message;
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, duration);
  }
}

// Example usage
document.addEventListener('DOMContentLoaded', async () => {
  // Add a test application
  await addApplication("Google", "Software Engineer", "Applied");

  // Fetch and log all applications
  const applications = await fetchApplications();
  console.log("Applications: ", applications);

  // Update an application (replace DOCUMENT_ID with a valid ID)
  // await updateApplication("DOCUMENT_ID", { status: "Interview Scheduled" });

  // Delete an application (replace DOCUMENT_ID with a valid ID)
  // await deleteApplication("DOCUMENT_ID");
});