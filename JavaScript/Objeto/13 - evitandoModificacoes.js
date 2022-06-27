//Object.preventExtensions permite exclusão e alteração mas não permite adição
const produto = Object.preventExtensions({
  nome: 'Qualquer', preco:1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha Escolar Branca'
delete produto.tag
console.log(produto)

//Object.seal -> Permite alterações mas não permite exclusão e adição
const pessoa = {nome: 'Juliana', idade:26}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29

console.log(pessoa)

//Object.freeze = selado + valores constantes