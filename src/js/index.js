const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotao = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroAtivo = body.classList.contains("modo-escuro");
  body.classList.toggle("modo-escuro");
  if (modoEscuroAtivo) {
    imagemBotao.setAttribute("src", "./src/img/sun.png");
  } else {
    imagemBotao.setAttribute("src", "./src/img/moon.png");
  }
});
