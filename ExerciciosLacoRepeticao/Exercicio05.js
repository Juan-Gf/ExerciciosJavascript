const leia = require("readline-sync")

let numero, totalPositivos = 0

do {
    numero = leia.questionInt("Digite um numero: ")
    if(numero>0){
        totalPositivos = totalPositivos + numero
    }
    console.clear()
    
}while (numero != 0)

console.log("A soma dos números positivos é: %i", totalPositivos)