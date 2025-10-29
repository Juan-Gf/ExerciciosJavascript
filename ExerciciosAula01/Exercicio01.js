// Atividade - Calculo novo salario
// Importando biblioteca
const leia = require('readline-sync')

//Variaveis
let salario, abono, novoSalario

// Entrada de dados
salario = leia.questionFloat("Digite o valor do salario: R$ ")

abono = leia.questionFloat("Digite o valor do abono salarial: R$ ")

// Processamento dos dados
novoSalario = salario + abono

// Saida dos dados
console.log("O novo salario é: R$ %f",novoSalario.toFixed(2))
