const prod1 = {}
prod1.nome = 'Celular' // atributo nome é criado dinamicamente
prod1.preco = 5000.00 // atributo preço é criado dinamicamente
prod1['Desconto Legal'] = 0.40 // Evitar nome de atributo com espaço

console.log(prod1)

const prod2 = {
  nome: 'Camisa',
  preco: 79.98
}

console.log(prod2)

delete prod2.preco // remove o atributo preço do objeto

console.log(prod2)

// Um JSON é diferente de um objeto JS, pois é um formato textual para comunicação
// entre sistemas.