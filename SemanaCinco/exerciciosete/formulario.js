import imprimeDadosDeUsuario from "./mostrarusuario.js";
let botao;
botao = document.getElementById("botao1");

botao.addEventListener("click", recebeClickDoBotao);

function recebeClickDoBotao(){
    let campoNome, campoImg, campoDescricao;
    campoNome = document.getElementById("nome").value;
    campoImg = document.getElementById("imagem").value;
    campoDescricao = document.getElementById("descricao").value;
    nome.value =""
    imagem.value = ""
    descricao.value = ""
    imprimeDadosDeUsuario(campoNome, campoImg, campoDescricao)

}