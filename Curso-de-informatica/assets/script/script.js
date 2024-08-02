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
    window.location.href = "https://www.udemy.com/course/curso-de-informatica-essencial/?referralCode=EB7A53AB3FDC78443041";
  });
}

const botaop = document.getElementsByClassName('btnp');

for (let i = 0; i < botaop.length; i++) {
  botaop[i].addEventListener("click", function(){
    window.location.href = "https://www.udemy.com/course/curso-de-informatica-essencial/?referralCode=EB7A53AB3FDC78443041";
  });
  
}


