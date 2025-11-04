import leia = require("readline-sync")
import { Queue } from "../Fila-Pilha/Queue"

const filaClientes = new Queue<string>()   

let opcao: number
let cliente: string


do{
    console.log("************ MENU ************")
    console.log("1 - Adicionar Cliente na Fila")
    console.log("2 - Listar todos os Clientes")
    console.log("3 - Retirar Cliente na Fila")
    console.log("0 - Sair")
    console.log("*******************************\n")

    console.log("Entre com a opção desejada")
    opcao = leia.questionInt()

    switch(opcao){
        case 1:
            console.clear()
            cliente = leia.question("Digite o nome do cliente: ")
            filaClientes.enqueue(cliente)    
            console.log("Cliente Adicionado!")
            break
        case 2:
            console.clear()
            console.log("Clientes na Fila!")
            filaClientes.printQueue()
            break
        case 3:
            console.clear()
            console.log("\nO Cliente %s foi Chamado!", filaClientes.peek())
            filaClientes.dequeue()
            console.log("\nClientes na Fila!")
            filaClientes.printQueue()
            break
        case 0:
            console.log("Programa Finalizado!")
            break
        default:
            console.log("Opção Invalida")
            break
    }

    leia.question("\nEnter para continuar")

    console.clear()

}
while(opcao != 0)