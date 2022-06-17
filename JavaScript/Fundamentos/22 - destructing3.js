/*
 *  Cria uma function que recebe um objeto como parâmetro com dois atributos min e max,  
 * esses atributos tem valores padrão de 0 e 1000 e são desconstruídos em duas variáveis
 * de mesmo nome dentro da function. Caso não seja enviado um objeto, é enviado um
 * vazio por default.
 *  A função retorna um valor aleatório entre min e max
 */ 
function rand({ min = 0, max = 1000} = {}) {
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

const obj = {max: 50, min: 40} 
console.log(rand(obj))       // Retorna um valor entre 40 e 50
console.log(rand({min:955})) // Retorna um valor entre 955 e 1000
console.log(rand({}))        // Retorna um valor entre 0 e 1000
console.log(rand())          // Retorna um valor entre 0 e 1000