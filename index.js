var prompt = require('prompt-sync')()

let nota1, nota2, nota3;

nota1 = parseInt(prompt('Digite a primeira nota '))
nota2 = parseInt(prompt('Digite a segunda nota '))
nota3 = parseInt(prompt('Digite a terceira nota '))

console.log('A média de suas notas é de: '+ (nota1+nota2+nota3)/3)