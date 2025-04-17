// Auto-update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

mobileMenu.addEventListener('click', function() {
  this.classList.toggle('active');
  navbar.classList.toggle('active');
  
  // Toggle body scroll
  document.body.style.overflow = navbar.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking on nav links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    navbar.classList.remove('active');
    document.body.style.overflow = '';
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  if (navbar.classList.contains('active') && 
      !e.target.closest('.navbar') && 
      !e.target.closest('.menu-toggle')) {
    mobileMenu.classList.remove('active');
    navbar.classList.remove('active');
    document.body.style.overflow = '';
  }
});