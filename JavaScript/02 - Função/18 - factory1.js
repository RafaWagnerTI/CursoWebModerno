// Uma função factory é uma função que tem como objetivo criar objetos

// Exemplo de função factory simples...
function criarPessoa() {
  return {
    nome: 'Ana',
    sobrenome: 'Silva'
  }
}

console.log(criarPessoa())