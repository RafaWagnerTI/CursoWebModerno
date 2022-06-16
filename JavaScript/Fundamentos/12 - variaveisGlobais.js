{
  {
    {
      { 
        var sera = 'Será???'
        //Apesar de estar dentro de um escopo menor, essa variável pertence ao escopo global
        // e pode ser alterada e usada em qualquer momento
      }
    }
  }
}

console.log(sera)

var sera = "teste"

console.log(sera)

function teste() {
  var local = 123
  console.log(local)
}

teste()
console.log(local) //Não é possível usar essa variável pois foi declarada dentro de uma função