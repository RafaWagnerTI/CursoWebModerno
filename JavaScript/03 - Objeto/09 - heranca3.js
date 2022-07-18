const pai = {nome: 'Pedro', corCabelo: 'preto'}

//O parâmetro na criação define o objeto de herança
const filha1 = Object.create(pai) 
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

//O objeto enviado como segundo parâmetro define atributos, seus valores e permissões
const filha2 = Object.create(pai, {
  nome: {value: 'Bia', writable: false, enumerable: true }
})

console.log(filha2.nome)
filha2.nome = 'Carla' // não permite edição pois writable é false
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

//O campo nome está visível para filha1 pois é definido na linha 4
//O campo nome está visível para filha2 pois enumerable é true
console.log(Object.keys(filha1), Object.keys(filha2))

for(let key in filha2) { //Percorre a lista de chaves no objeto filha2
  filha2.hasOwnProperty(key) ? //Verifica se o atributo do objeto filha2 é herdado
    console.log(key) : console.log(`Por herança ${key}`)
}