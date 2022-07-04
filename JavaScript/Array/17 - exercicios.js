//Exercício 01
console.log('\nExercício 01');
(function() {
  const cumprimentar = nome => `Olá ${nome}!`
  console.log(cumprimentar("Rafa"));
})()

//Exercício 02
console.log('\nExercício 02');
(function() {
  const calcularDias = anos => `Uma pessoa com ${anos} anos viveu no mínimo ${anos * 365} dias`
  console.log(calcularDias(21))
})()

//Exercício 03
console.log('\nExercício 03');
(function() {
  const calcularSalario = (qtdHoras, valorHora) => qtdHoras * valorHora
  console.log(`R$ ${calcularSalario(150, 40.5).toFixed(2)}`)
})()

//Exercício 04
console.log('\nExercício 04');
(function() {
  const nomeDoMes = mes => {
    let mesEscrito;
    switch(mes) {
      case 1:  mesEscrito = "Janeiro";   break;
      case 2:  mesEscrito = "Fevereiro"; break;
      case 3:  mesEscrito = "Março";     break;
      case 4:  mesEscrito = "Abril";     break;
      case 5:  mesEscrito = "Maio";      break;
      case 6:  mesEscrito = "Junho";     break;
      case 7:  mesEscrito = "Julho";     break;
      case 8:  mesEscrito = "Agosto";    break;
      case 9:  mesEscrito = "Setembro";  break;
      case 10: mesEscrito = "Outubro";   break;
      case 11: mesEscrito = "Novembro";  break;
      case 12: mesEscrito = "Dezembro";  break;
      default: mesEscrito = "Mês inexistente";
    }
    console.log(mesEscrito);
  }
  nomeDoMes(1)
  nomeDoMes(4)
})()

//Exercício 05
console.log('\nExercício 05');
(function() {
  const maiorOuIgual = (primeiro, segundo) => console.log(primeiro >= segundo && 
    typeof primeiro === typeof segundo);
  maiorOuIgual(0, 0)    //retornará true
  maiorOuIgual(0, "0")  //retornará false
  maiorOuIgual(5, 1)    //retornará true
})()

//Exercício 06
console.log('\nExercíco 06');
(function() {
  const inverso = valor => {
    switch(typeof valor) {
      case typeof false: valor = !valor; break;
      case typeof 0: valor = valor * -1; break;
      default: valor =  `booleano ou número esperados, mas o parâmetro é do tipo ${typeof valor}`
    }
      
    console.log(valor)
  }
  inverso(true)
  inverso("6")
  inverso(-2000)
  inverso("programação")
})()