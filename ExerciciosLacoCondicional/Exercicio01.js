const leia = require('readline-sync')

let numeroA, numeroB, numeroC

numeroA = leia.questionFloat("Digite o numero A: ")

numeroB = leia.questionFloat("Digite o numero B: ")

numeroC = leia.questionFloat("Digite o numero C: ")

console.clear()

if(numeroA + numeroB > numeroC){
    console.log("A Soma de A + B é Maior do que C")
}else if(numeroA + numeroB == numeroC){
    console.log("A Soma de A + B é Igual a C")
}else{
    console.log("A Soma de A + B é Menor do que C")
}
