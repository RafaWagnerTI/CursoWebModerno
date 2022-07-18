const nome = 'Rafael'
const saudacao = 'Olá ' + nome + '!'

// Templates tem que ser nomeados entre crases
// o valor resolvido na variável se une a String
const template = `
    Olá
    ${nome}!`

console.log(saudacao, template)

//expressões...
console.log(`1 + 1 = ${1+1}`)

const up = s => s.toUpperCase()

console.log(`Ei... ${up('cuidado')}!`)