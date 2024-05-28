// script.js



document.addEventListener('DOMContentLoaded', function () {
  const menuIcon = document.querySelector('.menu-icon');
  const navLinks = document.querySelector('.nav-links');

  menuIcon.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });
});


function onScroll() {
  const icons = document.querySelectorAll('.icon');
  icons.forEach(icon => {
    const rect = icon.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      icon.classList.add('visible');
    }
  });
}


window.addEventListener('scroll', onScroll);
// Função para rolar suavemente até o topo da página
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Função para controlar a visibilidade   do botão flutuante
function toggleScrollToTopBtn() {
  const scrollToTopBtn = document.getElementById('scrollToTopBtn');
  if (window.scrollY > 200) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

// Adicionar um ouvinte de evento para verificar quando a página é rolada
window.addEventListener('scroll', toggleScrollToTopBtn);

