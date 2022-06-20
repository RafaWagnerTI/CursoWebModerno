function getPreco(imposto = 0, moeda = 'R$') {
  return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
  nome: 'Notebook',
  preco: 4589,
  desc: 0.15,
  getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) // Os valores this terão como referência o instanciado no global

console.log(produto.getPreco()) // Os valores this terão como referência o instanciado
//no objeto

const carro = {preco: 49990, desc: 0.20 }

// Neste caso, o primeiro parâmetro é o objeto usado como referência e os outros dois
//parâmetros são os parâmetros da função getPreco
console.log(getPreco.call(carro, 0.17, '$'))

// Neste caso, o primeiro parâmetro é o objeto usado como referência e o segundo é
//um array com os parâmetros da função getPreco
console.log(getPreco.apply(carro, [0.17, '$']))