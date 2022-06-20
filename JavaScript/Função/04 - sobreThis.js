  //No JavaScript o this pode apontar para um local diferente dependendo do escopo 
  //onde é chamado

console.log("Exemplo com function")

function validaEscopo() {
  console.log(this === global)
}

console.log(this === global) // false pois nesse caso this se refere ao module.exports

validaEscopo() // true pois nesse caso this se refere ao global pois é onde a função 
//foi instanciada

const pessoa = {}
pessoa.validaEscopo = validaEscopo

pessoa.validaEscopo() // nesse caso this se refere ao objeto onde foi instanciado

// Quando se trata de Arrow Function o this dela sempre está referenciado ao local
//onde foi declarada da priemira vez e isso nunca muda

console.log("\nExemplo com Arrow Key Function")

const validaEscopo2 = () => {console.log(this === module.exports)}

validaEscopo2() // Retorna True, pois a variável foi declarada no module.exports
pessoa.validaEscopo2 = validaEscopo2

pessoa.validaEscopo2() // Também true, pois apesar de ter sido atribuída ao atributo
// de um objeto, ela inicialmente foi declarada no module.exports

console.log()