const leia = require("readline-sync")

let idade, menor21=0, maior50=0

idade = leia.questionInt("Digite uma idade: ")

while(idade > 0){
    console.clear()

    if(idade < 21){
        menor21++
    }
    else if(idade > 50){
        maior50++
    }

    idade = leia.questionInt("Digite uma idade: ")

}
console.clear()
console.log("Total de pessoas menores de 21 anos: %i",menor21)

console.log("\nTotal de pessoas maiores de 50 anos: %i",maior50)