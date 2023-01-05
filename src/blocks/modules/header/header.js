const $toggleMenu = document.querySelector('label[id="hamburger"]');

$toggleMenu.addEventListener('click', function isActiveToggleMenu() {
  $toggleMenu.classList.toggle("is-active")
});