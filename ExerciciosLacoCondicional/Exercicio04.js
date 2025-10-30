const leia = require('readline-sync')

let colunaV, tipoAni, comida

console.log("Vertebrado | Invertebrado")
colunaV = leia.question("Escolha uma opcao: ")

if(colunaV == "Vertebrado"){
    console.log("\nAve | Mamuifero")
    tipoAni = leia.question("Escolha uma opcao: ")
    if(tipoAni == "Ave"){
        console.log("\nCarnivoro | Onivoro")
        comida = leia.question("Escolha uma opcao: ")
        if(comida == "Carnivoro"){
            console.log("Águia")

        }else{
            console.log("Pomba")
        }
    }else{
         console.log("\nOnivoro | Herbivoro")
        comida = leia.question("Escolha uma opcao: ")
        if(comida == "Onivoro"){
            console.log("Homem")

        }else{
            console.log("Vaca")
        }
    }

}else{
    console.log("\nInseto | Anelideo")
    tipoAni = leia.question("Escolha uma opcao: ")
    if(tipoAni == "Inseto"){
        console.log("\nHematofago | Herbivoro")
        comida = leia.question("Escolha uma opcao: ")
        if(comida == "Hematofago"){
            console.log("Pulga")

        }else{
            console.log("Largata")
        }
    }else{
        console.log("\nHematofago | Onivoro")
        comida = leia.question("Escolha uma opcao: ")
        if(comida == "Hematofago"){
            console.log("Sanguessuga")

        }else{
            console.log("Minhoca")
        }
    }
}
