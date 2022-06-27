//usando a notação literal
const obj1 = {}
console.log(obj1)

//Object em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funções construtoras
function Produto(nome, preco, desc) {
  this.nome = nome //this fica visível para essa instância de produto
  this.getPrecoComDesconto = () => {
    return (preco * (1 - desc)).toFixed(2)
  }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.nome, p1.getPrecoComDesconto(), p2.nome, p2.getPrecoComDesconto())
console.log(p1.preco, p2.preco, p1.desc, p2.desc) //Undefined ao acessar atributos sem this

//Função Factory -> Função que cria objetos
function criarFuncionario(nome, salarioBase, faltas) {
  return {
    nome,
    salarioBase,
    faltas,
    getSalario() {
      return(salarioBase / 30) * (30 - faltas)
    }
  }
}

const f1 = criarFuncionario('João', 7890, 4)
const f2 = criarFuncionario('Maria', 11400, 1)

// Armazenando o objeto em uma variável é possível acessar seus valores mesmo sem this
console.log(f1.nome, f1.getSalario(), f2.nome, f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha) // Retorna prototype como null pois foi declarado assim no create

//Uma função famosa que retorna Objeto...
const fromJSON = JSON.parse('{"info":"Sou um JSON"}')
console.log(fromJSON)