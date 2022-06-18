function soBoaNoticia(nota) {
  if(nota>=7) 
    console.log('Aprovado com ' + nota )
}

function seForVerdadeEuFalo(valor) {
  if(valor) {
    console.log('É verdade...' + valor)
  }
}

soBoaNoticia(7.1)
soBoaNoticia(6.1)
seForVerdadeEuFalo()
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo('?')
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})