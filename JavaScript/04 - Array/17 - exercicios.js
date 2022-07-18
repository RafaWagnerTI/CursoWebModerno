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
  const calcularSalario = (qtdHoras, valorHora) => (qtdHoras * valorHora) - ((qtdHoras * valorHora) * 0.3)
  console.log(`R$ ${calcularSalario(180, 60).toFixed(2)}`)
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
    const tipo = typeof valor
    if (tipo == "boolean") return !valor
    else if (tipo == "number") return -valor
    else
    return `booleano ou  número esperados, mas o parâmetro é do tipo ${tipo}`
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
  const multiplicar = (numeroA, numeroB) => {
    let resultado = 0
    /* a otimização feita para diminuir a quantidade de chamadas recursivas pode ser
      realizada aqui para diminuir a quantidade de loops */
    for(let i = 0; i < numeroB; i++)
      resultado += numeroA
    return console.log(resultado)

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
      Array(repeticoes).fill(valor))
  }
  repetir("codigo", 2)
  repetir(7, 3)
})()

//Exercício 10
console.log('\nExercício 10');
(function() {
  const simboloMais = qtdMais => {
    return console.log("+".repeat(qtdMais))
  }
  simboloMais(2)
  simboloMais(4)
})()

//Exercício 11
console.log('\nExercício 11');
(function() {
  const receberPrimeiroEUltimoElemento = ([primeiroElemento, ...elementosRestantes]) => {
    const ultimoElemento = elementosRestantes.pop()
    return console.log([primeiroElemento, ultimoElemento]);
  }
  receberPrimeiroEUltimoElemento([7,14,"olá"])
 }
 )()

//Exercício 12
console.log('\nExercício 12');
(function() {
  const removerPropriedade = (objeto, atributo) => {
    const copia = Object.assign({}, objeto)
    delete copia[atributo]
    return console.log(copia)
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
    return console.log(Object.entries(objeto))

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
    console.log(array.reduce((acumulador, valorAtual) => acumulador + valorAtual.preco, 0));
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
    console.log(Math.min(...array));
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
  const contarCaracteres = (caractereBuscado, palavra) => {
    console.log([...palavra].filter(caractere => caractere === caractereBuscado).length);
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
    return console.log(palavra.replace(/[aeiou]/ig, ''));

  }
  removerVogais("Cod3r")
  removerVogais("Fundamentos")
})()

//Exercício 27
console.log('\nExercício 27');
(function() {
  const filtrarPorQuantidadeDeDigitos = (array, casas) => {
    console.log(array.filter(numero => {
      const quantidadeDeDigitos = String(numero).length
      return quantidadeDeDigitos === casas
    }));  
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
    const maiorNumero = Math.max(...array)
    numeros = array.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)
    return console.log(segundoMaior)
  }
  segundoMaior([12, 16, 1, 5])
  segundoMaior([8, 4, 5, 6])
})()

//Exercício 30
console.log('\nExercício 30');
(function() {
  const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
  const media = array => soma(array) / array.length

  function recerberMelhorEstudante(estudantes) {
    const estudantesComMedias = Object.entries(estudantes).map( estudante => {
    const chave = 0,
    valor = 1
    return { nome: estudante[chave], media: media(estudante[valor]) }
    })
    const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
    const melhorEstudante = estudantesOrdenados[0]
    return console.log(melhorEstudante)
  }

  recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
    }) 
})()