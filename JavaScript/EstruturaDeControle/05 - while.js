function getInteiroAleatorioEntre(min, max) {
  const valor = Math.random() * (max - min + 1) + min
  return Math.floor(valor)
}

let opcao = 0

while (opcao != 1) {
  opcao = getInteiroAleatorioEntre(1, 4)
  console.log(`Opção escolhida foi ${opcao}`)
}

console.log('Até a próxima')