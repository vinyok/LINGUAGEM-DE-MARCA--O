class pessoa{
    nome;
    dataNascimento;
    cpf;

    apresentar() {
        console.log(`O meu nome é ${this.nome}`) 
    }

}

let pessoa1 = new pessoa();
pessoa1.nome = "Ana";
pessoa1.apresentar ();

let pessoa2 = new pessoa();
pessoa2.nome = "Viny";
pessoa2.apresentar ();

pessoa2 = pessoa1
pessoa2.apresentar();

listaPessoas = {pessoa1, pessoa2}
console.log(listaPessoas) 