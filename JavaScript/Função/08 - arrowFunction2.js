function Pessoa() {
  idade = 0

  setInterval(() => {
    this.idade++
    console.log(this.idade)
  }, 1000)
}

new Pessoa() // o this da função interna é o mesmo da função externa, pois ela foi
//declarada como arrow function