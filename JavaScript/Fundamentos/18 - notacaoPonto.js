// Usamos "." para acessar os membros de um objeto 
console.log(Math.ceil(6.1))

const obj1 = {}
obj1.nome = 'Bola'
console.log(obj1.nome)

function Obj(nome){
  this.nome = nome //a palavra this é usada para definir um atributo que será acessado
  // mesmo fora da function
  this.exec = function() {
    console.log('Exec...')
  }
}

const obj2 = new Obj('Cadeira')
const obj3 = new Obj('Mesa')
console.log(obj2.nome)
console.log(obj3.nome)
console.log(obj3.exec())