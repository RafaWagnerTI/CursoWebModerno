//coleção dinâmica de pares chave/valor
const produto = new Object

// É possível adicionar atributos dessa maneira
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Genérica' //Recomendado fugir desse padrão de declaração,
//pois só sera possível acessar dessa forma
produto.preco = 220

console.log(produto)

// É possível remover atributos dessa maneria
delete produto.preco 
delete produto['marca do produto']

console.log(produto)

//objetos complexos
const carro = {
  modelo: 'A4',
  valor: 89000,
  proprietario: {
    nome: 'Raul',
    idade: 56,
    endereco: {
      logradouro: 'Rua ABC',
      numero: 123
    }
  },
  condutores: [{
    nome: 'Junior',
    idade: 19
  }, {
    nome: 'Ana',
    idade: 42
  }],
  calcularValorSeguro: function() {
    //...
  }
}

carro.proprietario.endereco.numero = 1000

//Apesar de ser uma declaração não usual, caso as chaves dos atributos sejam strings
//é possível envia-las como parâmetro para fazer uma alteração dessa maneira
carro['proprietario']['endereco']['logradouro'] = 'Av Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores) //Retorna undefinded pois não existe mais o atributo
//console.log(carro.condutores.length) //Retorna erro pois não é possível acessar essa
//propriedade de um atributo que não existe