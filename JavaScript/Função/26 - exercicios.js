//Exercício 01
console.log('Exercício 01');
(function() {
  const a = 10
  const b = 2
  const calculos = (a, b) => {console.log(a + b, a - b, a * b, a / b)}
  calculos(a, b)
})();

//Exercício 02
console.log('\nExercício 02');
(function() {
  const a = 5
  const b = 5
  const c = 5
  const tipoTriangulo = (a, b, c) => { 
    if(a == b &&  b == c) 
      console.log("Equilátero") 
    else if(a == b || b == c || c == a)
      console.log("Isósceles")
    else console.log("Escaleno")}

  tipoTriangulo(a, b, c)
})();

//Exercício 03
console.log('\nExercício 03');
(function() {
  const a = 2
  const b = 4
  const potenciacao = (a, b) => {console.log(Math.pow(a, b))}
  potenciacao(a, b)
})();

//Exercício 04
console.log('\nExercício 04');
(function() {
  const a = 10
  const b = 3
  const divisao = (a, b) => {console.log(`O resultado da divisão é = ${a / b}\nO resto da divisão é = ${a % b}`)}
  divisao(a, b)
})()

//Exercício 05
console.log('\nExercício 05');
(function() {
  const valorFlutuante = 0.3000000000000000004

  const trocaPontoVirgula = (a) => a.replace('.', ',')
  const formataEmReal = (a) => {console.log(`R$${trocaPontoVirgula(valorFlutuante.toFixed(2))}`)}
  formataEmReal(valorFlutuante)
})();

//Exercício 35
console.log('\nExercício 35');
(function() {
  const vetorPilha = [1, 2, 3, 4, 5]
  const vetorAdiciona = [6, 7, 8, 9, 10]

  const adicionaPilha = (vetorPilha, vetorAdiciona) => {
    vetorAdiciona.forEach((valor) => {
      vetorPilha.push(valor)
    })
    return vetorPilha
  }

  console.log(adicionaPilha(vetorPilha, vetorAdiciona))
})()

//Exercício 36
console.log('\nExercício 36');
(function() {
  const numeros = [3, 5, 2, 18, 20, 4]
  const multiplo = 2
  const multiplicaValores = (numeros, multiplo) => {
    numeros.forEach((valor) => console.log(`O valor dobrado é ${valor * multiplo}`))
  }
  const multiplicaValoresMaiores5 = (numeros, multiplo) => {
    numeros.forEach((valor) => { if(valor > 5) console.log(`O valor dobrado é ${valor * multiplo}`) })
  }
  multiplicaValores(numeros, multiplo)
  multiplicaValoresMaiores5(numeros, multiplo)
})();

//Exercício 37
console.log('\nExercício 37');
(function() {
  const nums = 5
  const inicio = 3
  const razao = 3
  const prog = (numTermo, a1, r, tipo = "PA") => {
    const prog = []
    let soma = 0
    for(let i = 0; i < numTermo; i++) {
      prog.push(a1)
      soma += a1
      if(tipo === "PA")
        a1 += r
      else a1 *= r
    }
    console.log(`A progressão ${tipo === "PA" ? "aritmética" : "geométrica"} é = ${prog}\nA soma desses valores é = ${soma}`)
  }
  prog(nums, inicio, razao, "PA")
  prog(nums, inicio, razao, "PG")
})()

//Exercício 38
console.log('\nExercício 38');
(function() {
  const minimo = 0;
  const maximo = 100;
  const impares = (min = 0, max = 100) => {
    if(min > max)
      [min, max] = [max, min]
    const impares = []
    for(min ; min <= max; min++ ) {
      if(min % 2 != 0)
        impares.push(min)
    }
    console.log(impares)
  }
  impares()
})();

//Exercício 39
console.log('\nExercício 39');
(function() {
  const vetorA = [1,2,3,4,5,6,7,8,9]
  const vetorB = [9,8,7,6,5,4,3,2,1]
  const trocaValores = (array1, array2) => {
    [array1, array2] = [array2, array1] 
    console.log(array1, array2)
  }
  trocaValores(vetorA, vetorB)
})();

//Exercício 40
console.log('\nExercício 40');
(function() {
  const notas = [1.7, 6.6, 7.3, 9.9]
  const conceitoNota = nota => nota.forEach((valor) => {
    if (valor >= 9)
      return console.log("A")
    else if(valor >= 7)
      return console.log("B")
    else if(valor >= 5)
      return console.log("C")
    else return console.log("D") })

  conceitoNota(notas)
})();