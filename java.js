function submitForm(event) {
    event.preventDefault();
    alert('Thank you for reaching out! I will get back to you soon.');
  }
  
  function revealSections() {
    const sections = document.querySelectorAll('.section');
    const header = document.getElementById('header');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => observer.observe(section));
    observer.observe(header);
  }
  
  window.addEventListener('DOMContentLoaded', revealSections);
  // Reveal sections when they scroll into view
document.addEventListener("DOMContentLoaded", () => {
    const revealOnScroll = () => {
      const sections = document.querySelectorAll('.section, header');
  
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };
  
    // Initial call
    revealOnScroll();
    // Call again on scroll
    window.addEventListener('scroll', revealOnScroll);
  });
  
  // Dummy contact form submission handler
  function submitForm(event) {
    event.preventDefault();
    alert("Thank you! Your message has been sent.");
  }
  
  