const pessoa = {
  nome: 'Rebecca',
  idade: 2,
  peso: 13
}

console.log(Object.keys(pessoa)) // Retorna as chaves existentes no objeto pessoa
console.log(Object.values(pessoa)) // Retorna os valores existentes no objeto pessoa
console.log(Object.entries(pessoa)) // Retorna os pares chave/valor no objeto pessoa

//possível pois object entries retorna um array onde os elementos também são arrays
Object.entries(pessoa).forEach(e => {
  console.log(` ${e[0]}: ${e[1]}`) //Pega os elementos do array interno por indice
})

//Nesse exemplo é aplicado um destructing que armazena os valores do array interno em variáveis
// para facilitar o entendimento do código
Object.entries(pessoa).forEach(([chave, valor]) => {
  console.log(` ${chave}: ${valor}`)
})

//Usado para adicionar um atributo de maneira mais rica
Object.defineProperty(pessoa, 'dataNascimento', {
  enumerable: true, // Define se ela pode ser listada
  writable: false, // Define se ela pode ser alterada
  value: '01/01/2019' // Define o valor do atributo
})

pessoa.dataNascimento = '01/01/2017' // Tenta alterar mas impede a alteração
console.log(pessoa.dataNascimento) //não altera pois writable é false
console.log(Object.keys(pessoa)) //lista dataNascimento pois enumerable é true

//Object.assign (ECMAScript 2015)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c:3, a:4 }
//Assign guarda os atributos dos demais objetos no primeiro objeto passado como parametro
//A prioridade de atribuição é sempre do ultimo objeto passado
//Exemplo: Mesmo que em destino já havia a chave A com valor 1, ao atribuir o2 com mesma chave e valor 4
//A passou a ser 4
const obj = Object.assign(dest, o1, o2) //Além do resultado ser armazenado no objeto destino, também foi
//armazenado no objeto obj
console.log(obj, dest)