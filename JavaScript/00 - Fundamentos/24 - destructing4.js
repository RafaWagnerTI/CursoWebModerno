// Mesma função do arquivo '22 - destructing3,js' porém aplicada com array
function rand([min = 0, max = 1000] = []) {
  // Por não possuir um atributo definido para valor máximo e mínimo essa validação
  //se faz necessária para checar se o valor maior não vai atribuído ao primeiro
  //parâmetro.
  if(min > max) [min, max] = [max, min]   
  const valor = Math.random() * (max - min) + min
  return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))
console.log(rand())