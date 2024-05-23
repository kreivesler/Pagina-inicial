const botoes = document.getElementsByClassName("btn");

for (let i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener("click", function() {
    window.open("https://www.asaas.com/c/31ee15ewkbb0vgnq", "_blank");
  });
}
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

