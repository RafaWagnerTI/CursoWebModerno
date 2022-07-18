const _ = require('../../00 - moduloA')

console.log(_.bemVindo)

//O código abaixo funciona pois por padrão sempre é buscado na pasta o 
//arquivo index.js
const saudacao = require('02 - saudacao')
console.log(saudacao.ola)

const c = require('./02 - pasta C')
console.log(c.ola2)

const http = require('http')
http.createServer((req, res) => {
  res.write('Rola um d20 ai bro!');
  res.end();
}).listen(8080);