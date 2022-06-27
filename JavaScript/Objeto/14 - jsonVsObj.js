const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c }}
console.log(JSON.stringify(obj)) //Remove a função pois é apenas uma notação de texto

// console.log(JSON.parse("{ a:1, b:2, c:3")) -> Da erro pois precisa de aspas no atributo
// console.log(JSON.parse("{ 'a':1, 'b':2, 'c':3 }")) -> Da erro pois a aspas do atributo
//precisa ser ""
console.log(JSON.parse('{"a":1,"b":2,"c":3}'))

// Textos devem ser limitados por arrays de aspas duplas
console.log(JSON.parse('{"a":1, "b":"teste", "c":true, "d":{}, "e":[] }')) 