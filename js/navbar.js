const toggler = document.getElementById('navbar-toggle');
const menu = document.getElementById('navbar-menu');

toggler.addEventListener('click', () => {
  const icon = toggler.querySelector('i');
  const hidden = menu.classList.contains('hide-items');

  if (hidden) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
  } else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
  }

  menu.classList.toggle('hide-items');
});
