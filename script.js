/* =========================
   12. JAVASCRIPT (ADD TO SCRIPT.JS)
   ========================= */

/*
MENU TOGGLE
*/

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

/*
SCROLL ANIMATION
*/
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

document.querySelectorAll('.card, .section-title').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

/* =========================
   13. MULTI PAGE STRUCTURE
   ========================= */

/*
index.html → Home page (this design)
about.html → Who we are + mission/vision
services.html → service cards only
team.html → staff profiles
contact.html → form + map

All pages use SAME header + footer
*/
