// Animate elements on scroll
const animateOnScroll = () => {
  const elements = document.querySelectorAll('.service-card, .reason');
  const windowHeight = window.innerHeight;
  
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    const animationPoint = windowHeight * 0.8;
    
    if (elementPosition < animationPoint) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
};

// Initialize animation
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('.service-card, .reason');
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.5s ease';
  });
  
  animateOnScroll();
});

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const headerHeight = document.querySelector('.header').offsetHeight;
      const targetPosition = targetElement.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});
  document.getElementById('quoteForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    const whatsappNumber = '254795102844'; // Your WhatsApp number (in international format without +)

    const fullMessage = `Hello Framis Plumbers,%0A%0AI'd like to request a quote.%0A%0AFull Name: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${fullMessage}`;

    window.open(whatsappURL, '_blank');
  });
