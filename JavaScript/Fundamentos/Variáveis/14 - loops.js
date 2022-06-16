//Usando var
for (var i = 0; i < 3; i++) {
  console.log(i)
}

console.log("i =", i) //Consegue acessar normalmente pois a variável var não tem escopo

//Usando let
for (let j = 0; j < 3; j++) {
  console.log(j)
}

//console.log("i =", j) //Não consegue acessar pois está restrito ao escopo do for

//Problema de usar var no for
const funcs = []

for(var k = 0; k < 3; k++) {
  funcs.push(function() {
    console.log(k)
  })
}

//Retorna o valor final da variável pois não guarda a referência do momento
// de inserção dentro de um escopo
funcs[0]() 
funcs[1]()

//Diferente de...
const funcoes = []

for(let l = 0; l < 3; l++) {
  funcoes.push(function() {
    console.log(l)
  })
}

//Ao declarar com let o valor é armazenado de acordo com a referência de inserção
// no momento, dentro do escopo.
funcoes[0]()
funcoes[1]()