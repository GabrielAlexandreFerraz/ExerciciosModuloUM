let array = [1,-2,2,3,4,-4,5,-7,6,7,8,-9];
let retornaPositivo = array => {
    return array.filter(array => array > 0)
}

console.log(retornaPositivo(array))

