console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

//Implementa nova função no String
String.prototype.reverse = function () {
  return this.split('').reverse().join('') //Usa o elemento this para simular uma string
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function () {
  return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

//Nunca sobrescrever uma função padrão pois causa consequencias inimagináveis
String.prototype.toString = function () {
  return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())