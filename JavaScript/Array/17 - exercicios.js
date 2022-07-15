//Exercício 01
console.log('\nExercício 01');
(function() {
  const cumprimentar = nome => `Olá ${nome}!`
  console.log(cumprimentar("Rafa"));
})()

//Exercício 02
console.log('\nExercício 02');
(function() {
  const calcularDias = anos => `Uma pessoa com ${anos} anos viveu no mínimo ${anos * 365} dias`
  console.log(calcularDias(21))
})()

//Exercício 03
console.log('\nExercício 03');
(function() {
  const calcularSalario = (qtdHoras, valorHora) => qtdHoras * valorHora
  console.log(`R$ ${calcularSalario(150, 40.5).toFixed(2)}`)
})()

//Exercício 04
console.log('\nExercício 04');
(function() {
  const nomeDoMes = mes => {
    let mesEscrito;
    switch(mes) {
      case 1:  mesEscrito = "Janeiro";   break;
      case 2:  mesEscrito = "Fevereiro"; break;
      case 3:  mesEscrito = "Março";     break;
      case 4:  mesEscrito = "Abril";     break;
      case 5:  mesEscrito = "Maio";      break;
      case 6:  mesEscrito = "Junho";     break;
      case 7:  mesEscrito = "Julho";     break;
      case 8:  mesEscrito = "Agosto";    break;
      case 9:  mesEscrito = "Setembro";  break;
      case 10: mesEscrito = "Outubro";   break;
      case 11: mesEscrito = "Novembro";  break;
      case 12: mesEscrito = "Dezembro";  break;
      default: mesEscrito = "Mês inexistente";
    }
    console.log(mesEscrito);
  }
  nomeDoMes(1)
  nomeDoMes(4)
})()

//Exercício 05
console.log('\nExercício 05');
(function() {
  const maiorOuIgual = (primeiro, segundo) => console.log(primeiro >= segundo && 
    typeof primeiro === typeof segundo);
  maiorOuIgual(0, 0)    //retornará true
  maiorOuIgual(0, "0")  //retornará false
  maiorOuIgual(5, 1)    //retornará true
})()

