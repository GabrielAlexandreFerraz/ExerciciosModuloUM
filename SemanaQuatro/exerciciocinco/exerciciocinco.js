let array1 = [1,3,4,5,3,7];
let array2 = [1,2,6,4,8,5];

let array3 = array1.concat(array2)

let arrayFiltrado = array3.filter(function(este, i){
    return array3.indexOf(este) == i;
})

console.log(arrayFiltrado)

