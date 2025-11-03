import leia = require("readline-sync")

const numeros: Array<number> = new Array<number>(2,5,1,3,4,9,7,8,10,6)

let numero: number;

numero = leia.questionInt("Digite um numero: ")

if(numeros.indexOf(numero) != -1){
    console.log("O numero %i está na posição: %i", numero, numeros.indexOf(numero))

}else{
    console.log("O número %i não foi encontrado!", numero)
}

numeros.sort()

for(let numero of numeros){
    console.log(numero)
}
