class Pessoa {
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
}

class Funcionario extends Pessoa{
    constructor (nome, salario, cargo){
        super(nome)
        this.salario = salario
        this.cargo = cargo
    }
}