function Pessoa1() {
  this.idade = 0

  setInterval(function() {
    this.idade++
    console.log(this.idade)
  }.bind(this), 1000);
}

function Pessoa2() {
  this.idade = 0

  const self = this
  setInterval(function() {
    self.idade++
    console.log(self.idade)
  }, 1000);
}

function Pessoa3() {
  this.idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000);
}

// O this da função interna enviada como parâmetro será executado por uma outra função,
//sendo assim o valor de this muda, porém conseguimos pegar ele normalmente porque...

//new Pessoa1 // Funciona, pois usamos o bind para definir o this da função em parâmetro
//como o this da nossa função

//new Pessoa2 // Funciona, pois passamos para uma variável o this da nossa função
//e chamamos ele na função enviada como parâmetro.

new Pessoa3 // Funcioona, pois uma arrow function sempre preserva o this de onde
//foi declarada