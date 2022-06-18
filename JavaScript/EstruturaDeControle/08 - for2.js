const notas = [6.7, 7.1, 8.4, 9.9]

for (let i in notas) {
  console.log(`notas = ${notas[i]}`)
}

const pessoa = {
  nome: 'Rafael',
  sobrenome: 'Trindade',
  idade: 21,
  peso: 145
}

for (let i in pessoa) {
  console.log(`${i} = ${pessoa[i]}`)
}