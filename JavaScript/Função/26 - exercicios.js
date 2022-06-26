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
    else throw new Error("delta é negativo!")
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

//Exercício 11
console.log('\nExercício 11');
(function() {
  const validaAnoBissexto = (valor) => valor % 4 === 0 && valor % 100 !== 0 
  console.log(validaAnoBissexto(2024))
})()

//Exercício 12
console.log('\nExercício 12');
(function() {
  const fatoraValor = (valor) => {
    fator = valor; 
    while(fator > 1) { 
      valor *= --fator 
    }; 
    return valor }
  console.log(fatoraValor(7))
})()

//Exercício 13
console.log('\nExercício 13');
(function() {
  const validaDiaSemana = (dia) => {
    let diaSemana = ""
    switch (dia) {
      case 1 : diaSemana = "Domingo"; break;
      case 2 : diaSemana = "Segunda-Feira"; break;
      case 3 : diaSemana = "Terça-Feira"; break;
      case 4 : diaSemana = "Quarta-Feira"; break;
      case 5 : diaSemana = "Quinta-Feira"; break;
      case 6 : diaSemana = "Sexta-Feira"; break;
      case 7 : diaSemana = "Sábado"; break;
      default: diaSemana = "Dia inválido"; break;
    }
    console.log(diaSemana)
  }
  validaDiaSemana(6)
})()

//Exercício 14
console.log('\nExercício 14');
(function() {
  const compraFruta = (fruta) => {
    let resposta = ""
    switch (fruta.toLowerCase()) {
      case "maçã" : resposta = "Não vendemos esta fruta aqui"; break;
      case "kiwi" : resposta = "Estamos com escassez de kiwis"; break;
      case "melancia" : resposta = "Aqui está, são 3 reais o quilo"; break;
      default: throw new Error("Não conhecemos essa fruta");  
    }
    console.log(resposta)
  }
compraFruta("MaÇã")
compraFruta("kIwI")
compraFruta("MeLaNcIa")
})()

//Exercício 15
console.log('\nExercício 15');
(function() {
  const validaModelo = (modelo) => {
    let resposta = ""
    switch (modelo.toLowerCase()) {
      case "hatch" : resposta = "Compra efetuada com sucesso"; break;
      case "caminhonete": resposta = "Tem certeza que prefere este modelo?"; break;
      case "sedan" : resposta = "Tem certeza que prefere este modelo?"; break;
      case "motocicleta" : resposta = "Tem certeza que prefere este modelo?"; break;
      default: resposta = "Não trabalhamos com esse modelo!";
    }
    console.log(resposta)
  }
  validaModelo("hatch")
  validaModelo("caminhonete")
  validaModelo("sedan")
  validaModelo("motocicleta")
  validaModelo("iate")
})()

//Exercício 16
console.log('\nExercício 16');
(function() {
  const calculadora = (num1, operador, num2) => {
    let resultado = 0 
    switch (operador) {
      case "+" : resultado = num1 + num2; break;
      case "-" : resultado = num1 - num2; break;
      case "*" : resultado = num1 * num2; break;
      case "/" : resultado = num1 / num2; break;
      default: resultado = "Operação inválida!"; break;
    }
    console.log( typeof resultado === Number ? resultado.toFixed(2) : resultado)
  }
  calculadora(8, "+", 6)
  calculadora(8, "-", 6)
  calculadora(8, "*", 6)
  calculadora(8, "/", 6)
  calculadora(8, "%", 6)
})()

//Exercício 17
console.log('\nExercício 17');
(function() {
  const aumentoSalarial = (salarioAtual, plano) => {
    switch(plano) {
      case "A": salarioAtual = salarioAtual + (salarioAtual * 0.1) ; break;
      case "B": salarioAtual = salarioAtual + (salarioAtual * 0.15); break;
      case "C": salarioAtual = salarioAtual + (salarioAtual * 0.2); break;
      default: salarioAtual = 0
    }
    console.log(salarioAtual = 0 ? "Plano é inválido" : `O novo salário é de ${salarioAtual.toFixed(2)}R$`);
  }
  aumentoSalarial(2000, "A")
  aumentoSalarial(2000, "B")
  aumentoSalarial(2000, "C")
  aumentoSalarial(2000, "D")
})()

