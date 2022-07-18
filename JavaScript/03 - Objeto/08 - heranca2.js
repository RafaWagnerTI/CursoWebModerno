//Cadeia de protótipos (prototype chain)
Object.prototype.attr0 = 'Z'
const avo = {attr1: 'A'}
const pai = {__proto__:avo, attr2: 'B', attr3: '3'}
const filho = {__proto__:pai, attr3: 'C'}

//  Procura atributo em si mesmo e nos protótipos anteriores
//  A prioridade é o objeto chamado, de modo que o attr3 mesmo tendo um outro
//valor no objeto pai foi defindo como C, pois foi encontrado no filho primeiro, efeito shadowing
//  Quando o atributo não é encontrado em nenhum dos objetos relacionados ele é undefined
console.log(filho.attr0, filho.attr1, filho.attr2, filho.attr3, filho.attr4)

const carro = {
  _velAtual: 0,
  _velMaxima: 200,
  get velocidade() {return `Velocidade atual ${this._velAtual}km/h de ${this._velMaxima}km/h` }, 
  set velocidade(delta) {
    if((this._velAtual) + delta < this._velMaxima)
      this._velAtual += delta
    else this.vel_Atual = this._velMaxima
  }
}

const ferrari = {
  modelo: 'F40',
  _velMaxima: 324
}

const volvo = {
  modelo: 'V40',
  get velocidade() { return `${this.modelo}: ${super.velocidade}`}
}

//Modo de definir protótipo, equivalente a:
// __proto__: carro,
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari, volvo) // Apesar de poder ver apenas os atributos do objeto,
// é possível manipular também os objetos do pai.

console.log(ferrari.velocidade)
ferrari.velocidade = 20
console.log(ferrari.velocidade)

console.log(volvo.velocidade)
volvo.velocidade = 10
console.log(volvo.velocidade)
