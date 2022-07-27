const estados = ['Sao Paulo', 'Rio de Janeiro', 
'Amazonas', 'Pernambuco', 'SantaCatarina', 
'Rio Grande do Norte', 'Sergipe']

//Possibilidade 1

function inverterArrayNutella(array) {
    let arrayInvertido = array.reverse();
    return arrayInvertido;
  }
  
  const arrayTeste = ["1", "5", "8", "6", "0", "7", "3"];
  
  console.log(inverterArrayNutella(arrayTeste));