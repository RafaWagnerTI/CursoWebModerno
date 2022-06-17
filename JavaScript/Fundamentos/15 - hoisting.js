/*
 * Hoisting é um efeito de içamento de variáveis var, oque significa que ao serem
 * declaradas com VAR, as variáveis são virtualmente instanciada no começo do código
 * permitindo a exibição do seu valor como undefined antes de uma atribuição.
 */

console.log('a = ', a) // Undefined
var a = 2
console.log('a = ', a) // 2

console.log('b = ', b) // Erro pois a declaração let não é içada para o topo
let b = 2
console.log('b = ', b)

// O mesmo acontece com functions declaradas dessa maneira, 
//é possível executa-la mesmo antes de defini-la
retornaValor()
function retornaValor() {
  return console.log(a)
}

// Se duas ou mais functions com o mesmo nome são declaras a ultima é a que será
// içada e executada
console.log(soma(1, 3))

//Não consegue reconhecer soma como function
//var soma = (a, b) => a+b 

//Não reconhece subtracao como function
//console.log(subtracao(3, 1))
//var subtracao = function(a, b) {
//  return a - b;
//}

function soma(a, b) {
  return a + b
}

function soma(a, b) {
  return a + b * 5
}

function soma(a, b) {
  return a * 5 + b * 5
}
