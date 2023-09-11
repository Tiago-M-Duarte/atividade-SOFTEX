var prompt = require('prompt-sync')()

function printResultado(){
    try {
    console.log(op1, operador, op2, '=', resultado)
        } catch(err){
            console.log('Algo deu errado nisso aqui:', err.message)
        } finally {
            console.log('Operação finalizada')
        }
}

function calcular(){

    operador = prompt('Digite o operador(+,-,*,/): ')

    if(operador == '+'){
        resultado = op1 + op2
        printResultado()
        return
    }
    if(operador == '-'){
        resultado = op1 - op2
        printResultado()
        return
    }
    if(operador == '*'){
        resultado = op1 * op2
        printResultado()
        return
    }
    if(operador == '/'){
        resultado = Math.floor(op1 / op2)
        console.log(op1, operador, op2, '=', resultado, 'com resto', (op1 % op2))
        return
    } else {
        console.log('Operador invalido')
        calcular()
    }
}

let op1 = parseInt(prompt('Digite o primeiro valor da operação: '))
let op2 = parseInt(prompt('Digite o segundo valor da operação: '))
let operador
calcular()