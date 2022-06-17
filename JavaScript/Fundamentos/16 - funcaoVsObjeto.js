console.log(typeof Object)     // É uma função 
console.log(typeof new Object()) // Uma instância de objeto é um objeto

const Cliente = function() {}
console.log(typeof Cliente)     // É uma função
console.log(typeof new Cliente()) // Uma instância de uma função é um objeto

class Produto {} //ES 2015 (ES6)
console.log(typeof Produto)     // É uma função
console.log(typeof new Produto) // Uma instância de uma classe é um objeto

//Observação: a presença dos parenteses na instância é apenas um detalhe de sintaxe.