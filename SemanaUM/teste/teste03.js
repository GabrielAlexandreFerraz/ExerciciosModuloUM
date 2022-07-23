let array = [
    {
      nome: "Rayane",
      sobrenome: "Cristina",
      idade: 21
    },
    {
      nome: "Carlos",
      sobrenome: "Henrique",
      idade: 17
    },
    {
      nome: "Julio",
      sobrenome: "Cesar",
      idade: 19
    },
    {
      nome: "Camila",
      sobrenome: "Fernandes",
      idade: 18
    },
  
{
    nome: "Julia",
    sobrenome: "Fernandes",
    idade: 10
  },
  {
    nome: "Bruno",
    sobrenome: "Albuquerque",
    idade: 31
  },
  {
    nome: "Túlio",
    sobrenome: "Bastos",
    idade: 22
  },
  {
    nome: "Cristiane",
    sobrenome: "Maria",
    idade: 41
  },
]
var arrayDois = [];

array.forEach(function(item) {
    if (item.idade > 18 ) {
        arrayDois.push(item);
        console.log(arrayDois);
    }
});
var maiorQueTrinta = arrayDois.find(function (nomes){
    return item.idade > 30;
});

console.log("<h1>" + maiorQueTrinta.nome + " " + maiorQueTrinta.sobrenome + "</h1>" );