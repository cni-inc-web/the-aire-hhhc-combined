document.addEventListener('DOMContentLoaded', function () {
  const logo = document.querySelector('.aire-nav_logo-link');
  const bg = document.querySelector('.aire-nav_background');

  if (!logo || !bg) return;

  function toggleNav() {
    const threshold = window.innerHeight * 0.6;

    if (window.scrollY >= threshold) {
      logo.classList.add('nav-visible');
      bg.classList.add('nav-visible');
    } else {
      logo.classList.remove('nav-visible');
      bg.classList.remove('nav-visible');
    }
  }

  toggleNav();

  window.addEventListener('scroll', toggleNav, { passive: true });
  window.addEventListener('resize', toggleNav);
});