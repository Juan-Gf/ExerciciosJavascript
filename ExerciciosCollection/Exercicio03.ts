import leia = require("readline-sync")

const numeros: Set<number> = new Set<number>()

let numero: number, aux: number;

for(let int = 0; int < 10; int++){
    numero = leia.questionInt("Digite um numero: ") 
    console.clear()
    numeros.add(numero)
}

 const arrayOrdena: number[] = [...numeros] // -> criado um array e inicializando ele com o SET 

arrayOrdena.sort((a,b)=> a-b) //-> Ordenar o Array 

const ordenado: Set<number> = new Set<number>(arrayOrdena) // -> Criando novo SET e inicializando com o Array 


for(let numero of ordenado){
    console.log(numero)
}


