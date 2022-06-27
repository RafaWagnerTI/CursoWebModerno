//ECMASCript 2015
//Por trás do código a declaração continua sendo por objeto
class Avo {
  constructor(sobrenome) {
    this.sobrenome = sobrenome
  }
}

class Pai extends Avo {
  constructor(sobrenome, profissao = 'Professor') {
    super(sobrenome)
    this.profissao = profissao
  }
}

class Filho extends Pai {
  constructor(){
    super('Silva')
  }
}

const filho = new Filho
console.log(filho)