// Atividade - Diferença entre os produtos
// Importar biblioteca 
const leia = require('readline-sync')

// Variaveis 
let numero1, numero2, numero3, numero4

// Entrada de dados
numero1 = leia.questionFloat("Digite N1: ")
console.clear()
numero2 = leia.questionFloat("Digite N2: ")
console.clear()
numero3 = leia.questionFloat("Digite N3: ")
console.clear()
numero4 = leia.questionFloat("Digite N4: ")
console.clear()

// Saida de dados
console.log("O produto de %f e %f = %f", numero1,numero2,(numero1*numero2))

console.log("O produto de %f e %f = %f", numero3,numero4,(numero3*numero4))

console.log("A diferença entre eles é %f",((numero1*numero2)-(numero3*numero4)))

