var array = [1,2,3,4,5,6,7,8,9,10]
function exercicioTres(array) {
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 === 0) {
        pares++;
      } else {
        impares++;
      }
    }
    return [pares, impares];
  }
  console.log(`A quantidade informada foi ${array.length} a de valores pares foi ${pares} a de valores impares foi ${impares}`)