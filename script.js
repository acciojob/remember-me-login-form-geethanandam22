//your JS code here. If required.
// Select DOM elements
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// Check if credentials exist in localStorage
window.onload = () => {
  const savedUsername = localStorage.getItem("username");
  const savedPassword = localStorage.getItem("password");

  if (savedUsername && savedPassword) {
    existingBtn.style.display = "inline-block";
  } else {
    existingBtn.style.display = "none";
  }
};

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form refresh

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();

  if (username === "" || password === "") {
    alert("Please fill in all fields.");
    return;
  }

  alert(`Logged in as ${username}`);

  if (checkbox.checked) {
    // Save credentials
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
  } else {
    // Remove credentials if previously saved
    localStorage.removeItem("username");
    localStorage.removeItem("password");
  }

  // Toggle existing user button visibility
  const hasCredentials = localStorage.getItem("username") && localStorage.getItem("password");
  existingBtn.style.display = hasCredentials ? "inline-block" : "none";
});

// Handle "Login as existing user"
existingBtn.addEventListener("click", () => {
  const savedUsername = localStorage.getItem("username");
  if (savedUsername) {
    alert(`Logged in as ${savedUsername}`);
  }
});

