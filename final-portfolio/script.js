// --- Show a simple greeting depending on the time ---
function setGreeting() {
  const greeting = document.getElementById("greeting");
  const hour = new Date().getHours();

  if (hour < 12) {
    greeting.textContent = "Good Morning ☀️";
  } else if (hour < 18) {
    greeting.textContent = "Good Afternoon 🌤️";
  } else {
    greeting.textContent = "Good Evening 🌙";
  }
}
setGreeting();


// --- Dark mode switch ---
const darkToggle = document.getElementById("darkModeToggle");

// This turns dark mode on or off
function applyDarkMode(isDark) {
  if (isDark) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark"); // save choice
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light");
  }
}

// Load saved theme when page opens
applyDarkMode(localStorage.getItem("theme") === "dark");

// Change theme when button is clicked
darkToggle.addEventListener("click", () => {
  const isDark = !document.body.classList.contains("dark-mode");
  applyDarkMode(isDark);
});


// --- Scroll to top button ---
const scrollBtn = document.getElementById("scrollToTop");

// Show or hide button based on scroll
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
});

// Go back to top smoothly
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
