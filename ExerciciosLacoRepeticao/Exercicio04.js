const leia = require("readline-sync")

let idade, idGenero, pessoaDes, pessoas = 0, continuar = true
let mobHomiMaior40 = 0, frontMulher = 0, fulStackBinari = 0, backEnd = 0, totalIdade = 0

while(continuar){
    idade = leia.questionInt("Digite a idade do colaborador: ")

    totalIdade = totalIdade + idade

    console.log("Identidade de Gênero")
    console.log("  1   | Mulher Cis")
    console.log("  2   | Homem Cis")
    console.log("  3   | Não Binário")
    console.log("  4   | Mulher Trans")
    console.log("  5   | Homem Trans")
    console.log("  6   | Outros")

    idGenero = leia.questionInt("Digite a identidade de Genero: ")
    console.clear()
    
    console.log("Pessoa Desenvolvedora")
    console.log("  1   | Backend")
    console.log("  2   | Frontend")
    console.log("  3   | Mobile")
    console.log("  4   | FullStack")

    pessoaDes = leia.questionInt("Digite a area de desenvolvimento: ")
    console.clear()

    if(pessoaDes == 1){
        backEnd++
    }
    else if(pessoaDes == 2){
            if(idGenero == 1 || idGenero == 4){
            frontMulher++
        }
    }
    else if(pessoaDes == 3){
        if(idade >= 40 ){
            if(idGenero == 2 || idGenero == 5){
            mobHomiMaior40++
            }
        }
    }
    else if(pessoaDes == 4){
            if(idGenero == 3){
                if(idade <= 30){
                    fulStackBinari++
                }
            } 
    }

    continuar = leia.keyInYNStrict("Deseja inserir mais dados: ")
    pessoas++
}

console.log("* O número de pessoas desenvolvedoras Backend: %i", backEnd)
console.log("* O número de Mulheres Cis e Trans desenvolvedoras Frontend %i", frontMulher)
console.log("* O número de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos %i", mobHomiMaior40)
console.log("* O número de Não Binários desenvolvedores FullStack menores de 30 anos %i", fulStackBinari)
console.log("* O número total de pessoas que responderam à pesquisa: %i", pessoas)
console.log("* A média de idade das pessoas que responderam à pesquisa: %f", totalIdade/pessoas)