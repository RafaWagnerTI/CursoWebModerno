let valor
console.log(valor) // Retorna Undefined, pois não foi inicializada

valor = null // Inicializou a variável definindo uma ausência de valor
console.log(valor)

// Não é ideal definir o valor de uma variável como undefined
// Sempre definr como null caso queria zerar o valor da variável

//console.log(valor.toString()) // Erro pois não é possível acessar o toString de null

const produto = {}
console.log(produto.preco) // Retorna Undefined, pois apesar do objeto ser criado,
//não foi definido atributo preço

//console.log(produto.preco.a) //Retorna Erro, pois não é possível acessar o atributo
// a partir de um atributo anterior undefined

console.log(produto)
produto.preco = 3.50
console.log(produto.preco)