//Exercício 06
console.log('\nExercíco 06');
(function() {
  const inverso = valor => {
    switch(typeof valor) {
      case typeof false: valor = !valor; break;
      case typeof 0: valor = valor * -1; break;
      default: valor =  `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
      
    console.log(valor)
  }
  inverso(true)
  inverso("6")
  inverso(-2000)
  inverso("programação")
})()

//Exercício 07
console.log('\nExercício 07');
(function() {
  const estaEntre = (numero, minimo, maximo, inclusivo = false) => {

    if(minimo > maximo)
     [minimo, maximo] = [maximo, minimo] 

    if(inclusivo) 
      return console.log(numero >= minimo && numero <= maximo)
    return console.log(numero > minimo && numero < maximo)
  }

  estaEntre(10, 100, 50) // retornará false
  estaEntre(16, 100, 160) // retornará false
  estaEntre(3, 150, 3) // retornará false
  estaEntre(3, 150, 3, true) // retornará true

})()

//Exercício 08
console.log('\nExercício 08');
(function() {
  const multiplicar = (valor1, valor2) => {
    if(valor1 < 0 || valor2 < 0)
      return console.log('Os valores precisam ser maiores que 0')

    console.log('O resultado é: ' + valor1 * valor2)
  }

  multiplicar(-1, 6)
  multiplicar(2, 2)
  multiplicar(0, 5)
})()

//Exercício 09
console.log('\nExercício 09');
(function() {
  const repetir = (valor, repeticoes) => {
    return console.log(
      new Array(repeticoes)
        .fill()
        .map((e, i) => e = valor))
  }
  repetir("codigo", 2)
  repetir(7, 3)
})()

//Exercício 10
console.log('\nExercício 10');
(function() {
  const simboloMais = qtdMais => {
    let simbolos = ""
    while(qtdMais-- > 0) {
      simbolos += "+"
    }
    console.log(simbolos)
  }
  simboloMais(2)
  simboloMais(4)
})()

//Exercício 11
console.log('\nExercício 11');
(function() {
  const receberPrimeiroEUltimoElemento = array => {
     console.log(new Array(array[0], array[array.length-1]))
  }
  receberPrimeiroEUltimoElemento([5,6,7])
})()

//Exercício 12
console.log('\nExercício 12');
(function() {
  const removerPropriedade = (objeto, atributo) => {
    const newObj = objeto;
    delete newObj[atributo]
    console.log(newObj)
    console.log(Object.is(newObj, objeto))
  }
  removerPropriedade({a: 1, b: 2}, "a")
})()

//Exercício 13
console.log('\nExercício 13');
(function() {
  const filtrarNumeros = array => {
    console.log(array.filter((valor) => typeof(valor) === 'number'))
  }
  filtrarNumeros([5, "3", "a", 7, "abc"])
})()

//Exercício 14
console.log('\nExercício 14');
(function() {
  const objetoParaArray = objeto => {
    let array = []
    for(let key in objeto) 
      if(objeto.hasOwnProperty(key))
        array.push([key, objeto[key]]);
  console.log(array)
}
  objetoParaArray({ 
    nome: "Maria", 
    profissao: "Desenvolvedora de Software"
  })

  objetoParaArray({
    codigo: 11111,
    preco: 12000
  }) 
})()

//Exercício 15
console.log('\nExercício 15');
(function() {
  const receberSomenteDeIndicesPares = array => {
    console.log(array.filter((value, indice) => value % 2 === 0 && indice % 2 === 0))
  } 
  receberSomenteDeIndicesPares([1, 2, 3, 4])
  receberSomenteDeIndicesPares([10, 70, 22, 43])
})()

//Exercício 16
console.log('\nExercício 16');
(function() {
  const validaAnoBissexto = (valor) => valor % 4 === 0 && valor % 100 !== 0 
  console.log(validaAnoBissexto(2020))
  console.log(validaAnoBissexto(2100))
})()

//Exercício 17
console.log('\nExercício 17');
(function() {
  const somarNumeros = array => {
    console.log(array.reduce((acumulador, atual) => acumulador + atual))
  }
  somarNumeros([10, 10, 10])
  somarNumeros([15, 15, 15, 15])
})()

//Exercício 18
console.log('\nExercício 18');
(function() {
  const despesasTotais = array => {
    let totalDespesas = 0;
    array.forEach(value => { totalDespesas += value.preco})
    console.log(totalDespesas);
  }
  despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
  ])
  despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]) 
})()

//Exercício 19
console.log('\nExercício 19');
(function() {
  const calcularMedia = array => {
    let media = 0;
    array.forEach(value => { media += value})
    console.log(media / array.length);
  }
  calcularMedia([0, 10])
  calcularMedia([1, 2, 3, 4, 5])
})()

//Exercício 20
console.log('\nExercício 20');
(function() {
  const calculaArea = (base, altura) => {
    console.log(((base*altura)/2).toFixed(2))
  }
  calculaArea(10, 15)
  calculaArea(7, 9)
  calculaArea(9.25, 13.1)
})()

//Exercício 21
console.log('\nExercício 21');
(function() {
  const menorNumero = array => {
    let numero = Number.MAX_VALUE
    array.forEach(value => {
      if(numero > value) 
        numero = value
    })
    console.log(numero)
  }
  menorNumero([10, 5, 35, 65])
  menorNumero([5, -15, 50, 3]) 
})()

//Exercício 22
console.log('\nExercício 22');
(function() {
  const funcaoDaSorte = escolha => {
      let numeroSorteado = Math.floor(Math.random() * (10 - 1 + 1) + 1)
      if(numeroSorteado === escolha) 
        return console.log('Parabéns, o número sorteado foi ' + numeroSorteado)
      console.log('Que pena! O número sorteado foi ' + numeroSorteado)
  }
  funcaoDaSorte(10)
  funcaoDaSorte(5)
  funcaoDaSorte(5)
})()

//Exercício 23
console.log('\nExercício 23');
(function() {
  const contarPalavras = frase => {
    let palavras = frase.split(' ')
    console.log(palavras.length)
  }
  contarPalavras("Sou uma frase")
  contarPalavras("Me divirto aprendendo a programar")
})()

//Exercício 24
console.log('\nExercício 24');
(function() {
  const contarCaracteres = (caracter, palavra) => {
    let repeticoes = 0
    const arrayPalavra = [...palavra]
    arrayPalavra.forEach(value => { if(value === caracter) repeticoes++ })
    console.log(repeticoes)
  }
  contarCaracteres("r", "A sorte favorece os audazes")
  contarCaracteres("c", "Conhece-te a ti mesmo")
})()

//Exercício 25
console.log('\nExercício 25');
(function() {
  const buscarPalavrasSemelhantes = (palavra, array) => {
    console.log(array.filter(value => value.includes(palavra)));
  }

  buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]) // retornará ["programação", "profissional"]
  buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]) // retornará []
})()

//Exercício 26
console.log('\nExercício 26');
(function () {
  const removerVogais = palavra => {
    let novaPalavra = ""
    const arrayPalavra = [...palavra]
    arrayPalavra.forEach(value => {
      if(value.toLowerCase() !== 'a' &&
         value.toLowerCase() !== 'e' &&
         value.toLowerCase() !== 'i' &&
         value.toLowerCase() !== 'o' &&
         value.toLowerCase() !== 'u')
        novaPalavra += value})
    console.log(novaPalavra)
  }
  removerVogais("Cod3r")
  removerVogais("Fundamentos")
})()

//Exercício 27
console.log('\nExercício 27');
(function() {
  const filtrarPorQuantidadeDeDigitos = (array, casas) => {
    let validos = [];
    array.forEach(value => {
      if(value.toString().length == casas)
        validos.push(value)
    })
    console.log(validos)
  }
  filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2)
  filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)
})()

//Exercício 28
console.log('\nExercício 28');
(function() {
  const inverter = obj => {
    const novoObj = {}
    for(key in obj) {
      novoObj[obj[key]] = key
    }
    console.log(novoObj)
  }

  inverter({ a: 1, b: 2, c: 3}) 
})()

//Exercício 29
console.log('\nExercício 29');
(function() {
  const segundoMaior = array => {
    let segundoMaior = 0;
    array.forEach(value => { 
      array.forEach(value2 => {
        if(value2 > value && segundoMaior < value) {
          segundoMaior = value
        }
      })
    })
    console.log(segundoMaior)
  }
  segundoMaior([12, 16, 1, 5])
  segundoMaior([8, 4, 5, 6])
})()

//Exercício 30
console.log('\nExercício 30');
(function() {
  const recerberMelhorEstudante = alunos => {
    let total, media;
    let maiorMedia = 0;
    let alunoMaiorMedia;
    for(key in alunos) {
      total = 0;
      alunos[key].forEach(value => total += value)
      media = (total/alunos[key].length)
      if(media > maiorMedia) {
        alunoMaiorMedia = {}
        maiorMedia = media
        alunoMaiorMedia[key] = media
      }
    }
    console.log(alunoMaiorMedia)
  }
  recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }) 
})()