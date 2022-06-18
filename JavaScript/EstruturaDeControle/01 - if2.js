function teste1(num) {
  if(num > 7) 
    console.log(num)
  console.log('Final')
}

function teste2(num) {
  if(num >= 7); { //com o ";" não usar as estruturas de controle
    console.log(num)
  }
}

teste1(6)
teste1(8)

// Imprime ambos os resultados pois dentro da função a condição está atrelada ao ";"
//e não ao bloco de código que imprime num
teste2(6) 
teste2(8)