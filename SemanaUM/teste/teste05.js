const estados = ['Sao Paulo', 'Rio de Janeiro', 
'Amazonas', 'Pernambuco', 'SantaCatarina', 
'Rio Grande do Norte', 'Sergipe']

function maiorStringDoArray(array){
    let maior = "";
  for (let item of array) {
     if(item.length > maior.length){
        maior = item;
     }
  }
  return maior
}

console.log(maiorStringDoArray(estados));
// 

