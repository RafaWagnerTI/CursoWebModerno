// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma Literal
function fun1() { }

// Armazenar em uma variável
const fun2 = function () { 
    let message = "teste" 
    return message
  }

function exibeResultado(message) {
  console.log(message)
}

//caso a variável de função seja enviada com (), o parâmetro será o retorno da função
//caso a variável de função seja enviada sem (), o parâmetro será a própria função
exibeResultado(fun2())
exibeResultado(fun2)

//Armazenar em um array
const array = [function (a,b) {return a + b}, fun1, fun2, exibeResultado]
array[3](array[2]())

//Armazenar em um atributo objeto
const obj = {}
obj.falar = function () { return 'Opa!'}
console.log(obj.falar())

// Pode passar função como param para outra função
function run(fun) {
  fun()
}

run(function () { console.log('Executando...')})

// Pode retornar/conter uma função
function soma(a,b) {
  return function(c) {
    return a+b+c
  }
}

//Uma função que retornar uma função pode ser executada desta maneira
console.log(soma(2,3)(5))

// Ou a função retornada pode ser armazenada na variável e executada posteriormente
const cincoMais = soma(2,3)
console.log(cincoMais(5))