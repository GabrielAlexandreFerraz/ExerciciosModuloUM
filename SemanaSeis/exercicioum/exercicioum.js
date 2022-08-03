let nome = window.prompt("Digite seu nome");
let sobrenome = window.prompt("Digite seu Sobrenome");
let idade = parseInt(window.prompt("Digite sua Idade"));

document.write(`Eu ${nome} ${sobrenome}, possuo ${idade}, e nasci em ${2022 - idade}`)