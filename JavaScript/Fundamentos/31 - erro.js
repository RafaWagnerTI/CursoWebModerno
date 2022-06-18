function tratarErroELancar(erro) {
  //throw new Error('...')
  //throw 10
  //throw true
  //throw 'message'
  throw {
    nome: erro.nome,
    msg: erro.message,
    date: new Date
  }
}

function imprimirNomeGritado(obj){
  try {
    console.log(obj.name.toUpperCase() + '!!')
  } catch (e) {
    tratarErroELancar(e)
  } finally {
    console.log('final')
  }
}

const obj = {nome: 'Rafael'}
imprimirNomeGritado(obj)