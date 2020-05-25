document.addEventListener('DOMContentLoaded', function () {

  // menu
  const leftMenu = document.querySelector('.left-menu');
  const hamburger = document.querySelector('.hamburger');

  const tvCardImg = document.querySelector('.tv-card__img');

  // open & close menu
  hamburger.addEventListener('click', () => {
    leftMenu.classList.toggle('openMenu');
    hamburger.classList.toggle('open');
  });

  // close menu if click is not in the menu area 
  document.addEventListener('click', event => {
    const target = event.target;

    if (!target.closest('.left-menu')) {
      leftMenu.classList.remove('openMenu');
      hamburger.classList.remove('open');
    }
  });

  // open dropdown menu
  leftMenu.addEventListener('click', event => {
    const target = event.target;
    const dropdown = target.closest('.dropdown');

    if (dropdown) {
      dropdown.classList.toggle('active');
      leftMenu.classList.add('openMenu');
      hamburger.classList.add('open');
    }
  });

  // mouse
  tvCardImg.addEventListener('mouseover', () => {
    tvCardImg.style.display = "none";
  })

  tvCardImg.addEventListener('mouseout', () => {
    tvCardImg.style.display = "block";
  })


})