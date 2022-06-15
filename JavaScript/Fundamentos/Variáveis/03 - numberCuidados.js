console.log(7 / 0)      // Infinity, pois quanto mais perto de zero, maior o resultado é.
console.log("10.2" / 2) // Funciona, pois mesmo sendo string o JS tenta converter.
console.log("10" + 2) // Vai concatenar ao invés de somar, pois faz sentido para String
console.log("10" - 2) // Vai subtrair, pois a subtração não faz sentido para String
console.log("10,2" * 2) // NaN = Not a Number.
console.log(0.1 + 0.7)  //Leve imprecisão devido a especificação

//Não é possível chamar a função a partir do literal
//Porém é possível chamar a função a partir do literal entre parenteses ()
console.log((10.345).toFixed(2)) 