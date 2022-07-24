class Pessoa{
    nome;
    idade;
    cpf;
    anoAniversario;

        constructor(nome, idade, cpf, anoAniversario){
            this.nome = nome;
            this.idade = idade;
            this.cpf = cpf;
            this.anoAniversario = anoAniversario;
        }    
    podeDirigir(){
        if (this.idade >= 18){
            return console.log("Pode dirigir");
        } else {
            return console.log("Tem que esperar mais um pouco");
        }
    }
}
var novaPessoa = new Pessoa("Gabriel", 27, "123456789", "1994");

console.log(novaPessoa.podeDirigir);