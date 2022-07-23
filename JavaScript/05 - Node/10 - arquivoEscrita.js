const fs = require('fs')

const produto = {
  nome: 'Celular',
  preco: 1249.99,
  desconto: 0.15
}

fs.writeFileSync(__dirname + '/10 - arquivoGerado.json', JSON.stringify(produto),
  err => console.log(err || 'Arquivo salvo!') )