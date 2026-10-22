
document.addEventListener('DOMContentLoaded', function () {
  console.log('[Nav Animation] DOMContentLoaded fired');

  const logo = document.querySelector('.aire-nav_logo-link');
  const bg = document.querySelector('.aire-nav_background');
  const signup = document.querySelector('.aire-nav_signup-link-wrapper');

  console.log('[Nav Animation] Logo:', logo);
  console.log('[Nav Animation] Background:', bg);
  console.log('[Nav Animation] Signup:', signup);

  function toggleNav() {
    const threshold = window.innerHeight * 0.6;
    const isVisible = window.scrollY >= threshold;

    console.log('[Nav Animation] Scroll:', window.scrollY);
    console.log('[Nav Animation] Threshold:', threshold);
    console.log('[Nav Animation] Visible:', isVisible);

    if (logo) logo.classList.toggle('nav-visible', isVisible);
    if (bg) bg.classList.toggle('nav-visible', isVisible);
    if (signup) signup.classList.toggle('nav-visible', isVisible);
  }

  toggleNav();

  window.addEventListener('scroll', toggleNav, { passive: true });
  window.addEventListener('resize', toggleNav);

  console.log('[Nav Animation] Initialized');
});
