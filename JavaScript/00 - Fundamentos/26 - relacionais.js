/*
 * ==  é igual 
 * === é extritamente igual
 */

console.log('01)', '1' ==  1) // Valida que ambos são iguais pois tem os mesmos valores
console.log('02)', '1' === 1) // Valida que são diferentes pois são de tipos diferentes
console.log('03)', '3' !=  3) // Valida que ambos são iguais pos tem os mesmos valores
console.log('04)', '3' !== 3) // Valida que são diferentes pois são de tipos diferentes

console.log('05)', 3 <  2) // Valida se 3 é menor que 2
console.log('06)', 3 <= 2) // Valida se 3 é menor ou igual a 2
console.log('07)', 3 >  2) // Valida se 3 é maior que 2
console.log('08)', 3 >= 2) // Valida se 3 é maior ou igual a 2

const d1 = new Date(0) // Instância objeto Data com a primeira data disponível 03/11/1969
const d2 = new Date(0)
// Independente do operador, valida que são diferentes pois os objetos apontam para
//diferentes endereços de memória.
console.log('09)', d1 ==  d2) 
console.log('10)', d1 === d2)

// Valida como verdadeiro pois ambos possuem o mesmo tempo
console.log('11)', d1.getTime() === d2.getTime())

console.log('12)', undefined ==  null) // Valida que ambos são iguais pois tem os mesmos valores
console.log('13)', undefined === null) // Valida que são diferentes pois são de tipos diferentes