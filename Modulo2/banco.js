var prompt = require('prompt-sync')()

// Objeto Banco
function Banco(conta, saldo, tipoConta, agencia){
    this.conta = conta
    this.saldo = saldo
    this.tipoconta = tipoConta
    this.agencia = agencia
    this.buscaSaldo = function(){console.log('Seu saldo é de R$' + this.saldo)}
    this.deposito = function(valor){this.saldo += valor}
    this.saque = function(valor){this.saldo -= valor}
    this.numeroConta = function(){console.log('Seu número de conta é:', this.conta)}
}


// Trecho para testar objeto Banco
/*
minhaconta = new Banco(123321, 500, 2, 4)

op = '0'
while (op !== '5'){
    op = prompt('Qual operação? ') 
    switch(op){
        case '1':
            minhaconta.buscaSaldo()
            break
        case '2':
            minhaconta.deposito(parseFloat(prompt('Digite o valor que deseja depositar: ')))
            break
        case '3':
            minhaconta.saque(parseFloat(prompt('Digite o valor que deseja sacar: ')))
            break
        case '4':
            minhaconta.numeroConta()
            break  
    }
} */