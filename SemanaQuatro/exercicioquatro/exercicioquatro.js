

let array = ["paçoca", "martelo", "piranha", "sanduba", "colar"];
let minhaDiv = document.getElementById("souUmaDiv");
let minhaNovaDiv = document.getElementById("souUmaDiv2");
const botao = document.getElementById("meuBotao");
let input = document.getElementById("meuInput");

minhaDiv.innerHTML = `Os itens do meu array são: ${array}. Escolha um deles para excluir do lista e digite abaixo:`

console.log(`Meu array inicial é composto por ${array}`);


botao.addEventListener('click', function(){
let informado = array.indexOf(input.value);
array.splice(informado,1);
minhaNovaDiv.innerHTML = `Sua nova lista de array é: ${array}`
console.log(`Meu novo array é composto por ${array}`);
});