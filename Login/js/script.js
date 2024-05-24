document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('f-login');

  formulario.addEventListener('submit', function(e) {
      e.preventDefault();

      const usuario = document.getElementById('name').value;
      const senha = document.getElementById('password').value;

      const nUsuario = "kipo2024";
      const sUsuario = "K0265728@";

      if (usuario === nUsuario && senha === sUsuario) {
          window.location.href = "https://rileysolucoes.com.br/Area-do-aluno/";
      } else {
          alert('Usuario e senha errados, favor tentar novamente ou contatar o suporte.');
      }
  });
});
