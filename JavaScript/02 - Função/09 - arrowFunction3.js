let comparaComThis = function(param) {
  console.log(this === param)
}

console.log("Comparando a partir de function")

comparaComThis(global) // this é global

console.log("\nComparando com this do objeto")

const obj = {}
comparaComThis = comparaComThis.bind(obj)

comparaComThis(global)
comparaComThis(obj) // this é object

console.log("\nComparando a partir de arrow function")

let comparaComThisArrow = (param) => console.log(this === param)

comparaComThisArrow(global)
comparaComThisArrow(module.exports) // this é module.exports

comparaComThisArrow = comparaComThisArrow.bind(obj)

console.log("\nComparando com this do objeto")

comparaComThisArrow(obj)
comparaComThisArrow(module.exports) // mesmo com o bind o this permanece sendo module.exports