const leia = require("readline-sync")

let par = 0, impar = 0, numero

for(let indice = 0; indice < 10; indice++){
    console.log(`Digite o ${indice+1}º numero`)
    numero = leia.questionInt()
    console.clear()
    if(numero%2 == 0){
        par++
    }
    else{
        impar++
    }
}

console.log("Total de números pares: %i",par)

console.log("\nTotal de números impares: %i",impar)