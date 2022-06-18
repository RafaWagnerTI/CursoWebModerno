//No RunTime Node o escopo this é a mesma coisa que module.exports

console.log(this === module.exports)

console.log('########')

let a = 3

console.log(a)

console.log('########')

//Ao referenciar uma variável com this ela também passa a fazer parte do module.exports

this.e = 500

console.log(this.e)
console.log(module.exports)

console.log('########')

global.d = 123

// Curiosamente, ao referenciar uma variável como global ela não faz parte de this
//e nem de module.exports 

console.log(global.d)
console.log(this.d)
console.log(module.exports.d)

console.log('########')

// Criando variável sem var nem let, nucna fazer isso pois define ela como global
//e ela não existe nos escopos this e module.exports
f = 007

console.log(global.f)
console.log(this.f)
console.log(module.exports.f)

/*
 * No RunTime do Browser
 * É possível acessar o escopo "global" através do comando window e this desde que
 *executado no mairo escopo. 
 * Ao declarar uma variável com var ela se torna uma variável de Window e pode ser
 *sobrescrita com outra nomeação para a variável a e acessada através de window.a
 *ou this.a.
 * Caso a variável seja declarada com let ou const não é possível acessar ela de
 *Window ou this no escopo maior e caso tente declarar a mesma variável novamente,
 *um erro é informado.
 * Quando se trata de funções, caso uma função seja declarada de maneira direta,
 *ela pode ser acessada pelo escopo this e window através de this.nomeDaFunção ou
 *window.nomeDaFunção.
 * Porém, caso a função seja cadastrada em uma variável let ou const, apesar de ainda
 *possuir o mesmo escopo, não poderá ser acessada através de this ou window, pois está
 *atrelada a variável onde foi previamente declarada.
 * Dentro de um objeto o escopo que o this enxerga é o próprio objeto e não a variável
 *Window
 */


