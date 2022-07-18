function compras(trabalho1, trabalho2) {
  const comprarSorvete = trabalho1 || trabalho2
  const comprarTV50 = trabalho1 && trabalho2
  //const comprarTV32 = !!(trabalho1 ^ trabalho2) //bitwise xor, procurar mais depois
  const comprarTV32 = trabalho1 != trabalho2
  const manterSaudavel = !comprarSorvete
  // Es2015 reduz o código permitindo que o atributo tenha o nome da variável de valor
  //ao informar variável
  return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(true, false))