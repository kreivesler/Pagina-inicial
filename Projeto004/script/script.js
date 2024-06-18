document.addEventListener('DOMContentLoaded', function() {
  const botaoMenu = document.getElementById('menu');

  if (botaoMenu) {
      botaoMenu.addEventListener('click', function() {
          const menuLateral = document.getElementById('sb-m');
          if (menuLateral.style.display === 'none' || menuLateral.style.display === '') {
              menuLateral.style.display = 'block';
          } else {
              menuLateral.style.display = 'none';
          }
      });
  }
});

const imagens = ['https://kreivesler.github.io/Pagina-inicial/Projeto004/img/fundoWEB1.jpg', 
'https://kreivesler.github.io/Pagina-inicial/Projeto004/img/fundoWEB2.jpg', 
'https://kreivesler.github.io/Pagina-inicial/Projeto004/img/fundoWEB3.jpg'];
let imgCarrocel = 0;
const imgElement = document.getElementById('ca');

const carrocel = function(){
    imgCarrocel = (imgCarrocel + 1) % imagens.length;
    imgElement.src = imagens[imgCarrocel];
};
setInterval(carrocel, 3000);

