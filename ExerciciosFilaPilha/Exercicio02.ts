import { Stack } from "../Fila-Pilha/Stack";
import leia = require("readline-sync")

const pilhaLivro = new Stack<string>()

let opcao: number

let livro: string

do{
    console.log("************ MENU ************")
    console.log("1 - Adicionar Livro na Pilha")
    console.log("2 - Listar todos os Livros")
    console.log("3 - Retirar Livro da Fila")
    console.log("0 - Sair")
    console.log("*******************************\n")

    console.log("Entre com a opção desejada: ")
    opcao = leia.questionInt()

    switch(opcao){
        case 1:
            console.clear()
            livro = leia.question("Digite o nome do livro: ")
            pilhaLivro.push(livro)   
            console.log("Livro Adicionado!")
            break
        case 2:
            console.clear()
            console.log("Livros na Pilha!")
            pilhaLivro.printStack()
            break
        case 3:
            console.clear()
            console.log("\nO Livro %s foi retirado da pilha!", pilhaLivro.peek())
            pilhaLivro.pop()
            console.log("\nLivros na Pilha!")
            pilhaLivro.printStack()
            break
        case 0:
            console.log("Programa Finalizado!")
            break
        default:
            console.log("Opção Inválida")
            break
    }

    leia.question("\nEnter para continuar")

    console.clear()

}
while(opcao != 0)

