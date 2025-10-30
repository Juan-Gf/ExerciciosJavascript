const leia = require('readline-sync')

let opcao, quantidade, valotTotal

console.log("            ------MENU-----")
console.log("Cod. Produto | Produto | Preço Un.")
console.log("   1    | Cachorro quente | R$ 10.00")
console.log("   2    |     X-Salada    | R$ 15.00")
console.log("   3    |     X-Bacon     | R$ 18.00")
console.log("   4    |      Bauru      | R$ 12.00")
console.log("   5    |  Refrigerante   | R$  8.00")
console.log("   6    | Suco de laranja | R$ 13.00")

console.log("Digite a opção desejada:")
opcao = leia.questionInt()

console.clear()

switch(opcao){
    case 1:
        quantidade = leia.questionInt("Digite a quantidade desejada: ")
        console.clear()
        valotTotal = quantidade*10.00
        console.log("%i Cachorro Quente",quantidade)
        console.log("Valor total: R$ %f", valotTotal)
        break

    case 2:
        quantidade = leia.questionInt("Digite a quantidade desejada: ")
        console.clear()
        valotTotal = quantidade*15
        console.log("%i X-Salada",quantidade)
        console.log("Valor total: R$ %f", valotTotal)
        break

    case 3:
        quantidade = leia.questionInt("Digite a quantidade desejada: ")
        console.clear()
        valotTotal = quantidade*18
        console.log("%i X-Bacon",quantidade)
        console.log("Valor total: R$ %f", valotTotal)
        break

    case 4:
        quantidade = leia.questionInt("Digite a quantidade desejada: ")
        console.clear()
        valotTotal = quantidade*12.00
        console.log("%i Bauru",quantidade)
        console.log("Valor total: R$ %f", valotTotal)
        break

    case 5:
        quantidade = leia.questionInt("Digite a quantidade desejada: ")
        console.clear()
        valotTotal = quantidade*8
        console.log("%i Refrigerante",quantidade)
        console.log("Valor total: R$ %f", valotTotal)
        break

    case 6:
        quantidade = leia.questionInt("Digite a quantidade desejada: ")
        console.clear()
        valotTotal = quantidade*13
        console.log("%i Suco de Laranja",quantidade)
        console.log("Valor total: R$ %f", valotTotal)
        break

    default :
        console.log("Cod. do Produto Invalido - Digite 1 a 6")
}