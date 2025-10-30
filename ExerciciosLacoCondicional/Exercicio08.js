const leia = require('readline-sync')

let operacao, saldo, valor

saldo = 10000.00   

console.log("----Calculadora----")
console.log("Cod. Operação | Operação")
console.log("     1     |   Saldo")
console.log("     2     |   Saque")
console.log("     3     |   Depósito")

console.log("Digite a operação desejada")
operacao = leia.questionInt()

switch(operacao){
    case 1:
        console.log("Operação - Saldo")
        console.log("R$ %f",saldo)
        break
    case 2:
        console.log("Operação - Saque")
        console.log("Valor que deseja sacar")
        valor = leia.questionFloat("R$ ")
        if(saque <= saldo){
            saldo = saldo - valor
            console.log("Novo saldo R$ %f",saldo)
        }else{
            console.log("Saldo Insuficiente!")
        }
        break
    case 3:
        console.log("Operação - Deposito")
        console.log("Valor que deseja depositar")
        valor = leia.questionFloat("R$ ")
        saldo = saldo + valor
        console.log("Novo saldo R$ %f",saldo)
        break
    default:
        console.log("Operação Invalida")
}
