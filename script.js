const tombolMenu = document.querySelector('.tombol-menu');
const navMenu = document.getElementById('menubar');

tombolMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
