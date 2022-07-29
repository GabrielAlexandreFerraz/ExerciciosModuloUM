// Utilize o if ternário para construir uma função que 
// recebe o número do dias e retorna se pertence 
// a primeira ou a segunda quinzena

// array = [20]

// let ternarium = (array >= 1 && array <= 15)? console.log("Primeira Quinzena"): console.log("Segunda Quinzena")

// let retornaQuinzena = numero => numero >= 1 && numero <= 15 ? "Primeira Quinzena":"Segunda Quinzena"

// console.log(retornaQuinzena(20))

//outra maneira de fazer 
// const retorna2aQuinzena = diaDoMes => (diaDoMes>=16 && diaDoMes <=31)
//  ? console.log("Segunda Quinzena") : console.log("Entrada Inválida")
// //
// const retornaQuinzena = diaDoMes => (diaDoMes>=1 && diaDoMes <=15)
//  ? console.log("Primeira Quinzena") : (retorna2aQuinzena(diaDoMes))

// // diaDoMes: 1-31

// retornaQuinzena(30);


let retornaQuinzena = numero => numero >= 1 && numero <= 15 ? "Primeira Quinzena":"Segunda Quinzena"

console.log(retornaQuinzena(20))