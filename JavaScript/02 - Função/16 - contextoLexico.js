const valor = 'Global'

function minhaFuncao() {
  console.log(valor)
}

function exec() {
  const valor = 'Local'
  minhaFuncao()
}

// Não encontra Local pois ela vai procurar dentro do escopo léxico onde foi declarada
//e por consequência encontrará Global
exec()