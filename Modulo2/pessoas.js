const pessoa = [
    {nome: 'Mario', idade: '25', profissao: 'encanador', cidade: 'Nova York'},
    {nome: 'Eduardo', idade: '19', profissao: 'quimico', cidade: 'Munique'},
    {nome: 'Afonso', idade: '18', profissao: 'assistente', cidade: 'Munique'},
    {nome: 'Tiago', idade: '18', profissao: 'suporte técnico', cidade: 'Natal'}
]
let i = 0
for (const pessoas of pessoa){
    i++
    console.log('---- Pessoa', i, '----')
    for (const propriedades in pessoas){
        console.log(propriedades, '=>', pessoas[propriedades])
    }
}