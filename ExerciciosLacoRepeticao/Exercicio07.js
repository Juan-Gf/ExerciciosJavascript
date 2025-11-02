const leia = require("readline-sync")

let vetorInt = [2,5,1,3,4,9,7,8,10,6]

let numero, achou = false

numero = leia.questionInt("Digite um numero: ")

for(let indice = 0; indice <vetorInt.length; indice++){
    console.clear()
    
    if(vetorInt[indice] == numero){
        console.log("O número %i está localizado na posição: %i", numero, indice)
        achou = true
    }
}

if(achou){

}else{
    console.log("O número %i não foi encontrado!", numero)
}


