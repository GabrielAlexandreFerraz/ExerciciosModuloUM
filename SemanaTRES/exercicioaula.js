
somar ()
var n1 = 1;
var n2 = 2;

function somar(){
    console.log(Number(n1) + Number(n2))
}
// Number é usado para transformar string em numero
// da pra usar parsetflot ou parseint 


// Crie uma função não nomeada 
// que recebe um número e 
// devolva uma string dizendo 
// se é par ou ímpar.
var num = 12
var informarPar = function (){
    if(num % 2 == 0){return "par"}
    else if(num % 2 == 1){return "impar"
}else{return "invalido"}}

informarPar()


// Crie uma função nomeada que 
// recebe um array de elementos, 
// imprima cada um dos elementos e 
// em seguida retorne a quantidade 
// de elementos no array (seu tamanho).
function imprimeElementosDaLista (lista = []){
    
    for (let item of lista){
         console.log (item);
    }
    let quantidade = "A quantidade de elementos da lista são " + lista.length;
    return quantidade

}
console.log (imprimeElementosDaLista(["oi", "turu", "bom"]));


//
//
//
// function imprimeElementosDaListaERetornaQtdDeItens (lista = []){
    
//     function imprimeElementosDaLista (lista){
        
//         for (let item of lista){
//              console.log(item);
//         }
//     }

//     function retornarQtdDeElementosDaLista (lista){
//         console.log("Este array tem " + lista.length + " ítens.");
//     }

//     imprimeElementosDaLista(lista);
//     retornarQtdDeElementosDaLista(lista);

// }

// console.log (imprimeElementosDaListaERetornaQtdDeItens(["oi", "turu", "bom"]));
//exemplo
