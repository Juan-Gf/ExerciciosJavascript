const leia = require('readline-sync')

let numero1, numero2, codigo

console.log("----Calculadora----")
console.log("Codigo  | Operação")
console.log("   1    | Soma")
console.log("   2    | Subtração")
console.log("   3    | Multiplicação")
console.log("   4    | Divisão")

console.log("Digite o 1º numero: ")
numero1 = leia.questionFloat()

console.log("Digite o 2º numero: ")
numero2 = leia.questionFloat()

console.log("Digite o codigo da operação")
codigo = leia.questionInt()

console.clear()

switch(codigo){
    case 1:
        console.log("----Soma----")
        console.log("%f + %f = %f", numero1, numero2, numero1 + numero2)
        break
    case 2:
        console.log("---Subtração---")
        console.log("%f - %f = %f", numero1, numero2, numero1 - numero2)
        break
    case 3:
        console.log("--Multiplicação--")
        console.log("%f * %f = %f", numero1, numero2, numero1 * numero2)
        break
    case 4:
        console.log("---Divisão---")
        console.log("%f / %f = %f", numero1, numero2, numero1 / numero2)
        break
    default:
        console.log("Opção Inválida!")
}
