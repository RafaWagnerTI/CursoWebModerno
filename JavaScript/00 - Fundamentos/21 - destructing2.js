const [a] = [10] // Atribui o valor do array na variavel
console.log(a)

const [n1, ,n3, ,n5, n6 = 0] = [10, 7, 9, 8] // Atribui alguns elementos do array
console.log(n1, n3, n5, n6)

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]// Atribui o segundo elemento do segundo array
console.log(nota)