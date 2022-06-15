const valores = [1.5, 3.8, 9.8, 2.5]

console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 8.8
console.log(valores)
console.log(valores.length) //exibe o comprimento do array

valores.push({id: 3}, false, null, 'teste') //push é usado para adicionar elementos
// apesar de ser possível adicionar todo tipo de elemento, o ideal é manter homogêneo

console.log(valores)

console.log(valores.pop()) // retira o último valor da lista e o retorna
delete valores[0] // remove o atributo mas mantem o objeto na posição
console.log(valores)

console.log(typeof valores) // em JS o array é um objeto 