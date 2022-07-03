const alunos = [
  { nome: "João",  nota: 7.9 }, 
  { nome: "Maria", nota: 9.2 }
]

//Imperativo -> Os detalhes de como tem que ser feito importam mais no modo imperativo
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
  total1 += alunos[i].nota
}

console.log(total1/ alunos.length)

//Declarativo -> Os detalhes do que tem que ser feito importam mais no modo declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)