let num1 = 1
let num2 = 2

num1++
console.log(num1)

--num1 // Forma com alta prioridade, operador precedendo variável tem prioridade por
//operador posterior a variável
console.log(num1)

console.log(++num1 === num2--) // Verdadeiro pois a incrementação no número 1 será
//executada antes da validação e a decrementação de num2 só será executada após a
//validação
console.log(num1 === num2) // Falso pois os valores já se encontram diferentes