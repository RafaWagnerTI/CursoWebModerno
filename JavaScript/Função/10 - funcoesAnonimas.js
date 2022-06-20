const soma = function(x, y) {
  return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
  console.log(operacao(a, b))
}

//Exemplo de aplicação de função anônima

imprimirResultado(4, 6, soma)
imprimirResultado(4, 6)
imprimirResultado(4, 6, function (x, y) {
  return x - y
})
imprimirResultado(4, 6, (x,y) => x*y)

const pessoa = {
  falar : function () {
    console.log("Opa!")
  }
}

pessoa.falar()