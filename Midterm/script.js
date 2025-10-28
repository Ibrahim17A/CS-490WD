// Time-based greeting
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
if (greeting) {
  if (hour < 12) greeting.textContent = "Good morning ☀️";
  else if (hour < 18) greeting.textContent = "Good afternoon ☕";
  else greeting.textContent = "Good evening 🌙";
}

// Dark mode toggle
const themeBtn = document.getElementById('themeToggle');
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light');
  themeBtn.textContent = document.body.classList.contains('light')
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});

// Scroll to top button
const toTopBtn = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
toTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// Modal popup
const modal = document.getElementById('projectModal');
const closeModal = document.getElementById('closeModal');
document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const card = e.target.closest('.card');
    document.getElementById('modalTitle').textContent = card.dataset.title;
    document.getElementById('modalDesc').textContent = card.dataset.desc;
    document.getElementById('modalLink').href = card.dataset.link;
    modal.showModal();
  });
});
closeModal.addEventListener('click', () => modal.close());

// Simple form validation message
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.reportValidity()) return;
  formMsg.textContent = "Thanks! Your message has been validated.";
  form.reset();
  setTimeout(() => formMsg.textContent = "", 4000);
});

// Auto year in footer
document.getElementById('year').textContent = new Date().getFullYear();
