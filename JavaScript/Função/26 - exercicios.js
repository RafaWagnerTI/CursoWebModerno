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

//Exercício 06
console.log('\nExercício 06');
(function() {
  const capitalInicial = 10000
  const taxaPercentual = 0.1
  const tempoEmAnos = 3
  const calculaJurosSimples = (capital, taxa ,tempo) => console.log(`R$ ${(capital*taxa*tempo).toFixed(2)}`);
  const calculaJurosComposto = (capital, taxa, tempo) => { 
    const montante = capital * (Math.pow(1+taxa, tempo))
    console.log(`R$ ${(montante - capital).toFixed(2)}`)
  }
  calculaJurosSimples(capitalInicial, taxaPercentual, tempoEmAnos)
  calculaJurosComposto(capitalInicial, taxaPercentual, tempoEmAnos)
})()

//Exercício 07
console.log('\nExercício 07');
(function() {
  const calculaDelta = (a, b, c) => {
    const delta = Math.pow(b, 2) - 4 * a * c
    return delta
  }
  const calculaX = (a, b, c) => {
    const delta = calculaDelta(a, b, c)
    if(delta >= 0) {
      const x = [
        x1 = ((-b + Math.sqrt(delta)) / (2 * a)), 
        x2 = ((-b - Math.sqrt(delta)) / (2 * a))
      ]
      return x
    }
    else throw Error("delta é negativo!")
  }

  const calculaBhaskara = (a, b, c) => {
    calculaX(a, b, c).forEach((valor) => console.log(`O resultado é ${(Math.pow(a * valor,2)) + (b * valor) + c }`))
  }
  calculaBhaskara(1, 8, -9)
})()

//Exercício 08
console.log('\nExercício 08');
(function() {
  const jogos = []
  let posPiorJogo = 0
  let piorJogo = 999999999999
  let recorde = 0
  let recordeBatido = 0
  const adicionarJogo = (jogos, pontuacao) => { 
    jogos.push(pontuacao); return jogos.forEach(
      (valor, indice) => { 
        if(valor < piorJogo) {
          piorJogo = valor
          posPiorJogo = indice+1
        }
        if(indice > 0) 
          if(valor > recorde) {
            recorde = valor
            recordeBatido++    
          }
      }) 
  }
  
  adicionarJogo(jogos, 10)
  adicionarJogo(jogos, 20)
  adicionarJogo(jogos, 30)
  adicionarJogo(jogos, 30)
  adicionarJogo(jogos, 4)
  console.log(`Pedro bateu seu recorde ${recordeBatido} vezes.\nSeu pior jogo foi o ${posPiorJogo}º`)
})()

//Exercício 09
console.log('\nExercício 09');
(function() {
  const notas = [73, 67, 38, 33]
  const notasArredondadas = notas.map((valor, indice) => 
    ((Math.ceil(valor/5)*5) - valor) <= 2 && valor >= 38 ? (Math.ceil(valor/5)*5) : valor)
  
  notasArredondadas.forEach((valor) => 
    valor < 40 ? console.log(`Reprovado, sua nota foi ${valor}`) : console.log(`Aprovado, sua nota foi ${valor}`))
})()

//Exercício 10
console.log('\nExercício 10');
(function() {
  const validaDivisivelPor3 = (valor) => valor % 3 === 0
  console.log(validaDivisivelPor3(30)) 
})()

//Exercício 30
console.log('\nExercício 30');
(function() {
  const arrayNumeros = [6, 0, -2, 14, 9, 10, -8]
  let minimo = 9999999
  let maximo = 0
  arrayNumeros.forEach((valor) => {if(valor < minimo) minimo = valor; if(valor > maximo) maximo = valor})
  console.log(`O menor valor é ${minimo}\nO maior valor é ${maximo}`)
})()

//Exercício 31
console.log('\nExercício 31');
(function() {
  const numerosNegativos = [8, -7, 3, -1, 0, -4, 6]
  console.log(numerosNegativos.filter((valor) => valor < 0))
})()

//Exercício 32
console.log('\nExercício 32');
(function() {
  const numerosInteiros = [10, 5, 3, 1, 7, 9]
  let soma = 0
  numerosInteiros.forEach((valor) => {soma += valor})
  console.log(`A média dos valores é ${(soma/numerosInteiros.length).toFixed(2)}`)
})()

//Exercício 33
console.log('\nExercício 33');
(function() {
  const arrayInteiro = [0, 1, 2, 3]
  const arrayString = ["a", "B", "c", "D"]
  const arrayDouble = [0.5, 1.3, 2.7, 3.6]

  console.log([].concat(arrayInteiro, arrayString, arrayDouble))
  console.log(arrayInteiro.concat(arrayString).concat(arrayDouble))

})()

//Exercício 34
console.log('\nExercício 34');
(function() {
  const palavra1 = "BaNaNa"
  const palavra2 = "bAn"
  let saida = ""
  const validaCaracteres = (palavra1, palavra2) => { 
    if(palavra2.length > palavra1.length)
      [palavra2, palavra1] = [palavra1, palavra2]
    for(let i = 0; i < palavra2.length; i++) {
      const letra = palavra2.toLowerCase().charAt(i)
      for(let j = 0; j < palavra1.length; j++) {
        if(letra === palavra1.toLowerCase().charAt(j)) {
          saida += letra
          break;
        }
      }
    }
    console.log(saida === palavra2.toLowerCase())
  }
  validaCaracteres(palavra1, palavra2)
})()

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
    console.log(new Array(numTermo)
      //preenche o array com os valores do map
      .fill()
      //mapeia os elementos do array definindo novos valores de acordo com o tipo de progressão
      .map((d, i) =>  i === 0 ? a1 : tipo === "PA" ? a1 += r : a1 *= r ))
  }
  prog(nums, inicio, razao, "PA")
  prog(nums, inicio, razao, "PG")
})()

//Exercício 38
console.log('\nExercício 38');
(function() {
  const min = 0;
  const max = 100;
  const impares = (min = 0, max = 100) => {
    if(min > max)
      [min, max] = [max, min]
    //Cria um array com espaço suficiente para caber todos os números entre maior e menor
    return console.log(new Array(max - min)
      //preenche o array de acordo com valores informados pelo map
      .fill()
      //mapeia os elementos do array somando o indice dos elementos com o valor mínimo
      .map((d, i) => i + min )
      //filtra os elementos presentes no array
      .filter((valor) => valor % 2 != 0));
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