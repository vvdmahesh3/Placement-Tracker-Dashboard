/JavaScript for both pages/

// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBowoyyFQtOvDT14slzb43bDTMXYjlwnHw",
    authDomain: "placement-tracker-e9622.firebaseapp.com",
    projectId: "placement-tracker-e9622",
    storageBucket: "placement-tracker-e9622.firebasestorage.app",
    messagingSenderId: "495136939637",
    appId: "1:495136939637:web:be2d51337e86247302e23c",
    measurementId: "G-ZC4LJMEH08"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.firestore();
  
  // Check if the user is logged in
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is logged in, redirect to the dashboard
      if (window.location.pathname.includes("login.html")) {
        window.location.href = "index.html";
      }
    } else {
      // User is not logged in, redirect to the login page
      if (!window.location.pathname.includes("login.html")) {
        window.location.href = "login.html";
      }
    }
  });
  
  // Login Functionality
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Sign in with email and password
      auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
          // Redirect to the dashboard after successful login
          window.location.href = "index.html";
        })
        .catch((error) => {
          alert("Login failed: " + error.message);
        });
    });
  }
  
  // Dark/Light Mode Toggle
  const themeToggle = document.getElementById("theme-toggle");
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      themeToggle.innerHTML = document.body.classList.contains("dark-mode")
        ? '<i class="fas fa-sun"></i> Light Mode'
        : '<i class="fas fa-moon"></i> Dark Mode';
    });
  }
  
  // Application Tracker
  const applicationForm = document.getElementById("application-form");
  if (applicationForm) {
    applicationForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const companyName = document.getElementById("company-name").value;
      const role = document.getElementById("role").value;
      const status = document.getElementById("status").value;
  
      // Add to Firestore
      db.collection("applications").add({ companyName, role, status })
        .then(() => {
          alert("Application added successfully!");
          document.getElementById("application-form").reset();
          fetchApplications();
        })
        .catch((error) => {
          console.error("Error adding application: ", error);
        });
    });
  }
  
  // Fetch Applications
  function fetchApplications() {
    db.collection("applications").get().then((querySnapshot) => {
      const applicationList = document.getElementById("application-list");
      applicationList.innerHTML = "";
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const row = `
          <tr>
            <td>${data.companyName}</td>
            <td>${data.role}</td>
            <td>${data.status}</td>
            <td>
              <button class="btn btn-sm btn-warning" onclick="editApplication('${doc.id}')">Edit</button>
              <button class="btn btn-sm btn-danger" onclick="deleteApplication('${doc.id}')">Delete</button>
            </td>
          </tr>
        `;
        applicationList.innerHTML += row;
      });
    });
  }
  
  // Interview Schedule
  const interviewForm = document.getElementById("interview-form");
  if (interviewForm) {
    interviewForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const companyName = document.getElementById("interview-company").value;
      const date = document.getElementById("interview-date").value;
      const time = document.getElementById("interview-time").value;
  
      // Add to Firestore
      db.collection("interviews").add({ companyName, date, time })
        .then(() => {
          alert("Interview added successfully!");
          document.getElementById("interview-form").reset();
          fetchInterviews();
        })
        .catch((error) => {
          console.error("Error adding interview: ", error);
        });
    });
  }
  
  // Fetch Interviews
  function fetchInterviews() {
    db.collection("interviews").get().then((querySnapshot) => {
      const interviewList = document.getElementById("interview-list");
      interviewList.innerHTML = "";
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const row = `
          <tr>
            <td>${data.companyName}</td>
            <td>${data.date}</td>
            <td>${data.time}</td>
            <td>
              <button class="btn btn-sm btn-warning" onclick="editInterview('${doc.id}')">Edit</button>
              <button class="btn btn-sm btn-danger" onclick="deleteInterview('${doc.id}')">Delete</button>
            </td>
          </tr>
        `;
        interviewList.innerHTML += row;
      });
    });
  }
  
  // Fetch Data on Page Load
  if (window.location.pathname.includes("index.html")) {
    fetchApplications();
    fetchInterviews();
  }
  
  // Edit Application
  function editApplication(id) {
    const newCompanyName = prompt("Enter new company name:");
    const newRole = prompt("Enter new role:");
    const newStatus = prompt("Enter new status:");
  
    if (newCompanyName && newRole && newStatus) {
      db.collection("applications").doc(id).update({
        companyName: newCompanyName,
        role: newRole,
        status: newStatus
      })
        .then(() => {
          alert("Application updated successfully!");
          fetchApplications();
        })
        .catch((error) => {
          console.error("Error updating application: ", error);
        });
    }
  }
  
  // Delete Application
  function deleteApplication(id) {
    if (confirm("Are you sure you want to delete this application?")) {
      db.collection("applications").doc(id).delete()
        .then(() => {
          alert("Application deleted successfully!");
          fetchApplications();
        })
        .catch((error) => {
          console.error("Error deleting application: ", error);
        });
    }
  }
  
  // Edit Interview
  function editInterview(id) {
    const newCompanyName = prompt("Enter new company name:");
    const newDate = prompt("Enter new interview date (YYYY-MM-DD):");
    const newTime = prompt("Enter new interview time (HH:MM):");
  
    if (newCompanyName && newDate && newTime) {
      db.collection("interviews").doc(id).update({
        companyName: newCompanyName,
        date: newDate,
        time: newTime
      })
        .then(() => {
          alert("Interview updated successfully!");
          fetchInterviews();
        })
        .catch((error) => {
          console.error("Error updating interview: ", error);
        });
    }
  }
  
  // Delete Interview
  function deleteInterview(id) {
    if (confirm("Are you sure you want to delete this interview?")) {
      db.collection("interviews").doc(id).delete()
        .then(() => {
          alert("Interview deleted successfully!");
          fetchInterviews();
        })
        .catch((error) => {
          console.error("Error deleting interview: ", error);
        });
    }
  }

