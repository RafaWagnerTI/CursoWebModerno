function area(largura, altura) {
  const area = largura * altura
  if(area > 20) {
    console.log(`Valor acima do permitido ${area}`)
  }else{
    return area
  }
  //Não precisa de um retorno padrão
}

console.log(area(2,2))
console.log(area(2)) // Permitido enviar menos valores de parametros
console.log(area())  // Permitido enviar nenhum valor de parametro
console.log(area(2, 3, 17, 22, 44)) // Permitido enviar mais valores que o necessário
console.log(area(5,5)) // Se não houver retorno ele é undefined