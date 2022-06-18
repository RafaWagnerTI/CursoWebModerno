const [a, b, c, d] = [3, 5, 1, 15]

// A apicação dos operadores aritméticos atua sempre de maneira binária, ou seja,
//faz o calculo entre dois valores por vez.
const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

// A utilização de "-" antes da variável divisão é um operador Unário que transforma
//o resultado em negativo
console.log(soma, subtracao, multiplicacao, -divisao, modulo)