// Atividade - Calculo salario liquido
// Importando biblioteca 
const leia = require('readline-sync')

// Variaveis
let salarioBruto
let adicionalNoturno
let horaExtra
let quantidadeDeHoraExtra
let descontos
let salarioLiquido

// Entrada de dados
console.log("Digite o valor do salario bruto: ")
salarioBruto = leia.questionFloat("R$ ")

console.log("Digite o valor do adicional noturno: ")
adicionalNoturno = leia.questionFloat("R$ ")

console.log("Digite o valor das horas extras: ")
horaExtra = leia.questionFloat("R$ ")

console.log("Digite a quantidade das horas extras: ")
quantidadeDeHoraExtra = leia.questionInt()

console.log("Digite o valor dos descontos: ")
descontos = leia.questionFloat("R$ ")

// Processamento dos dados 
salarioLiquido = salarioBruto + adicionalNoturno + (horaExtra*quantidadeDeHoraExtra) - descontos
console.clear()


// Saida de dados 
console.log("Valor do salário líquido é R$ "+salarioLiquido.toFixed(2))