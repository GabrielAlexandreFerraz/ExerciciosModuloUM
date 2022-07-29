// Crie uma arrow function que recebe um array de números 
// e retorne um array contendo apenas 
// números positivos

let array = [1,2,3,4,5,6,7,8]

const calcularMedia = (array) => {
    let soma = 0;
    for( let i = 0; i < array.length; i++ ){
    soma += array[i];
}

let media = soma/array.length;
console.log(media)
}

calcularMedia(array)


// function maiorStringDoArray(array){
//     let maior = "";
//   for (let item of array) {
//      if(item.length > maior.length){
//         maior = item;
//      }
//   }
//   return maior
// }

// console.log(maiorStringDoArray(estados));