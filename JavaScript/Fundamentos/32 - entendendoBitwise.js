//anotações sobre bitwise

// Bitwise compara bit por bit dos valores enviados, com base na regra aplicada
//para chegar em um resultado

// Regra OR: Caso os bits comparados sejam iguais o resultado é o bit, se forem
// diferentes o resultado é 1

const a = 4
const b = 7

let valor = a | b // A comparação com um operador é comparação bitwise
console.log(valor) // bitwise or

// A saída é  3 pois :

/*
  4 = 00000100 -> valor de A
  7 = 00000111 -> valor de B
  7 = 00000111 -> resultado de comparação OR
*/

// Regra AND: Caso os bits sejam iguais o resultado é o bit, caso sejam diferentes
//o resultado é 0

valor = a & b // bitwise and
console.log(valor)

// A saída é 0 pois:

/*
  4 = 00000100 -> valor de A
  7 = 00000111 -> valor de B
  4 = 00000100 -> resultado de comparação AND
*/

// Regra XOR: Caso os bits comparados sejam iguais o resultado é 0, caso sejam diferentes
//o resultado é 1

valor = a ^ b // bitwise xor
console.log(valor)

// A saída é 3 pois: 

/*
  4 = 00000100 -> valor de A
  7 = 00000111 -> valor de B
  3 = 00000011 -> resultado de comparação XOR
*/

//Exemplo de aplicação real de Bitwise:

// Em uma aplicação que tem permissão read, write e execute... 

// É possível determinar uma casa de bit para cada uma das funções

/*
 * permissaoRead     = 00000100 -> 4
 * permissaoWrite    = 00000010 -> 2
 * permissaoExecute  = 00000001 -> 1
 * todasAsPermissoes = 00000111 -> 7
 */

const readPermission    = 4
const writePermission   = 2
const executePermission = 1

let myPermission = 0

// Neste caso, usamos o bitwise OR para adicionar permissões á minha permissão...
myPermission = myPermission | readPermission | writePermission
console.log(myPermission)

/*
 * 6 = 00000110
 */

// E usamos o bitwise AND para validar quais permissões realmente possuo
let validatePermission = (myPermission & readPermission) 
  ? "tem permissão" : "não tem permissão"
console.log(validatePermission)