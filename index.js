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


const backToTopBtn = document.getElementById('backToTopBtn');
// Define a partir de quantos pixels o botão deve aparecer
const scrollThreshold = 300; 

// --- 1. FUNÇÃO PARA ROLAR SUAVEMENTE PARA O TOPO ---
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Esta linha garante a rolagem suave e profissional
    });
}


function toggleBackToTop() {
   
    if (window.scrollY > scrollThreshold) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
}


// Adiciona o ouvinte para o clique do botão
backToTopBtn.addEventListener('click', scrollToTop);

// Adiciona o ouvinte para o evento de rolagem (scroll)
window.addEventListener('scroll', toggleBackToTop);

// Executa uma vez no carregamento para checar a posição inicial
toggleBackToTop();