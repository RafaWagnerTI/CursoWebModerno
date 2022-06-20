// IIFE - Imediatly Invoked Function Expression

// São funções imediatas, executadas assim que instanciadas, essa é uma tecnica
//usada para fugir do escopo global
(function() {
  // Porém ainda é possível acessálo declarando variáveis com referência direta ao 
  //escopo global
  global.b = 2
  console.log('Será executado na hora!')
  console.log('Foge do escopo mais abrangente!')
})()

console.log(b)