//Exercício 18
console.log('\nExercício 18');
(function() {
  const lePorExtenso = (numero) => {
    let resultado = ""
    switch(numero) {
      case 0: resultado = "Zero"; break;
      case 1: resultado = "Um"; break;
      case 2: resultado = "Dois"; break;
      case 3: resultado = "Três"; break;
      case 4: resultado = "Quatro"; break;
      case 5: resultado = "Cinco"; break;
      case 6: resultado = "Seis"; break;
      case 7: resultado = "Sete"; break;
      case 8: resultado = "Oito"; break;
      case 9: resultado = "Nove"; break;
      case 10: resultado = "Dez"; break;
      default: resultado = "Número fora do intervalo";
    }
    console.log(resultado)
  }
  lePorExtenso(7)
  lePorExtenso(11)
})()

//Exercício 19
console.log('\nExercício 19');
(function() {
  const comprarProduto = (codProduto, qtde) => {
    let resultado = 0
    switch (codProduto) {
      case 100: resultado = `O total da compra foi de ${(3 * qtde).toFixed(2)}R$` ; break;
      case 200: resultado = `O total da compra foi de ${(4 * qtde).toFixed(2)}R$`; break; 
      case 300: resultado = `O total da compra foi de ${(5.5 * qtde).toFixed(2)}R$` ; break; 
      case 400: resultado = `O total da compra foi de ${(7.5 * qtde).toFixed(2)}R$` ; break; 
      case 500: resultado = `O total da compra foi de ${(3.5 * qtde).toFixed(2)}R$` ; break; 
      case 600: resultado = `O total da compra foi de ${(2.8 * qtde).toFixed(2)}R$` ; break; 
      default: resultado = "Produto inexistente!";
    }
    console.log(resultado)
  }
  comprarProduto(100, 5)
  comprarProduto(111, 5)
})()

//Exercício 20
console.log('\nExercício 20');
(function() {
  const cedulasPossiveis = [100, 50, 20, 10, 5, 1]

  const contaCedulas = (precoProduto) => {
    const cedulasUsadas = [0, 0, 0, 0, 0, 0]
    cedulasPossiveis.forEach((valor, indice) => {
      if(precoProduto >= valor) {
        while(precoProduto >= valor) {
          precoProduto -= valor
          cedulasUsadas[indice] += 1
        }
      }
    })
    cedulasUsadas.forEach((valor, indice) => {
      let tipoCedula = ""
      switch (indice) {
        case 0: tipoCedula = "100"; break;
        case 1: tipoCedula = "50"; break;
        case 2: tipoCedula = "20"; break;
        case 3: tipoCedula = "10"; break;
        case 4: tipoCedula = "5"; break;
        default: tipoCedula = "1"
      }
      if(valor > 0) {
        console.log(`Usou ${valor} cédula(s) de ${tipoCedula}`)
      }
    })
  }
  contaCedulas(396)
})()

//Exercício 21
console.log('\nExercício 21');
(function() {
  const idade = 78
  const valorPlanoSaude = idade => {
    let valorPlano = 100
    if(idade > 60) {
      valorPlano += 130
    }else if(idade > 30) {
      valorPlano += 95
    }else if(idade > 10) {
      valorPlano += 50
    }else
      valorPlano +=80
    return console.log(`Valor total do plano ${valorPlano}R$`)
  }
  valorPlanoSaude(idade)
})() 

//Exercício 22
console.log('\nExercício 22');
(function() {
  const valorAnuidade = 500
  const calculaJurosComposto = (capital, taxa, tempo) => { 
    const montante = capital * (Math.pow(1+taxa, tempo-1))
    return (montante - capital)
  }
  const calcAnuidade = (valorAnuidade, mesPagamento) => {
    valorAnuidade  += calculaJurosComposto(valorAnuidade, 5, mesPagamento)
    console.log(`Pagando no mês ${mesPagamento} o valor da anuidade é de ${valorAnuidade}R$`)
  }
  calcAnuidade(valorAnuidade, 1)
})()

