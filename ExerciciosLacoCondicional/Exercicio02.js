const leia = require('readline-sync')

let numero

numero = leia.questionInt("Digite um numero: ")

if(numero >= 0){
    if(numero%2 == 0){
        console.log("O Número %i é par e positivo", numero)
    }else{
        console.log("O Número %i é impar e positivo", numero)
    }
    
}else {
    if(numero%2 == 0){
        console.log("O Número %i é par e negativo", numero)
    }else{
        console.log("O Número %i é impar e negativo", numero)
    }
}
