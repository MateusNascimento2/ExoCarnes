const headerButtonOpen = document.getElementById('c-navbar-button-open');
const headerButtonClose = document.getElementById('c-navbar-button-close');
const headerMobile = document.querySelector('.l-header-mobile');
const linksMobile = document.querySelectorAll('.link-mobile');

headerButtonOpen.addEventListener('click', function() {
  headerMobile.classList.toggle('_is-open')
})

headerButtonClose.addEventListener('click', function() {
  headerMobile.classList.toggle('_is-open');
})

linksMobile.forEach((link) => {
  link.addEventListener('click', () => {
    headerMobile.classList.remove('_is-open');
  })
})

