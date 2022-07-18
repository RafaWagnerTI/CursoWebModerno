const sequencia = {
  // convenção, quando temos a intenção de utilizar a variável apenas internamente
  //o nome dela deve ser precedido por _
  _valor: 1,

  //Geralmente em JS, os valores dos atributos de objetos são tratados diretamente,
  // usamos get e set apenas quando é necessário interceptar o valor para uma validação ou alteração 
  get valor() {return this._valor++ }, //retorna o valor e em seguida o incrementa
 
  //JS não aceita sobrecarga de métodos (várias funções com o mesmo nome alterando a quantidade de parametros)
  // porém ele permite no caso das palavras reservadas get e set 
  set valor(valor) {
    if(valor > this._valor) { 
      this._valor = valor
  }
  }
}
//Ao tentar ler o atributo valor ele executará o método get
console.log(sequencia.valor, sequencia.valor) //JS não considera os atributos com get e set como função
//não deve usar () para chama-los

//Ao atribuir um novo valor ele executará o método set
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)

sequencia.valor = 900 // Não permite alteração pois é um número menor
console.log(sequencia.valor, sequencia.valor)