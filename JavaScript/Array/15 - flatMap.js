const escola = [
  { turma: "TURMA 1A",
    alunos: [{
      nome: 'Otávio',
      nota: 8.1
    },
    {
      nome: 'Ana',
      nota: 9.3
    }]
  },
  {
    turma: "TURMA 2B",
    alunos: [{
      nome: 'Rebeca',
      nota: 8.9
    }, {
      nome: 'Roberto',
      nota: 7.3
    }]
  }
]

const getNotaDoAluno = aluno => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

console.log(escola.map(getNotasDaTurma))

console.log(escola.flatMap(getNotasDaTurma))