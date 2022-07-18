let dobro = (a) => { return 2*a }

dobro = a => 2*a // return implícito. parenteses removidos dos parametros pois só 
//existe um parametro e ausencia de chaves já que só há uma sentença

console.log(dobro(5))

function ola () {
  return 'Olá'
}

ola = () => 'Olá'
ola = _ => 'Olá' //possui um parâmetro, mas é possível ignora-lo se quiser

console.log(ola())