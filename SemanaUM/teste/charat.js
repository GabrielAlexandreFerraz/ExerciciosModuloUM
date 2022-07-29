// Crie uma arrow function que receba uma string 
// e devolva um objeto com as informações: 
// quantos caracteres a string possui
// qual seu primeiro caracter 
// e qual seu último caracte

const avaliarString = (texto) => {     
    let obj = {   
    tamanho : texto.length,
    primeiraLetra : texto[0],
    ultimaLetra : texto(texto.length-1)
    }
    console.log(objeto);
}

avaliarString('Perplexointorpigaitado');

// outra maneira de fazer
// const contString = ((string= {}) => {
//     let tamanhoChar = string.length;
//     let primeiroChar = string.substring(0,1);
//     let ultimoChar = string.substring(tamanhoChar-1, tamanhoChar);

//     const objetoChar = {
//         qtdChar: tamanhoChar,
//         primeiraLetra: primeiroChar,
//         ultimaLetra: ultimoChar
//       };
//      return objetoChar 
// });

// console.log(contChar('Palavra'));