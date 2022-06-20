function soma() { // Função declarada sem parâmetros
  let soma = 0
  for (i in arguments) { //Arguments é um array interno da função que armazena
    //os parâmetros enviados para a função
    soma += arguments[i]
  }
  return soma
}

//Mesmo sendo declarada sem parâmetros uma função pode acabar recebendo parâmetros
console.log(soma(8, 9, 10, 7, 6, 5, "1", "Teste"))