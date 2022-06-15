const escola = "Cod3r"

console.log(escola.charAt(4)) // Pega o caractere na posição desejada
console.log(escola.charAt(5)) // Caso a posição esteja vazia não retorna nada
console.log(escola.charCodeAt(3)) // Pega o código relacionado ao caractere na posição
console.log(escola.indexOf('8')) // Exibe o indice de posição do caractere desejado,  
                                 // caso exista na string
console.log(escola.substring(1)) // Exibe a partir da posição informada
console.log(escola.substring(0, 3)) // Exibe da posição informada inicial até posição
                                    // informada final
console.log('Escola '.concat(escola).concat("!")) // Concatena as strings
console.log(escola.replace(3, 'e')); // Substitui um caractere por outro

console.log('Ana,Maria,Pedro'.split(',')) // Separa a String quando encontrar
                                          // o valor informado.