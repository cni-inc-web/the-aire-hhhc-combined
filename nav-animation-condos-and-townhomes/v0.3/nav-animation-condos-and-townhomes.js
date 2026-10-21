document.addEventListener('DOMContentLoaded', function () {
  console.log('[Nav] Script initialized');

  const logo = document.querySelector('.aire-nav_logo-link');
  const bg = document.querySelector('.aire-nav_background');
  const signup = document.querySelector('.aire-nav_signup-link-wrapper');

  console.log('[Nav] Element check:', {
    logo: logo ? 'FOUND' : 'MISSING',
    background: bg ? 'FOUND' : 'MISSING',
    signup: signup ? 'FOUND' : 'MISSING'
  });

  function toggleNav() {
    const threshold = window.innerHeight * 0.6;
    const shouldShow = window.scrollY >= threshold;

    if (!logo || !bg || !signup) {
      console.error('[Nav] Cannot toggle navigation. Missing elements:', {
        logo: !logo,
        background: !bg,
        signup: !signup
      });
      return;
    }

    [logo, bg, signup].forEach(function (element) {
      element.classList.toggle('nav-visible', shouldShow);
    });

    console.log('[Nav] Toggle complete:', {
      scrollY: window.scrollY,
      threshold: threshold,
      visible: shouldShow
    });
  }

  toggleNav();

  window.addEventListener('scroll', toggleNav, { passive: true });
  window.addEventListener('resize', toggleNav);
});

