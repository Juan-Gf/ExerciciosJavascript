import leia = require("readline-sync")

const cores: Array<string> = new Array<string>()

let cor: string;

for(let int = 0; int < 5; int++){
    cor = leia.question("Digite uma cor: ")

    cores.push(cor)

    console.clear()

}

console.log("Lista das cores: ")
for(let cor of cores){
    console.log(cor)
}

cores.sort()

console.log("\nLista das cores ordenadas: ")
for(let cor of cores){

    console.log(cor.toUpperCase())
}
