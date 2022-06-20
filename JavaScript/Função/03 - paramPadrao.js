//estratégia 1 para gerar valor padrão
function soma1(a, b, c) {
  a = a || 0 //Muito usado ainda hoje para validação de outros tipos numéricos
  b = b || 0
  c = c || 0
  return a + b + c
}

console.log(soma1(), soma1(1), soma1(1, 2), soma1(1, 2, 3))

//estratégias 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
  a = a != undefined ? a : 0
  b = 1 in arguments ? b : 0
  c = isNaN(c) ? 0 : c // forma mais segura de validar números antes do ES2015
  return a + b + c
}

console.log(soma2(), soma2(1), soma2(1, 2), soma2(1, 2, 3))

// estratégia 5 de valor padrão implementada no ES2015
function soma3(a = 0, b = 0, c = 0) {
  return a + b + c
}

console.log(soma3(), soma3(1), soma3(1, 2), soma3(1, 2, 3))