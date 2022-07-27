let botao;
botao = document.getElementById("btn1");

botao.addEventListener("click",fazAlertaNaTela);

function fazAlertaNaTela(){
    window.alert("estou aqui");
}


// OUTRA MANEIRA 
// let myButton = document.getElementById("meuBotao");
// myButton.addEventListener("click", function () {
//     window.alert("Estou aqui");}
//     );
// let myButton = document.getElementById("meuBotao");
// myButton.addEventListener("click", fazAlertaNaTela);

// function fazAlertaNaTela(){
//     window.alert("Estou aqui");
// }