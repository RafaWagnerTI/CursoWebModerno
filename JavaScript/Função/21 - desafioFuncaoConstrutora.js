function Pessoa(nome) {
  this.nome = nome

  //O retorno do nome pode variar dependendo de onde a função é executada
  this.falar = function () {
    return console.log(` Meu nome é ${nome}`)
  }
}

const pessoa = new Pessoa("Rafael")
pessoa.falar()