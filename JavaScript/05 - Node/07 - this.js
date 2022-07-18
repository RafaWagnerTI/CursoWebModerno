console.log(this === global)
console.log(this === module)

// Ambos apontam para o mesmo local, dentro de uma função aponta 
//para module.exports
console.log(this === module.exports)
console.log(this === exports)

function logThis() {
  console.log('Dentro de uma função...')
  console.log(this === exports)
  console.log(this === module.exports)
  // Dentro de uma função this aponta para global
  console.log(this === global)
}

logThis()