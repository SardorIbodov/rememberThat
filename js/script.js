const mobileMenu = document.getElementById('mobile-cta')
      mobileMenuExit = document.getElementById('mobile-exit')
      nav = document.querySelector('nav');

mobileMenu.addEventListener('click', () => {
  nav.classList.add('mobile-menu');
})

mobileMenuExit.addEventListener('click', () => {
  nav.classList.remove('mobile-menu');
})
