let maiorNumero = (array) => Math.max(...array);

console.log(maiorNumero([1, 10, 3, 4, 6]));

// outra maneira de fazer 
// const numeroMaiorDeUmaArray = (array = []) => {
//     maior = 0;
//     for (const item of array) {
//       if(item > maior){
//         maior = item
//       }
//     }
//     return maior
//   }
//   console.log(maior)


// let numeros = [1,78,4,5,6,7,9];

// const maiorValor = (numeros=[]) => numeros.reduce((maior,menor) => {return maior > menor ? maior : menor});

// console.log(maiorValor(numeros))

// var array = [-10, -20, -30, -120, -1000];

// const localizarMaior = (array=[]) => {
//     var maior = array[0];
//     array.forEach(item => {
//         if (item > maior) {
//             maior = item;
//         }
//     });
//     return maior;
// }

// console.log(`O maior valor é ${localizarMaior(array)}`);