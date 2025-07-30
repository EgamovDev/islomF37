// script.js

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  if (navLinks.style.display === 'flex') {
    navLinks.style.display = 'none';
  } else {
    navLinks.style.display = 'flex';
  }
});

// Initialize AOS
AOS.init({
  duration: 800,
  once: true
});

// Card click navigation to single page
document.querySelectorAll('.card').forEach((card, idx) => {
  card.style.cursor = 'pointer';
  card.addEventListener('click', () => {
    window.location.href = `single.html?item=${idx + 1}`;
  });
});
