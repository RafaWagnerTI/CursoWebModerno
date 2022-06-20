const pessoa = {
  saudacao: "Bom dia!",
  falar() {
    console.log(this.saudacao)
  }
}

pessoa.falar()
const falar = pessoa.falar
falar() // Undefined pois há um conflito entre paradigmas funcional e OO
//de modo que o this não reconhece o atributo saudação.

// O bind atrela o this da função falar sempre ao objeto pessoa
const falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa() // Desse moto a variável passa a exibir o resultado da função
//corretamente



