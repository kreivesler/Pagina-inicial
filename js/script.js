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

const botao = document.getElementById("btn");

botao.addEventListener("click", function() {
  window.location.href = "https://wa.me/31995341667";
});

document.querySelectorAll('a[href^="#sec-two"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.querySelectorAll('a[href^="#sec-two"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

