const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() //remove último elemento da lista
console.log(pilotos)

pilotos.push('Vestappen') // adiciona novo elemento no fim da lista
console.log(pilotos)

pilotos.shift() //remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') // adiciona novo elemento no início da lista
console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa') // adiciona dois elementos a partir do índice dois
console.log(pilotos)

//remover
pilotos.splice(3, 1) // removeu o elemento a partir do índice três.
console.log(pilotos)

//Retorna todos os pilotos a partir da posição do índice
const algunsPilotos = pilotos.slice(2) // novo array
console.log(algunsPilotos)

//O segundo parametro do slice define um fim para o novo array
//porém ele sempre termina o array um elemento antes do final informado
const algunsPilotos2 = pilotos.slice(1, 3)
console.log(algunsPilotos2) 