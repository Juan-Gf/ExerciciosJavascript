const leia = require('readline-sync')

let idade, nome, doacaoVez


nome = leia.question("Digite o nome do doador: ")
idade = leia.questionInt("Digite a idade do doador: ")
doacaoVez = leia.keyInYNStrict("Primeira vez doando?")

console.clear()

if(idade >= 18 && idade <= 59){
    console.log("%s pode doar sangue!", nome)    
}
else if(idade >= 60 && idade <= 69){
    if(doacaoVez){
        console.log("%s não pode doar sangue!", nome)
    }else{
        console.log("%s pode doar sangue!", nome) 
    }
}
else{
    console.log("%s não pode doar sangue!", nome)
}

