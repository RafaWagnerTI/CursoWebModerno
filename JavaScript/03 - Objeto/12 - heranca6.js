function Aula(nome, videoID) {
  this.nome = nome,
  this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 132)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

function novo(f, ...params) {
  const obj = {} // Cria objeto
  obj.__proto__ = f.prototype // Define o protótipo de referência do objeto como o de Função
  f.apply(obj, params) // Aplica ao objeto o array de parâmetros enviado
  return obj // retorna o objeto criado
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)