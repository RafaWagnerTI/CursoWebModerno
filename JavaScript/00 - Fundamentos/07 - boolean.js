let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //usar a negação duas vezes retorna o valor booleano original

console.log('Os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('Os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false)) // Valida a partir do valor instanciado na variável

console.log('pra finalizar...')

// O JS valida se algum deles é true para obter o resultado
console.log(!!('' || null || 0 || 'epa' || 123)) 
// Sempre imprime o primeiro a dar true
// Apesar de 123 também ser true, epa veio primeiro na ordem
console.log('' || null || 0 || 'epa' || 123)

