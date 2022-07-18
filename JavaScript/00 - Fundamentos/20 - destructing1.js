//recurso do ES2015

const pessoa = {
  nome: 'Ana',
  idade: 5,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

//Cria variáveis com o mesmo nome dos atributos do objeto pessoa
const { nome, idade } = pessoa
console.log(nome, idade)

//Cria variáveis com nomes diferentes que armazenam nome e idade do objeto pessoa 
const { nome: n, idade: i} = pessoa
console.log(n, i)

//Cria variáveis que armazenam valores que não existem no objeto pessoa
const {sobrenome, bemHumorada = true} = pessoa // Caso bemHumorada não exista
// retorna true por padrão
console.log(sobrenome, bemHumorada) // De outro modo o retorno padrão é undefined

// Cria variáveis que armazenam os valores dentro do objeto endereco, aninhado
//no objeto pessoa
const { endereco: {logradouro, numero, cep}} = pessoa 
console.log(logradouro, numero, cep) // cep não existe e retorna undefined


const { conta: {ag, num}} = pessoa // O erro ocorre  pois não existe o atributo 
// e por consequência também não existem os atributos aninhados