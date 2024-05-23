const botao = document.getElementsByClassName("btn");

botao.addEventListener("click", function() {
  window.location.href = "https://www.asaas.com/c/31ee15ewkbb0vgnq";
});

document.querySelectorAll('a[href^="#sv"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

document.querySelectorAll('a[href^="#ct"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

