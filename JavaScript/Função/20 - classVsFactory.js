class Pessoa {
  constructor(nome) {
    this.nome = nome
  }

  //O retorno do nome pode variar dependendo de onde a função é executada
  falar() {
    console.log(`Meu nome é ${this.nome}`)
  }
}

const p1 = new Pessoa('João')
p1.falar()

const criarPessoa = nome => {
  return {
    falar: () => console.log(`Meu nome é ${nome}`)
  }
}

const p2 = criarPessoa('João')
//O retorno do nome não é alterado independente do local de execução
p2.falar()