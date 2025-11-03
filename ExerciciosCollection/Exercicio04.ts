import leia = require("readline-sync")

const numeros: Set<number> = new Set<number>([2,5,1,3,4,9,7,8,10,6])

let numero: number;

numero = leia.questionInt("Digite um numero: ")

if(numeros.has(numero)){
    console.log("O numero %i foi encontardo!", numero)

}else{
    console.log("O número %i não foi encontrado!", numero)
}
