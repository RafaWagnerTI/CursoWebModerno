function getNumeroAleatorioEntre(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

let opcao // Não é necessário atribuir valor já que a primeira repetição sempre acontece

do{
  opcao = numeroAleatorioEntre(1, 4)
  console.log(`Opção escolhida foi ${opcao}`)
}while(opcao != 1)

console.log('fim')