const btn = document.getElementById("btn-access");

btn.addEventListener("click", function () {
  const nome = document.getElementById("input-name").value;
  localStorage.setItem("nomeUsuario", nome);
  window.location.href = "main.html";
});
