const peso1 = 1.0
const peso2 = Number('2.5')

console.log(peso1, peso2)

//Number é uma função que possui algumas funcionalidades

console.log(typeof Number) 
console.log(Number.isInteger(peso1)) // Verifica se o número informado é um inteiro.
console.log(Number.isInteger(peso2)) 

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

//Algumas funcionalidades do tipo númerico

console.log(media.toString())  //Exibe o valor em string
console.log(media.toFixed(2))  //Crava a quantidade de casas decimais
console.log(media.toString(2)) //Exibe o resultado em binário
console.log(typeof media)