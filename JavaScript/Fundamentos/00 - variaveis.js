/*
 * É possível declarar a mesma variável duas vezes dentro do mesmo escopo com var
 * isso não é recomenado.
 */

var a = 3
var a = 4

// Criar variáveis usando let é o ideal
let b = 4

/*
 * Constantes são mais leves e portanto devem ser priorizadas sempre,
 * porém o valor de uma constante nunca pode ser alterado, caso seja necessário
 * deve converte-la para let.
 */
const c = 5

console.log(a, b)