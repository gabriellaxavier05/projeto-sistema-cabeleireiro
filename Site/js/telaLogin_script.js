//JS para alternar a visibilidade da senha
// Seleciona o ícone de olho e o campo de senha
const togglePassword = document.getElementById("toggle-password");
const passwordField = document.getElementById("fpassword");

// Função para alternar a visibilidade da senha
togglePassword.addEventListener("click", function () {
  // Verifica o tipo do campo de senha (se está oculto ou visível)
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;

  // Alterna o ícone de olho entre fechado e aberto
  this.classList.toggle("fa-eye-slash");
  this.classList.toggle("fa-eye");
});
