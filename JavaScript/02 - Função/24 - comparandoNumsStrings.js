// Funciona normalmente comparando números de 1 a 9

console.log('1' > '2') // false
console.log('1' > '1') // false
console.log('2' > '1') // false

// Porém, a partir dos números em dezenas ele passa a comparar a ordem numérica
//somente dos primeiros números, oque torna essa comparação em String inviável

console.log('2' > '12') // true
console.log('5' > '49') // true
console.log('3' > '29') // true 