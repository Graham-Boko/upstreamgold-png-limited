/* MENU TOGGLE */
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const navContainer = document.querySelector('.nav');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navContainer.classList.toggle('menu-open'); // shifts ☰ icon
  });
}

/* CLOSE MENU ON CLICK */
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navContainer.classList.remove('menu-open'); // close shift too
  });
});
