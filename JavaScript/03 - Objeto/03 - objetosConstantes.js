//pessoa aponta para o endereço de memória 123 que aponta para o objeto
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa) //Funciona, pois o objeto foi alterado mas o endereço de memória
//continua apontando para o mesmo local

//Atribui ao objeto constante pessoa um novo objeto que esta apontado em um endereço
//de memória diferente
//pessoa = {nome: 'Ana'}
console.log(pessoa) // Da erro pois está sendo atribuido para o objeto pessoa um
//outro objeto que é apontado em outro endereço de memória

Object.freeze(pessoa) // Congela o objeto não permitindo alterações

pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

//Desse modo não é possível alterar seu endereço e nem seu  conteúdo
const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)