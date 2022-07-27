array = [1,2,3,4,5,6,7,8,9,10]

let verificadorPar = function(numeros){
    return numeros % 2 === 0
}
let verificadorImpar = function(numeros){
    return numeros % 2 === 1
}

let filtroDeNumeros = function (numeros, funcaoDeCondicao){
    return numeros.filter(numero => funcaoDeCondicao(numero))
}
console.log(filtroDeNumeros(array,verificadorPar))
console.log(filtroDeNumeros(array,verificadorImpar))