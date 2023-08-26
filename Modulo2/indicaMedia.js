var prompt = require('prompt-sync')()

let nota1,nota2,nota3,media;

function aprova(nota3){
    console.log(nota3 < (21-media) ? 'REPROVOU' : 'APROVADO')
}


function proxMedia(nota1, nota2){
    media = (nota1+nota2)
    console.log('Você precisa de nota', 21-media, 'para passar')
}

nota1 = parseInt(prompt('De quanto foi a primeira nota? '))
nota2 = parseInt(prompt('E a segunda? '))
proxMedia(nota1, nota2)
nota3 = parseInt(prompt('Quanto foi a terceira nota? '))
aprova(nota3, media)
console.log(nota1,nota2,nota3,media)