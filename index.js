 const puxouMenu = document.querySelector('section.puxouMenu');
const menuOn = document.querySelector('span.material-symbols-outlined');

function menuOnClick() {
  if (puxouMenu.style.display === 'block') {
    puxouMenu.style.display = 'none';
  } else {
    puxouMenu.style.display = 'block';
  }
}

menuOn.addEventListener('click', menuOnClick);