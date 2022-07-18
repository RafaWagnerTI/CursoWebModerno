const ferrari = {
  modelo: 'F40',
  velMax: 324
}

const volvo = {
  modelo: 'V40',
  velMax: 200
}

//__proto__ faz referencia ao protótipo anterior
console.log(ferrari.__proto__) //Checa qual a herança do objeto ferrari
console.log(ferrari.__proto__ === Object.prototype) //Valida que a herança do objeto ferrari é o objeto protótipo
console.log(volvo.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__) //Checa qua a herança do objeto protótipo
console.log(Object.prototype.__proto__ === null) //Valida que a herança do objeto protótipo é null

function MeuObjeto() {} // Funções também tem protótipo, mas um prototipo próprio
console.log(typeof Object, typeof MeuObjeto)
console.log(Object.prototype, MeuObjeto.prototype)
console.log(MeuObjeto.prototype.__proto__ === Object.prototype)
console.log(Object.prototype === MeuObjeto.__proto__)

//Tentando entender

//MeuObjeto tem um protótipo de referência, este protótipo é o protótipo de função
console.log(MeuObjeto.__proto__ === Function.prototype)

//Function tem um protótipo de referência, este protótipo é o protótipo de Object
console.log(Function.prototype.__proto__ === Object.prototype)

//Object não tem protótipo de referência portanto seu protótipo é null
console.log(Object.prototype.__proto__ === null)