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

const botoes = document.getElementsByClassName('btn');

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function() {
    window.location.href = "https://wa.me/31995341667";
  });
}



