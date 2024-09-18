// Pega os elementos do botão "sim" ou "não"
let botaoNao = document.getElementById("nao");
let botaoSim = document.getElementById("sim");
let mensagemErro = document.getElementById("erro");

//!SECTION
botaoNao.addEventListener("mouseover", function() {
    // Move o botão "não" aleatoriamente pela tela
    let posX = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    let posY = Math.random() * (window.innerHeight - botaoSim.offsetHeight);
    botaoNao.style.position = "absolute";
    botaoNao.style.left = posX + "px";
    botaoNao.style.top = posY + "px";
    // Exibe a mensagem de erro
    mensagemErro.style.display = "block";
});
// Mantém o botão "Sim" fixo
botaoSim.addEventListener("click", function() {
    alert("Ótima escolha, vamos casar!");
});
