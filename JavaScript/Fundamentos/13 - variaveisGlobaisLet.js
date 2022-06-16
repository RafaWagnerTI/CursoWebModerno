let numero = 2

{
  let numero = 1
  console.log('dentro =', numero)  // Ao usar uma variável ele prioriza
  //a versão dela declarada dentro do mesmo escopo e caso não encontre utiliza
  // a variável declarada no escopo de fora
}

console.log('dentro =', numero) // Retorna o valor declarado no escopo global
// pois a declaração com let se restringe ao escopo em que foi declarada 