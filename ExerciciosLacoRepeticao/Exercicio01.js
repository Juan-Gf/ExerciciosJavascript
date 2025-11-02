const leia = require("readline-sync")

let numero1, numero2

numero1 = leia.questionInt("Digite o primeiro numero: ")
numero2 = leia.questionInt("Digite o segundo numero: ")

console.clear()

if(numero1 < numero2){
    console.log(`No intervalo entre ${numero1} e ${numero2}:`)
    let indice 
    for(indice = numero1; indice < numero2; indice++){
        if(indice%3 == 0){
            if(indice%5 == 0){
                console.log(`O ${indice} é multiplo de 3 e 5`)
            }
        }
    }

}
else{
    console.log("Intervalo inválido!")
}