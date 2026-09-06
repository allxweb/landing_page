document.getElementById('year').textContent = new Date().getFullYear();

const menu = document.querySelector('.menu-button');
const nav = document.querySelector('.nav');
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!open));
  nav.classList.toggle('is-open', !open);
});

document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('is-open');
  menu?.setAttribute('aria-expanded', 'false');
}));
