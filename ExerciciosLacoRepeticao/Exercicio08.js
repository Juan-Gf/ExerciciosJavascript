const leia = require("readline-sync")

let vetorInt = new Array(10)

let soma = 0, media = 0

for(let indice = 0; indice < vetorInt.length; indice++){
    vetorInt[indice] = leia.questionInt("Digite um numero: ")
    console.clear()
}

console.log("Elementos nos índices ímpares: ")
for(let indice = 0; indice < vetorInt.length; indice++){
    soma = soma + vetorInt[indice]
    if(indice%2 != 0){
        console.log(vetorInt[indice])
    }
}

console.log("Elementos nos índices ímpares: ")
for(let indice = 0; indice < vetorInt.length; indice++){
    if(vetorInt[indice]%2 == 0){
        console.log(vetorInt[indice])
    }
}

media = soma / vetorInt.length

console.log("Soma: ", soma)

console.log("Media: ",media.toFixed(2))