console.log('\nExercício 23');
(function() {
  const aluno = {codigo: 200, notas:[7, 3, 1], pesoNota:[4, 3, 3]}
  const calcMediaPonderada = (aluno) => {
    let somaNotas = 0;
    let pesoNotas = 0;
    aluno.notas.forEach((valor, indice) => {
      somaNotas += valor * aluno.pesoNota[indice]
      pesoNotas += aluno.pesoNota[indice]
    })
    if((somaNotas / pesoNotas) > 5)
      console.log('APROVADO!')
    else console.log('REPROVADO!')
  }
  calcMediaPonderada(aluno)
})()

//Exercício 24
console.log('\nExercício 24');
(function() {
  const repeteHelloWorld = () => {
    let repeticao = 1
    while(repeticao <= 11) {
      console.log("HelloWorld")
      repeticao++
    }
  }
  repeteHelloWorld()
})()

//Exercício 25
console.log('\nExercício 25');
(function() {
  for(let i = 1; i <= 50; i++) {
    console.log(`Repetição numero ${i}`)
  }
})()

//Exercício 26
console.log('\nExercício 26');
(function() {
  const pares = () => {
    return console.log(new Array(101)
      .fill()
      .map((d, i) => i + 0 )
      .filter((valor) => valor % 2 === 0));
  }
  pares()
})()

//Exercício 27
console.log('\nExercício 27');
(function() {
  const crianca1 = {altura: 44, taxaCrescimentoAnual:3}
  const crianca2 = {altura: 40, taxaCrescimentoAnual:5}
  const comparaAltura = (crianca1, crianca2) => {
    let criancaMenor = false
    let criancaMaior = false
    let anosCrescimento = 0
    if(crianca1.altura > crianca2.altura) {
      criancaMaior = crianca1
      criancaMenor = crianca2
    }
    else if(crianca2.altura > crianca1.altura) {
      criancaMaior = crianca2
      criancaMenor = crianca1
    }

    if(criancaMenor && criancaMenor.taxaCrescimentoAnual > criancaMaior.taxaCrescimentoAnual) {
      while(criancaMaior.altura > criancaMenor.altura) {
        anosCrescimento++
        criancaMenor.altura += criancaMenor.taxaCrescimentoAnual
        criancaMaior.altura += criancaMaior.taxaCrescimentoAnual
      }
      return console.log(`A criança menor irá passar a altura da maior em ${anosCrescimento} anos`);
    } 
  }
  comparaAltura(crianca1, crianca2)
})()

//Exercício 28
console.log('\nExercício 28');
(function() {
  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let impares = 0
  let pares = 0
  numeros.forEach((valor) => {
    if(valor % 2 == 0) {
      pares++
    } else impares++
  })
  console.log(`Total de Pares: ${pares}\nTotal de Impares: ${impares}`)
})()

//Exercício 29
console.log('\nExercício 29');
(function(){
  const numeros = [5, 12, 7, 10, 2, 9, 21, 20, 8, 14, 11]
  let numerosDentroIntervalo = 0
  let numerosForaIntervalo = 0
  numeros.forEach((valor) => {
    let encontrou = false;
    for(let i = 10; i <= 20; i++) {
      if(valor === i) {
        encontrou = true
        numerosDentroIntervalo++
      }
    }
    if(!encontrou)
      numerosForaIntervalo++
  })
  console.log(`Numeros fora do intervalo: ${numerosForaIntervalo}\nNumeros dentro do intervalo: ${numerosDentroIntervalo}`)
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
  const palavra1 = "mar"
  const palavra2 = "Ram"
  let saida = ""
  const validaCaracteres = (palavra1, palavra2) => { 
    if(palavra2.length > palavra1.length)
      [palavra2, palavra1] = [palavra1, palavra2]
    const arrayPalavra1 = [...palavra1.toLowerCase()]
    const arrayPalavra2 = [...palavra2.toLowerCase()]
    let saida = ""
    
    arrayPalavra2.forEach((letra, indice) => { 
      arrayPalavra1.forEach(
        (valor) => {
          if(letra === valor && saida.length < indice+1) 
            saida += letra
        })
      }
    )
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