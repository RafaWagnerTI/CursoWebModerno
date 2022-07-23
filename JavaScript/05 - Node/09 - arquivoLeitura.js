const fs = require('fs')

//__dirname é uma variável padrão que pega o caminho atual até a pasta
const caminho = __dirname + '/09 - arquivo.json'

//síncrono
const conteudo = fs.readFileSync(caminho, 'utf-8')
console.log(conteudo)

//assíncrono
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
  const config = JSON.parse(conteudo)
  console.log(`\n${config.db.host}: ${config.db.port}`)
})

const config = require('./09 - arquivo.json')
console.log(`\n${config.db}`)

//lendo uma pasta
fs.readdir(__dirname, 'utf-8', (err, arquivo) => {
  console.log('Conteúdo da pasta...')
  console.log(arquivo)
})