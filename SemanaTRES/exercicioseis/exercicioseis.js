
let botao = document.getElementById('botao01');

botao.addEventListener("click", function() {
    let input = document.getElementById("input");
    let listaBrincadeiras = document.getElementById("listaBrincadeiras");
    var novoItemLista = document.createElement('li');
    listaBrincadeiras.appendChild(novoItemLista);
    novoItemLista.innerHTML += (input.value);
    input.value = '';
    
});