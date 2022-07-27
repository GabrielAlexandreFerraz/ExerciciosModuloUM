// Crie uma arrow function que recebe um 
// array de números e calcula a média deles
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

