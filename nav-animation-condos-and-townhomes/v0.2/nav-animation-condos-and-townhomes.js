document.addEventListener('DOMContentLoaded', function () {
  console.log('[Nav Toggle] DOMContentLoaded fired');

  const logo = document.querySelector('.aire-nav_logo-link');
  const bg = document.querySelector('.aire-nav_background');
  const signup = document.querySelector('.aire-nav_signup-link-wrapper');

  console.log('[Nav Toggle] Elements found:', {
    logo: !!logo,
    background: !!bg,
    signup: !!signup
  });

  function toggleNav() {
    const threshold = window.innerHeight * 0.6;
    const scrollY = window.scrollY;
    const shouldShow = scrollY >= threshold;

    console.log('[Nav Toggle] Checking scroll:', {
      scrollY,
      threshold,
      shouldShow
    });

    if (!logo || !bg || !signup) {
      console.error('[Nav Toggle] One or more required elements are missing!');
      return;
    }

    if (shouldShow) {
      console.log('[Nav Toggle] Adding nav-visible class');

      logo.classList.add('nav-visible');
      bg.classList.add('nav-visible');
      signup.classList.add('nav-visible');
    } else {
      console.log('[Nav Toggle] Removing nav-visible class');

      logo.classList.remove('nav-visible');
      bg.classList.remove('nav-visible');
      signup.classList.remove('nav-visible');
    }

    console.log('[Nav Toggle] Current classes:', {
      logo: logo.className,
      background: bg.className,
      signup: signup.className
    });
  }

  console.log('[Nav Toggle] Running initial check');
  toggleNav();

  window.addEventListener('scroll', toggleNav, { passive: true });
  window.addEventListener('resize', toggleNav);

  console.log('[Nav Toggle] Scroll and resize listeners attached');
});