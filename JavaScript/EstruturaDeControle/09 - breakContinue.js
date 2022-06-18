const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in nums) {
  if(x == 5) {
    // interrrompe o laço e pula pra próxima sentença de código fora do laço relacionado
    break; 
  }
  console.log(`${x} = ${nums[x]}`)
}

for(let y in nums) {
  if(y == 5) {
    console.log('Pula esse índice')
    // continue interrompe essa repetição e pula para o próximo ciclo do for
    continue
  }
  console.log(`${y} = ${nums[y]}`)
}

externo: // Cria um rótulo para o for externo
for (let a in nums) {
  for (let b in nums) {
    if(a == 2 && b == 3) break externo // interrompe o for externo
    console.log(`Par = ${a},${b}`)
  }
}

console.log('fim')