function nomeProprio(nome){
    nome = nome.toLowerCase() // toLowerCase deixa todas as letras minusculas
    nome = nome[0].toUpperCase() + nome.substring(1) // toUpperCase deixa as letras maiusculas nesse caso usei apenas na letra "[0]", 
                                                     // substring pega todos os caracteres após um determinado indice.
    return(nome)
}

console.log(nomeProprio('TIAgo'))