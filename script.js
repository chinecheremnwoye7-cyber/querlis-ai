const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) newsletterForm.addEventListener('submit', event => {
  event.preventDefault();
  const message = document.getElementById('form-message');
  message.textContent = 'Thanks for your interest! This demo form is not connected to an email service yet.';
});
