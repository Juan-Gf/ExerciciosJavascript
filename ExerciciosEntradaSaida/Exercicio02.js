// Atividade - Calcular media de nota
//Importanto biblioteca 
const leia = require('readline-sync')

// Variaveis 
let nota1, nota2, nota3, nota4, media

// Entrada de dados 
nota1 = leia.questionFloat("Digite a primeira nota: ")
nota2 = leia.questionFloat("Digite a segunda nota: ")
nota3 = leia.questionFloat("Digite a terceira nota: ")
nota4 = leia.questionFloat("Digite a quarta nota: ")

// Processamento dos dados
media = (nota1+nota2+nota3+nota4)/4
console.clear

// Saida de dados
console.log("A media é: %f", media.toFixed(1))

