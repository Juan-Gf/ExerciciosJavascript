const leia = require('readline-sync')

let codCargo, nomeColaborardor, salario, novoSalario

console.log("   ------TABELA DE REASJUSTE-----")
console.log("Cod. Cargo  | Cargo | Perc. do Reajuste")
console.log("   1    |    Gerente    |   10%")
console.log("   2    |   Vendedor    |    7%")
console.log("   3    |  Surpervisor  |    9%")
console.log("   4    |   Motorista   |    6%")
console.log("   5    |   Estoquista  |    5%")
console.log("   6    | Técnico de TI |    8%")

nomeColaborardor = leia.question("Digite o nome do colaborador: ")
codCargo = leia.questionInt("Digite o codigo do cargo: ")


switch(codCargo){
    case 1:
        salario = leia.questionFloat("Digite o salario do colaborador: R$ ")
        console.clear()
        novoSalario = salario + (salario*0.1)
        console.log("Colaborador: %s", nomeColaborardor)
        console.log("Cargo: Gerente")
        console.log("Salario com reajuste R$ %f",novoSalario)

        break
    case 2:
        salario = leia.questionFloat("Digite o salario do colaborador: R$ ")
        console.clear()
        novoSalario = salario + (salario*0.07)
        console.log("Colaborador: %s", nomeColaborardor)
        console.log("Cargo: Vendedor")
        console.log("Salario com reajuste R$ %f",novoSalario)

        break
    case 3:
        salario = leia.questionFloat("Digite o salario do colaborador: R$ ")
        console.clear()
        novoSalario = salario + (salario*0.09)
        console.log("Colaborador: %s", nomeColaborardor)
        console.log("Cargo: Supervisor")
        console.log("Salario com reajuste R$ %f",novoSalario)

        break
    case 4:
        salario = leia.questionFloat("Digite o salario do colaborador: R$ ")
        console.clear()
        novoSalario = salario + (salario*0.06)
        console.log("Colaborador: %s", nomeColaborardor)
        console.log("Cargo: Motorista")
        console.log("Salario com reajuste R$ %f",novoSalario)

        break
    case 5:
        salario = leia.questionFloat("Digite o salario do colaborador: R$ ")
        console.clear()
        novoSalario = salario + (salario*0.05)
        console.log("Colaborador: %s", nomeColaborardor)
        console.log("Cargo: Estoquista")
        console.log("Salario com reajuste R$ %f",novoSalario)

        break
    case 6:
        salario = leia.questionFloat("Digite o salario do colaborador: R$ ")
        console.clear()
        novoSalario = salario + (salario*0.08)
        console.log("Colaborador: %s", nomeColaborardor)
        console.log("Cargo: Técnico de TI")
        console.log("Salario com reajuste R$ %f",novoSalario.toFixed(.00))

        break
    default:
        console.log("Cod. do Cargo Invalido - Digite 1 a 6")
}
    



