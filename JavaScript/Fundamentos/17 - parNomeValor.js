const saudacao = 'Opa' //contexto 1

function exec() {
  const saudacao = 'Epa!' //contexto 2
  return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const usuario = {
  nome: 'Jonas',
  idade: 51,
  peso: 90,
  endereco: {
    logradouro: 'Rua dos Gracejos',
    numero: 504
  }
}

console.log(saudacao)
console.log(exec())
console.log(usuario)