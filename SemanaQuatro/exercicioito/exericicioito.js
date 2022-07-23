class Serie{
    nome;
    anoLancamento;
    qttTemporada;

    constructor(nome, anoLancamento, qttTemporada){
        this.nome = nome;
        this.anoLancamento = anoLancamento;
        this.qttTemporada = qttTemporada;
    }
}
let anoMaisAntiga; nomeAntigo;
let array =[0,0,0,0]


for (let i = 0; i <= 3 ; i++) {
    let nome = prompt("Digite o nome da serie")
    let anoLancamento = parseFloat(prompt("digite o ano do lancamento da serie"))
    let qttTemporada = parseFloat(prompt("digite a quantidade de temporadas"))

    let serie = new Serie(nome, anoLancamento, qttTemporada);
    if (i==0){
        anoMaisAntiga = serie.anoLancamento;
        nomeAntigo = serie.nome
    }else{
        if(serie.anoLancamento < maisAntiga){
            anoMaisAntiga = serie.anoLancamento;
            nomeAntigo = serie.nome
        }
    }

}

let tagh1 = document.getElementById("h1")
tagh1.innerHTML = nomeAntigo;
