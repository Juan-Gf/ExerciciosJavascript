const leia = require("readline-sync")

let numero, totalNumero = 0, media, contador = 0

do{
    numero = leia.questionInt("Digite um numero: ")
    if(numero%3 && numero > 0){
        totalNumero = totalNumero + numero
        contador++
    }
    console.clear()
}while (numero != 0)

media = totalNumero/contador

console.log("A média de todos os números positivos e múltiplos de 3 é: ", media.toFixed(2))
