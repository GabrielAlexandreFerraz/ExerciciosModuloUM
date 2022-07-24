let arrayAlunos = [
    {
        nome: "Carlos",
        media: 10
    },
    {
        nome: "Julia",
        media: 8
    },
    {
        nome: "Rayane",
        media: 6
    },
    {
        nome: "Arthur",
        media: 5
    }
]
arrayAlunosRecuperacao = []
arrayAlunos.forEach((item) => {
    if(item.media > 7){console.log("Parabéns ao aluno(a) " + item.nome + " Você está aprovado")
}else{arrayAlunosRecuperacao.push(item.nome)}
});
console.log(arrayAlunosRecuperacao)

arrayAlunosRecuperacao.forEach((item) => {document.write("<li>" + item + "<br>" + "</li>")});


