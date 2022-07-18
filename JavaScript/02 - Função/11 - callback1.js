const fabricantes = ["Mercedes", "Audi", "BMW" ]

function imprimir(nome, indice) {
  console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //o forEach vai retornar um array pra cada um dos elementos
//contendo valor e indice, esse retorno pode ser utilizado na função interna enviada no
//forEach

fabricantes.forEach((nome) => console.log(nome))