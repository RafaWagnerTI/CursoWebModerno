console.log(typeof Object) //É uma function

class Produto {}

console.log(typeof Produto) //Uma classe também é uma function

//Function sem retorno
function imprimirSoma(a, b) {
  console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma(2) // vai passar o segundo valor como undefined e o resultado sera NaN

imprimirSoma(2, 3, 4, 5, 6, 7, 8, 9) // vai ignorar os valores após o 3
imprimirSoma() // os valores serão undefined

//function com retorno
function soma(a = 0, b = 0) { //tratativa para que o valor seja zero caso não o receba
  return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma())

//Armazenando uma function em uma variável
const imprimirSoma2 = function(a, b) { //Function anônima
  console.log(a + b)
}

imprimirSoma2(2, 3)


//Armazenando uma função arrow em uma variável
const soma2 = (a, b) => {
  return a + b;
}

console.log(soma2(2, 3))

//retorno implícito -> possível ser realizado quando a function só executa uma única sentença
// de código.
const subtracao = (a, b) => a - b 
console.log(subtracao(2, 3))

// Caso a sua função tenha um único parâmetro é possível reduzir
// ainda mais removendo os parenteses
const imprimir = a => console.log(a)

imprimir("Teste");